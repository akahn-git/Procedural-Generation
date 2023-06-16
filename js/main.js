import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from 'three/addons/libs/stats.module.js';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as PLANE from './plane.js';
import * as CHUNK_MANAGER from './chunkManager.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

let renderer, scene, gui, activePlane, camera, freeControls, freeCamera, activeCamera;
let world = { x: 255, z: 255, y: 255 };
let chunks = [];
let sceneEntities = [];
let mouse = new THREE.Vector2();
let leftUpdate, rightUpdate, upUpdate, downUpdate = false;
let wKeyPressed, aKeyPressed, sKeyPressed, dKeyPressed, spaceKeyPressed, shiftKeyPressed = false;
const raycaster = new THREE.Raycaster();
let clock = new THREE.Clock();

const api = { 
    Noise: 'Perlin', 
    Biome: 'Random', 
    Terrain: 'Random', 
    Camera: 'Top Down', 
    WireFrame: false, 
    vertex: 0, 
    xCord: 0, 
    zCord: 0, 
    yCord: 100,
    zoomLevel: 0,
    PlaneSpeed: 5, 
    RenderDistance: 0, 
    ChunkMin: 0, 
    ChunkMax: 0, 
    ChunkAvg:0, 
    ChunkZID: 0, 
    ChunkXID: 0, 
    ChunkNoise: 'Noise', 
    ChunkBiome: 'Biome', 
    ChunkTerrain: 'Terrain',
    renderDistance: 1,
    oldRenderDistance: 1
};

const stats = new Stats();
const glbLoader = new GLTFLoader();
document.body.appendChild(stats.dom)

init();
render();

// Initialize

function init() {
    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; //
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // scene
    scene = new THREE.Scene();

    // set up skybox
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const cubeTexture = cubeTextureLoader.load([
        './resources/skybox/sky-right.jpg',
        './resources/skybox/sky-left.jpg',
        './resources/skybox/sky-top.jpg',
        './resources/skybox/sky-bottom.jpg',
        './resources/skybox/sky-front.jpg',
        './resources/skybox/sky-back.jpg'
      ]);
      scene.background = cubeTexture;

    // top down camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 500, 0);
    camera.rotation.order = 'YXZ';
    camera.rotation.y = -Math.PI / 2;
    camera.rotation.x = -Math.PI / 2;
    activeCamera = camera;
    
    // free camera
    freeCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    freeCamera.position.set(50, 50, 50);
    freeCamera.rotation.order = 'YXZ';
    freeCamera.rotation.y = -Math.PI / 2;
    freeCamera.rotation.x = -Math.PI / 2;
    
    // controls
    freeControls = new OrbitControls(freeCamera, renderer.domElement);
    freeControls.addEventListener('change', render);
    freeControls.enableZoom = false;
    freeControls.enablePan = false;
    freeControls.maxPolarAngle = Math.PI / 2;
    freeControls.target.set(0, 100, 0);
    freeControls.update();
  
    // light
    const light = new THREE.PointLight(0xffffff, 0.9, 0, 100000);
    light.position.set(0, 50, 120);
    light.castShadow = true;
    light.shadow.mapSize.width = 512; // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 5000; // default

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.castShadow = true;
    directionalLight.position.set(-5, 20, 4);
    directionalLight.target.position.set(9, 0, -9);
    directionalLight.shadow.camera.left *= 9;
    directionalLight.shadow.camera.right *= 9;
    directionalLight.shadow.camera.top *= 9;
    directionalLight.shadow.camera.bottom *= 9;

    scene.add(light);
    scene.add(directionalLight);

    // ground
    chunks = CHUNK_MANAGER.initializeChunks(world,scene,api,glbLoader);
      
    // plane 
    PLANE.loadPlane(scene, sceneEntities, glbLoader).then(plane => {
        activePlane = plane;
        //console.log("plane loaded: ",activePlane)
    }).catch(err => {
        console.log(err);
    });

    // gui
    createGUI();

    // event listeners
    window.addEventListener("resize", onWindowResize);
    window.addEventListener("mousedown", mouseDown, false);
    window.addEventListener("mousemove", mouseMove, false);
    window.addEventListener("keydown", onDocumentKeyDown, false);
    window.addEventListener("keyup", onDocumentKeyUp, false);

}

// GUI 
function createGUI() {
    gui = new GUI();

    const cameras = ['Top View', 'Free View'];
    const camerasFolder = gui.addFolder('Cameras Control');
    const cameraCtrl = camerasFolder.add(api, 'Camera').options(cameras);
    cameraCtrl.onChange(function() {
        if (api.Camera == "Free View") {
            activeCamera = freeCamera;
        }
        if (api.Camera == "Top View") {
            activeCamera = camera;
        }
    });

    const wireFrameFolder = gui.addFolder('Wireframe Control');
    const wireFrameCtrl = wireFrameFolder.add(api, 'WireFrame').onChange(function() {
        for(let i = 0; i < chunks.length; i++) {
            for(let j = 0; j < chunks[i].length; j++) {
                chunks[i][j].groundMaterial.wireframe = api.WireFrame;
            }
        }
    });

    /*
    const noises = ['Random', 'Flat', 'Perlin'];
    const noiseFolder = gui.addFolder('Noise Control');
    const noiseCtrl = noiseFolder.add(api, 'Noise').options(noises);
    noiseCtrl.onChange(function() {
        chunks = CHUNK_MANAGER.destroyAllChunks(scene, chunks,api);
        chunks = CHUNK_MANAGER.initializeChunks(world,scene,api,glbLoader);
        PLANE.setPlaneLocation(0,100,0,activePlane);
        camera.position.set(0, 1000, 0);
        camera.rotation.y = -Math.PI / 2;
        camera.rotation.x = -Math.PI / 2;
        freeCamera.position.set(50, 50, 50);
        freeCamera.rotation.y = -Math.PI / 2;
        freeCamera.rotation.x = -Math.PI / 2;
        freeControls.target.set(0, 100, 0);
        freeControls.update();
        api.ChunkZID = 0;
        api.ChunkXID = 0;
        api.zCord = 0;
        api.xCord = 0;
        api.ChunkMax = 0;
        api.ChunkMin = 0;
        api.ChunkAvg = 0;
    });
    */

    const renderDistanceFolder = gui.addFolder('Render Distance Control');
    const renderDistanceCtrl = renderDistanceFolder.add(api, 'renderDistance').step(1).min(0).max(10).name('Render Distance').onChange(function() {
        chunks = CHUNK_MANAGER.destroyAllChunks(scene, chunks,api);
        chunks = CHUNK_MANAGER.initializeChunks(world,scene,api,glbLoader);
        PLANE.setPlaneLocation(0,100,0,activePlane);
        camera.position.set(0, 500, 0);
        camera.rotation.y = -Math.PI / 2;
        camera.rotation.x = -Math.PI / 2;
        freeCamera.position.set(50, 50, 50);
        freeCamera.rotation.y = -Math.PI / 2;
        freeCamera.rotation.x = -Math.PI / 2;
        freeControls.target.set(0, 100, 0);
        freeControls.update();
        api.ChunkZID = 0;
        api.ChunkXID = 0;
        api.zCord = 0;
        api.xCord = 0;
        api.ChunkMax = 0;
        api.ChunkMin = 0;
        api.ChunkAvg = 0;
        api.oldRenderDistance = api.renderDistance;
    });

    const coordinatesFolder = gui.addFolder('Coordinates Control');
    const xCoordinatesCtrl = coordinatesFolder.add(api, 'xCord').step(0.1).name('X').listen();
    const zCoordinatesCtrl = coordinatesFolder.add(api, 'zCord').step(0.1).name('Z').listen();
    const yCoordinatesCtrl = coordinatesFolder.add(api, 'yCord').step(0.1).name('Y').listen();

    xCoordinatesCtrl.onChange(function() {
        camera.position.x = api.xCord;
        freeCamera.position.x = api.xCord;
        activePlane.position.x = api.xCord;
    });

    zCoordinatesCtrl.onChange(function() {
        camera.position.z = api.zCord;
        freeCamera.position.z = api.zCord;
        activePlane.position.z = api.zCord;
    });

    yCoordinatesCtrl.onChange(function() {
        camera.position.y = api.yCord;
        freeCamera.position.y = api.yCord;
        activePlane.position.y = api.yCord;
    });

    const biomes = ['Earth', 'Fire', 'Ice', 'Water', 'Random'];
    const biomeFolder = gui.addFolder('Biome Control');
    const biomeCtrl = biomeFolder.add(api, 'Biome').options(biomes);
    biomeCtrl.onChange(function() {
        chunks = CHUNK_MANAGER.destroyAllChunks(scene, chunks, api);
        chunks = CHUNK_MANAGER.initializeChunks(world, scene, api, glbLoader);
        PLANE.setPlaneLocation(0,100,0,activePlane);
        camera.position.set(0,500, 0);
        camera.rotation.y = -Math.PI / 2;
        camera.rotation.x = -Math.PI / 2;
        freeCamera.position.set(50, 50, 50);
        freeCamera.rotation.y = -Math.PI / 2;
        freeCamera.rotation.x = -Math.PI / 2;
        freeControls.target.set(0, 100, 0);
        freeControls.update();
        api.ChunkZID = 0;
        api.ChunkXID = 0;
        api.zCord = 0;
        api.xCord = 0;
        api.ChunkMax = 0;
        api.ChunkMin = 0;
        api.ChunkAvg = 0;
    });

    const terrains = ['Hill', 'Mountain', 'Ocean', 'Plain', 'Random'];
    const terrainFolder = gui.addFolder('Terrain Control');
    const terrainCtrl = terrainFolder.add(api, 'Terrain').options(terrains);
    terrainCtrl.onChange(function() {
        chunks = CHUNK_MANAGER.destroyAllChunks(scene, chunks,api);
        chunks = CHUNK_MANAGER.initializeChunks(world, scene, api, glbLoader);
        PLANE.setPlaneLocation(0,100,0,activePlane);
        camera.position.set(0, 500, 0);
        camera.rotation.y = -Math.PI / 2;
        camera.rotation.x = -Math.PI / 2;
        freeCamera.position.set(50, 50, 50);
        freeCamera.rotation.y = -Math.PI / 2;
        freeCamera.rotation.x = -Math.PI / 2;
        freeControls.target.set(0, 100, 0);
        freeControls.update();
        api.ChunkZID = 0;
        api.ChunkXID = 0;
        api.zCord = 0;
        api.xCord = 0;
        api.ChunkMax = 0;
        api.ChunkMin = 0;
        api.ChunkAvg = 0;
    });

    const chunkStatsFolder = gui.addFolder('Chunk Stats');
    const maximumHeight = chunkStatsFolder.add(api, 'ChunkMax').listen();
    const averageHeight = chunkStatsFolder.add(api, 'ChunkAvg').listen();
    const currentChunkZID = chunkStatsFolder.add(api, 'ChunkZID').listen();
    const currentChunkXID = chunkStatsFolder.add(api, 'ChunkXID').listen();
    const chunkNoise = chunkStatsFolder.add(api, 'ChunkNoise').listen();
    const chunkBiome = chunkStatsFolder.add(api, 'ChunkBiome').listen();
    const chunkTerrain = chunkStatsFolder.add(api, 'ChunkTerrain').listen();

}

// Mouse and Window Events

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    freeCamera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    freeCamera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function mouseMove(event) {
    event.preventDefault();
}

function mouseDown(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function zoomIn() {
    if(activeCamera == camera) {
        camera.position.y -= 0.3;
    }
    else if(activeCamera == freeCamera) {
        freeCamera.position.x += 0.1;
        freeCamera.position.y -= 0.1;
        freeCamera.position.z += 0.1;
        freeControls.target.copy(activePlane.position);
    }
}

function zoomOut() {
    if(activeCamera == camera) {
        camera.position.y += 0.3;
    }
    else if(activeCamera == freeCamera) {
        freeCamera.position.x -= 0.1;
        freeCamera.position.y += 0.1;
        freeCamera.position.z -= 0.1;
        freeControls.target.copy(activePlane.position);
    }

}

// Key Press Functions

function onDocumentKeyDown(event) {
    if (event.keyCode == 87) { // Keycode for 'W'
        wKeyPressed = true;
    }
    if (event.keyCode == 83) { // Keycode for 'S'
        sKeyPressed = true;
    }
    if (event.keyCode == 65) { // Keycode for 'A'
        aKeyPressed = true;
    }
    if (event.keyCode == 68) { // Keycode for 'D'
        dKeyPressed = true;
    }
    if (event.keyCode == 32) { // Keycode for Spacebar
        spaceKeyPressed = true;
    }
    if (event.keyCode == 16) { // Keycode for Shift
        shiftKeyPressed = true;
    }
    if (event.keyCode == 187) { // Keycode for '+'
        zoomIn();
    }
    if (event.keyCode == 189) { // Keycode for '-'
        zoomOut();
    }
}

function onDocumentKeyUp(event) {
    if (event.keyCode == 87) { // Keycode for 'W'
        wKeyPressed = false;
    }
    if (event.keyCode == 83) { // Keycode for 'S'
        sKeyPressed = false;
    }
    if (event.keyCode == 65) { // Keycode for 'A'
        aKeyPressed = false;
    }
    if (event.keyCode == 68) { // Keycode for 'D'
        dKeyPressed = false;
    }
    if (event.keyCode == 32) { // Keycode for Spacebar
        spaceKeyPressed = false;
    }
    if (event.keyCode == 16) { // Keycode for Shift
        shiftKeyPressed = false;
    }
}

// Animation Functions

function render() {
    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);

    // update the plane position
    if(wKeyPressed) {
        upUpdate = PLANE.movePlaneForward(world, camera, freeCamera, freeControls, api, activePlane);
        if(upUpdate) {
            chunks = CHUNK_MANAGER.loadTopRow(world, scene, api, chunks,glbLoader);
        }
    }
    if(sKeyPressed) {
        downUpdate = PLANE.movePlaneBackward(world, camera, freeCamera, freeControls, api, activePlane);
        if(downUpdate) {
            chunks = CHUNK_MANAGER.loadBottomRow(world, scene, api, chunks,glbLoader);
        }
    }
    if(aKeyPressed) {
        leftUpdate = PLANE. movePlaneLeft(world, camera, freeCamera, freeControls, api, activePlane);
        if(leftUpdate) {
            chunks = CHUNK_MANAGER.loadLeftColumn(world, scene, api, chunks,glbLoader);
        }
    }
    if(dKeyPressed) {
        rightUpdate = PLANE.movePlaneRight(world, camera, freeCamera, freeControls, api, activePlane);
        if(rightUpdate) {
            chunks = CHUNK_MANAGER.loadRightColumn(world, scene, api, chunks,glbLoader);
        }
    }
    if(spaceKeyPressed) {
        PLANE.movePlaneUp(camera, freeCamera, freeControls, api, activePlane);
    }
    if(shiftKeyPressed) {
        PLANE.movePlaneDown(camera, freeCamera, freeControls, api, activePlane);
    }

    renderer.render(scene, activeCamera);
    stats.update()
}

animate();