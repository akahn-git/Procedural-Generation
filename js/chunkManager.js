import * as THREE from 'three';
import * as BIOME from './biome.js';
import * as TERRAIN from './terrain.js';
import * as MATH from './math.js';
import * as PROPS from './props.js';

// Chunk Management
//let renderDistance = 1;
//let rows = 2*renderDistance + 1;
//let columns = 2*renderDistance + 1;

let centerZ, centerX;
let chunk, groundTerrain, groundGeometry, groundMaterial;

export function initializeChunks(world,scene,api,glbLoader) {
    let chunks = [];

    //console.log("Initializing Chunks render distance: "+ api.renderDistance)

    centerX = world.x * api.renderDistance;
    for(let i = 0; i < 2 * api.renderDistance + 1; i++) {
        let row = [];
        centerZ = -world.z * api.renderDistance;
        for(let j = 0; j < 2 * api.renderDistance + 1; j++) {
            chunk = generateChunk(world, api, centerZ, centerX, api.Noise, api.Biome, api.Terrain, glbLoader,scene);
            row.push(chunk);
            centerZ += world.z;
            scene.add(chunk);

            if(i == api.renderDistance && j == api.renderDistance) {
                api.ChunkNoise = chunk.noise;
                api.ChunkBiome = chunk.biome;
                api.ChunkTerrain = chunk.terrain;
                api.ChunkMax = chunk.max;
                api.ChunkMin = chunk.min;
                api.ChunkAvg = chunk.avg;
            }
        }
        chunks.push(row);
        centerX -= world.x;
    }

    return chunks;
}

export function destroyAllChunks(scene, chunks, api){
    for (let i = 0; i < 2 * api.oldRenderDistance + 1; i++) {
        for (let j = 0; j < 2 * api.oldRenderDistance + 1; j++) {
            scene.remove(chunks[i][j]);
            PROPS.destroyAllProps(chunks[i][j], scene);
        }
    }
    chunks = [];
    api.ChunkNoise = "Random";
    api.ChunkBiome = "Random";
    api.ChunkTerrain = "Random";
    api.ChunkMax = 0;
    api.ChunkMin = 0;
    api.ChunkAvg = 0;

    return chunks;
}

//Chunk Generator

export function generateChunk(world, api,centerZ, centerX, noise, biome, terrain, glbLoader,scene) {

    groundTerrain = TERRAIN.getGroundTerrain(world,centerZ,centerX,terrain, noise);
    groundGeometry = groundTerrain.groundGeometry;
    groundMaterial = BIOME.getGroundMaterial(api,centerZ,centerX,biome,terrain, groundTerrain.min, groundTerrain.max);
    chunk = new THREE.Mesh(groundGeometry, groundMaterial);
    chunk.castShadow = true; //default is false
    chunk.receiveShadow = true; //default  
    chunk.rotation.order = 'YXZ';
    chunk.rotation.y = -Math.PI / 2;
    chunk.rotation.x = -Math.PI / 2;
    chunk.position.x = centerX;
    chunk.position.z = centerZ;
    chunk.groundGeometry = groundGeometry;
    chunk.groundMaterial = groundMaterial;
    chunk.ZID = Math.trunc(centerZ / world.z);
    chunk.XID = Math.trunc(centerX / world.x);
    chunk.noise = noise;
    chunk.min = groundTerrain.min;
    chunk.max = groundTerrain.max;
    chunk.avg = groundTerrain.avg;
    chunk.noise = noise;

    if(biome == "Random"){
        let biomeNoise = MATH.improvedNoise(centerZ+0.7, 0, centerX+0.7);
        let biomeNum = (Math.abs(biomeNoise) *10) % 4;
        if(biomeNum < 1) {
            chunk.biome = "Fire";
        }
        else if(biomeNum < 2) {
            chunk.biome = "Ice";
        }
        else if(biomeNum < 3) {
            chunk.biome = "Earth";
        }
        else if(biomeNum < 4) {
            chunk.biome = "Water";
        }
    }
    else{
        chunk.biome = biome;
    }

    if(terrain == "Random"){
        let noise = MATH.improvedNoise(centerZ+0.5, 0, centerX+0.5);
        let terrainNum = (Math.abs(noise) *10) % 4;
        if(terrainNum < 1){
            chunk.terrain = "Mountain";
        }
        else if(terrainNum < 2){
           chunk.terrain = "Hill";
        }
        else if(terrainNum < 3){
            chunk.terrain = "Plain";
        }
        else if(terrainNum < 4){
            chunk.terrain = "Ocean";
        }
    }
    else{
        chunk.terrain = terrain;
    }

    //Generate Props
    if(noise =="Perlin"){
        chunk.props = PROPS.generateProps(chunk, 0.8, 0.22, glbLoader, scene);
    }
    
    return chunk;
}

export function logChunks(chunks){
    for(let i = 0; i< 2 * api.renderDistance + 1; i++){
        for(let j = 0; j< 2 * api.renderDistance + 1; j++){
            console.log("Chunk["+i+"]["+j+"]" + " ZID: " + chunks[i][j].ZID + " XID: " + chunks[i][j].XID);
        }
    }
}

export function loadLeftColumn(world, scene, api, chunks, glbLoader) {
    let tempChunks = [];

    for(let i = 0; i < 2 * api.renderDistance + 1; i++){
        let tempRow = [];
        chunk = generateChunk(world, api, chunks[i][0].position.z - world.z, chunks[i][0].position.x, api.Noise, api.Biome, api.Terrain, glbLoader,scene);
        tempRow.push(chunk);
        for(let j = 0; j < 2* api.renderDistance; j++){
            tempRow.push(chunks[i][j]);
        }
        tempChunks.push(tempRow);
        scene.add(chunk);
        scene.remove(chunks[i][2 * api.renderDistance]);
        PROPS.destroyAllProps(chunks[i][2 * api.renderDistance], scene);

    }

    api.ChunkNoise = tempChunks[api.renderDistance][api.renderDistance].noise;
    api.ChunkBiome = tempChunks[api.renderDistance][api.renderDistance].biome;
    api.ChunkTerrain = tempChunks[api.renderDistance][api.renderDistance].terrain;
    api.ChunkMax = tempChunks[api.renderDistance][api.renderDistance].max;
    api.ChunkMin = tempChunks[api.renderDistance][api.renderDistance].min;
    api.ChunkAvg = tempChunks[api.renderDistance][api.renderDistance].avg;

    return tempChunks;
}


export function loadRightColumn(world, scene, api, chunks, glbLoader) {
    let tempChunks = [];
    let tempRow;

    //console.log("Loading Right Column");

    for(let i = 0; i< 2 * api.renderDistance + 1; i++){
        tempRow = chunks[i];
        chunk = generateChunk(world, api, chunks[i][2 * api.renderDistance].position.z + world.z, chunks[i][2 * api.renderDistance].position.x, api.Noise, api.Biome, api.Terrain, glbLoader,scene);
        tempRow.push(chunk);
        tempRow = tempRow.slice(1);
        tempChunks.push(tempRow);
        scene.add(chunk);
        scene.remove(chunks[i][0]);
        PROPS.destroyAllProps(chunks[i][0], scene);
    }

    api.ChunkNoise = tempChunks[api.renderDistance][api.renderDistance].noise;
    api.ChunkBiome = tempChunks[api.renderDistance][api.renderDistance].biome;
    api.ChunkTerrain = tempChunks[api.renderDistance][api.renderDistance].terrain;
    api.ChunkMax = tempChunks[api.renderDistance][api.renderDistance].max;
    api.ChunkMin = tempChunks[api.renderDistance][api.renderDistance].min;
    api.ChunkAvg = tempChunks[api.renderDistance][api.renderDistance].avg;

    return tempChunks;
    
}

export function loadTopRow(world, scene, api, chunks, glbLoader) {
    let tempChunks = [];
    let row = [];

    //console.log("Loading Top Row");

    for(let i = 0; i< 2 * api.renderDistance + 1; i++){
        chunk = generateChunk(world, api, chunks[0][i].position.z, chunks[0][i].position.x + world.x, api.Noise, api.Biome, api.Terrain, glbLoader,scene);
        row.push(chunk);
        scene.add(chunk);
        scene.remove(chunks[2 *api.renderDistance][i]);
        PROPS.destroyAllProps(chunks[2*api.renderDistance][i], scene);
    }
    tempChunks.push(row);

    for(let i = 0; i< 2 *api.renderDistance; i++){
        tempChunks.push(chunks[i]);
    }
    
    api.ChunkNoise = tempChunks[api.renderDistance][api.renderDistance].noise;
    api.ChunkBiome = tempChunks[api.renderDistance][api.renderDistance].biome;
    api.ChunkTerrain = tempChunks[api.renderDistance][api.renderDistance].terrain;
    api.ChunkMax = tempChunks[api.renderDistance][api.renderDistance].max;
    api.ChunkMin = tempChunks[api.renderDistance][api.renderDistance].min;
    api.ChunkAvg = tempChunks[api.renderDistance][api.renderDistance].avg;

    return tempChunks;
}

export function loadBottomRow(world, scene, api, chunks, glbLoader) {
    let tempChunks = [];
    let row = [];
    
    for(let i = 0; i < 2 * api.renderDistance + 1; i++){
        chunk = generateChunk(world, api, chunks[2*api.renderDistance][i].position.z, chunks[2*api.renderDistance][i].position.x - world.x, api.Noise, api.Biome, api.Terrain, glbLoader,scene);
        row.push(chunk);
        scene.add(chunk);
        scene.remove(chunks[0][i]);
        PROPS.destroyAllProps(chunks[0][i], scene);
    }

    for(let i = 1; i < 2 * api.renderDistance + 1; i++){
        tempChunks.push(chunks[i]);
    }

    tempChunks.push(row);

    api.ChunkNoise = tempChunks[api.renderDistance][api.renderDistance].noise;
    api.ChunkBiome = tempChunks[api.renderDistance][api.renderDistance].biome;
    api.ChunkTerrain = tempChunks[api.renderDistance][api.renderDistance].terrain;
    api.ChunkMax = tempChunks[api.renderDistance][api.renderDistance].max;
    api.ChunkMin = tempChunks[api.renderDistance][api.renderDistance].min;
    api.ChunkAvg = tempChunks[api.renderDistance][api.renderDistance].avg;

    return tempChunks;
}


export function getChunkIDs(chunks) {
    let chunkIDs = "";
    for(let i = 0; i< rows; i++){
        for(let j = 0; j< columns; j++){
            chunkIDs += "["+chunks[i][j].ZID+","+chunks[i][j].XID+"]";
        }
        chunkIDs += "\n";
    }

    return chunkIDs;
}