import * as THREE from 'three';
import * as MATH from "./math.js";

const MOUNTAIN_MULTIPLIER = 64;
const HILL_MULTIPLIER = 32;
const PLAIN_MULTIPLIER = 16;
const OCEAN_MULTIPLIER = 8;

let groundGeometry;
let verticies;
let min,max,avg;
let height;

export function getRandomTerrain(world){

    groundGeometry = new THREE.PlaneGeometry(world.x, world.z, world.x-1, world.z-1);
    verticies = groundGeometry.attributes.position;
    min = world.y*2;
    max = -world.y*2;
    avg = 0;
    for(let i = 0; i < verticies.count; i++) {
        height = Math.random() * world.y;
        
        if(height < min) {
            min = height;
        }

        if(height > max) {
            max = height;
        }

        avg += height;
        verticies.setZ(i, height);

    }
    verticies.needsUpdate = true;
    avg = avg / verticies.count;

    return { groundTerrain: groundTerrain, min: min, max: max, avg: avg, terrain: "Random"}
}

export function getFlatTerrain(world){
    
    groundGeometry = new THREE.PlaneGeometry(world.x, world.z, world.x-1, world.z-1);

    return { groundGeometry: groundGeometry, min: 0, max: 0, avg: 0, terrain: "Flat"}
}

export function getPerlinTerrain(world,terrain,centerX,centerZ,frequency){
    groundGeometry = new THREE.PlaneGeometry(world.x, world.z, world.x-1, world.z-1);
    verticies = groundGeometry.attributes.position;
    min = world.y*2;
    max = -world.y*2;
    avg = 0;
    for(let i = 0; i < verticies.count; i++) {
        let x = (verticies.getY(i) + centerX) * frequency;
        let y = (verticies.getZ(i) + 0) * frequency;
        let z = (verticies.getX(i) + centerZ) * frequency;
        let height = MATH.improvedNoise(x, y, z);
        
        if(terrain == "Mountain"){
            height *= MOUNTAIN_MULTIPLIER;
        }
        else if(terrain == "Hill"){
            height *= HILL_MULTIPLIER;
        }
        else if(terrain == "Plain"){
            height *= PLAIN_MULTIPLIER;
        }
        else if(terrain == "Ocean"){
            height *= OCEAN_MULTIPLIER;
        }
        else if(terrain == "Random"){
            let noise = MATH.improvedNoise(centerZ+0.5, 0, centerX+0.5);
            let terrainNum = (Math.abs(noise) *10) % 4;
            if(terrainNum < 1){
                height *= MOUNTAIN_MULTIPLIER;
            }
            else if(terrainNum < 2){
                height *= HILL_MULTIPLIER;
            }
            else if(terrainNum < 3){
                height *= PLAIN_MULTIPLIER;
            }
            else if(terrainNum < 4){
                height *= OCEAN_MULTIPLIER;
            }
        }

        if(height < 0){
            height = 0;
        }
        if(height < min) {
            min = height;
        }
        if(height > max) {
            max = height;
        }

        avg += height;
        verticies.setZ(i, height);

    }
    verticies.needsUpdate = true;
    avg = avg / verticies.count;
    return { groundGeometry: groundGeometry, min: min, max: max, avg: avg, terrain: terrain}
}

export function getGroundTerrain(world,centerZ,centerX,terrain,noise){

    if(noise == "Random"){
        return getRandomTerrain(world);
    }
    else if(noise == "Flat"){
        return getFlatTerrain(world);
    }
    else if(noise == "Perlin"){
        return getPerlinTerrain(world,terrain,centerX,centerZ, 0.02201);
    }
    else{
        return new THREE.PlaneGeometry(10, 10, 10, 10);
    }
}
