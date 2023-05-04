import * as MATH from './math.js';

// Prop Management
let propTypes = 2;
let scale = 1;

// Earth Hill Props

export function generateEarthHillTree(posX, posY, posZ, rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/earth/earth-hill/bushy-tree.glb', function(gltf) {
            let tree = gltf.scene;
            scale = 1;
            tree.scale.set(scale, scale, scale);
            tree.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            tree.rotation.y = rotation;
            tree.position.y = posY;
            tree.position.x = posX ;
            tree.position.z = posZ ;
            tree.name = "earth-plain-tree";
            scene.add(tree);
            resolve(tree);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateEarthHillDeer(posX, posY, posZ, rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/earth/earth-hill/brown-deer.glb', function(gltf) {
            let deer = gltf.scene;
            scale = 2;
            deer.scale.set(scale, scale, scale);
            deer.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            deer.rotation.y = rotation;
            deer.position.y = posY;
            deer.position.x = posX ;
            deer.position.z = posZ ;
            deer.name = "earth-plain-deer";
            scene.add(deer);
            resolve(deer);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

    
// Earth Mountain Props

export function generateEarthMountainTree(posX, posY, posZ, rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/earth/earth-mountain/pine-tree.glb', function(gltf) {
            let tree = gltf.scene;
            scale = 2.5;
            tree.scale.set(scale, scale, scale);
            tree.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            tree.rotation.y = rotation;
            tree.position.y = posY;
            tree.position.x = posX ;
            tree.position.z = posZ ;
            tree.name = "earth-mountain-tree";
            scene.add(tree);
            resolve(tree);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateEarthMountainRock(posX, posY, posZ, rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/earth/earth-mountain/cliff-rock.glb', function(gltf) {
            let rock = gltf.scene;
            scale = 1;
            rock.scale.set(scale, scale, scale);
            rock.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            rock.rotation.y = rotation;
            rock.position.y = posY - 1;
            rock.position.x = posX ;
            rock.position.z = posZ ;
            rock.name = "earth-mountain-rock";
            scene.add(rock);
            resolve(rock);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Earth Ocean Props

export function generateEarthOceanBoat(posX, posY, posZ, rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/earth/earth-ocean/sail-boat.glb', function(gltf) {
            let boat = gltf.scene;
            scale = 0.2;
            boat.scale.set(scale, scale, scale);
            boat.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            boat.rotation.y = rotation;
            boat.position.y = posY - 45;
            boat.position.x = posX;
            boat.position.z = posZ;
            boat.name = "earth-ocean-boat";
            scene.add(boat);
            resolve(boat);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateEarthOceanTree(posX, posY, posZ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/earth/earth-ocean/palm-tree.glb', function(gltf) {
            let tree = gltf.scene;
            scale = 1;
            tree.scale.set(scale, scale, scale);
            tree.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            tree.rotation.y = rotation;
            tree.position.y = posY ;
            tree.position.x = posX ;
            tree.position.z = posZ ;
            tree.name = "earth-ocean-tree";
            scene.add(tree);
            resolve(tree);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Earth Plain Props

export function generateEarthPlainFlower(posX, posY, posZ, rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/earth/earth-plain/colored-flower.glb', function(gltf) {
            let flower = gltf.scene;
            scale = 3;
            flower.scale.set(scale, scale, scale);
            flower.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            flower.rotation.y = rotation;
            flower.position.y = posY;
            flower.position.x = posX ;
            flower.position.z = posZ ;
            flower.name = "earth-plain-flower";
            scene.add(flower);
            resolve(flower);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Fire Hill Props

export function generateFireHillTree(posX,posY,posZ ,rotation,glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/fire/fire-hill/bushy-tree.glb', function(gltf) {
            let tree = gltf.scene;
            scale = 0.25;
            tree.scale.set(scale, scale, scale);
            tree.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            tree.rotation.y = rotation;
            tree.position.y = posY - 48;
            tree.position.x = posX ;
            tree.position.z = posZ ;
            tree.name = "fire-hill-tree";
            scene.add(tree);
            resolve(tree);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateFireHillFox(posX,posY,posZ , rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/fire/fire-hill/orange-fox.glb', function(gltf) {
            let fox = gltf.scene;
            scale = 2;
            fox.scale.set(scale, scale, scale);
            fox.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            fox.rotation.y = rotation;
            fox.position.y = posY + 2;
            fox.position.x = posX ;
            fox.position.z = posZ ;
            fox.name = "fire-hill-fox";
            scene.add(fox);
            resolve(fox);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Fire Mountain Props

export function generateFireMountainTree(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/fire/fire-mountain/burnt-tree.glb', function(gltf) {
            let tree = gltf.scene;
            scale = 0.1;
            tree.scale.set(scale, scale, scale);
            tree.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            tree.rotation.y = rotation;
            tree.position.y = posY + 2;
            tree.position.x = posX ;
            tree.position.z = posZ ;
            tree.name = "fire-mountain-tree";
            scene.add(tree);
            resolve(tree);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateFireMountainRock(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/fire/fire-mountain/fire-rock.glb', function(gltf) {
            let rock = gltf.scene;
            scale = 4;
            rock.scale.set(scale, scale, scale);
            rock.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            rock.rotation.y = rotation;
            rock.position.y = posY - 1;
            rock.position.x = posX ;
            rock.position.z = posZ ;
            rock.name = "fire-mountain-rock";
            scene.add(rock);
            resolve(rock);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Fire Ocean Props

export function generateFireOceanBoat(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/fire/fire-ocean/death-boat.glb', function(gltf) {
            let boat = gltf.scene;
            scale = 2;
            boat.scale.set(scale, scale, scale);
            boat.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            boat.rotation.y = rotation;
            boat.position.y = posY + 5;
            boat.position.x = posX ;
            boat.position.z = posZ ;
            boat.name = "fire-ocean-boat";
            scene.add(boat);
            resolve(boat);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateFireOceanDeath(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/fire/fire-ocean/black-death.glb', function(gltf) {
            let death = gltf.scene;
            scale = 0.9;
            death.scale.set(scale, scale, scale);
            death.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            death.rotation.y = rotation;
            death.position.y = posY ;
            death.position.x = posX ;
            death.position.z = posZ ;
            death.name = "fire-ocean-death";
            scene.add(death);
            resolve(death);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Fire Plains Props

export function generateFirePlainFlower(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/fire/fire-plain/fire-flower.glb', function(gltf) {
            let flower = gltf.scene;
            scale = 2;
            flower.scale.set(scale, scale, scale);
            flower.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            flower.rotation.y = rotation;
            flower.position.y = posY ;
            flower.position.x = posX ;
            flower.position.z = posZ ;
            flower.name = "fire-plain-flower";
            scene.add(flower);
            resolve(flower);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Ice Hill Props

export function generateIceHillTree(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/ice/ice-hill/ice-tree.glb', function(gltf) {
            let tree = gltf.scene;
            scale = 1;
            tree.scale.set(scale, scale, scale);
            tree.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            tree.rotation.y = rotation;
            tree.position.y = posY ;
            tree.position.x = posX ;
            tree.position.z = posZ ;
            tree.name = "ice-hill-tree";
            scene.add(tree);
            resolve(tree);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateIceHillPenguin(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/ice/ice-hill/black-penguin.glb', function(gltf) {
            let penguin = gltf.scene;
            scale = 1;
            penguin.scale.set(scale, scale, scale);
            penguin.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            penguin.rotation.y = rotation;
            penguin.position.y = posY ;
            penguin.position.x = posX ;
            penguin.position.z = posZ ;
            penguin.name = "ice-hill-penguin";
            scene.add(penguin);
            resolve(penguin);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Ice Mountain Props

export function generateIceMountainTree(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/ice/ice-mountain/snow-tree.glb', function(gltf) {
            let tree = gltf.scene;
            scale = 3;
            tree.scale.set(scale, scale, scale);
            tree.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            tree.rotation.y = rotation;
            tree.position.y = posY ;
            tree.position.x = posX ;
            tree.position.z = posZ ;
            tree.name = "ice-mountain-tree";
            scene.add(tree);
            resolve(tree);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateIceMountainRock(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/ice/ice-mountain/ice-rock.glb', function(gltf) {
            let rock = gltf.scene;
            scale = 1;
            rock.scale.set(scale, scale, scale);
            rock.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            rock.rotation.y = rotation;
            rock.position.y = posY - 2;
            rock.position.x = posX ;
            rock.position.z = posZ;
            rock.name = "ice-mountain-rock";
            scene.add(rock);
            resolve(rock);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Ice Ocean Props

export function generateIceOceanBuoy(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/ice/ice-ocean/red-buoy.glb', function(gltf) {
            let buoy = gltf.scene;
            scale = 0.4;
            buoy.scale.set(scale, scale, scale);
            buoy.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            buoy.rotation.y = rotation;
            buoy.position.y = posY ;
            buoy.position.x = posX ;
            buoy.position.z = posZ ;
            buoy.name = "ice-ocean-buoy";
            scene.add(buoy);
            resolve(buoy);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateIceOceanSnowman(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/ice/ice-ocean/white-snowman.glb', function(gltf) {
            let snowman = gltf.scene;
            scale = 1.5;
            snowman.scale.set(scale, scale, scale);
            snowman.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            snowman.rotation.y = rotation;
            snowman.position.y = posY + 2;
            snowman.position.x = posX ;
            snowman.position.z = posZ ;
            snowman.name = "ice-ocean-snowman";
            scene.add(snowman);
            resolve(snowman);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Ice Plain Props

export function generateIcePlainIgloo(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/ice/ice-plain/white-igloo.glb', function(gltf) {
            let igloo = gltf.scene;
            scale = 3;
            igloo.scale.set(scale, scale, scale);
            igloo.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            igloo.rotation.y = rotation;
            igloo.position.y = posY + 4;
            igloo.position.x = posX ;
            igloo.position.z = posZ ;
            igloo.name = "ice-plain-igloo";
            scene.add(igloo);
            resolve(igloo);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateIcePlainFlower(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/ice/ice-plain/ice-flower.glb', function(gltf) {
            let flower = gltf.scene;
            scale = 3;
            flower.scale.set(scale, scale, scale);
            flower.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            flower.rotation.y = rotation;
            flower.position.y = posY ;
            flower.position.x = posX ;
            flower.position.z = posZ + 5;
            flower.name = "ice-plain-flower";
            scene.add(flower);
            resolve(flower);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Water Hill Props

export function generateWaterHillTree(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/water/water-hill/water-tree.glb', function(gltf) {
            let tree = gltf.scene;
            scale = 1.7;
            tree.scale.set(scale, scale, scale);
            tree.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            tree.rotation.y = rotation;
            tree.position.y = posY ;
            tree.position.x = posX ;
            tree.position.z = posZ ;
            tree.name = "water-hill-tree";
            scene.add(tree);
            resolve(tree);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateWaterHillFish(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/water/water-hill/clown-fish.glb', function(gltf) {
            let fish = gltf.scene;
            scale = 0.75;
            fish.scale.set(scale, scale, scale);
            fish.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            fish.rotation.y = rotation;
            fish.position.y = posY + 1;
            fish.position.x = posX ;
            fish.position.z = posZ ;
            fish.name = "water-hill-fish";
            scene.add(fish);
            resolve(fish);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Water Mountain Props

export function generateWaterMountainCoral(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/water/water-mountain/purple-coral.glb', function(gltf) {
            let coral = gltf.scene;
            scale = 8;
            coral.scale.set(scale, scale, scale);
            coral.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            coral.rotation.y = rotation;
            coral.position.y = posY ;
            coral.position.x = posX ;
            coral.position.z = posZ ;
            coral.name = "water-mountain-coral";
            scene.add(coral);
            resolve(coral);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateWaterMountainRock(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/water/water-mountain/water-rock.glb', function(gltf) {
            let rock = gltf.scene;
            scale = 1;
            rock.scale.set(scale, scale, scale);
            rock.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            rock.rotation.y = rotation;
            rock.position.y = posY ;
            rock.position.x = posX ;
            rock.position.z = posZ ;
            rock.name = "water-mountain-rock";
            scene.add(rock);
            resolve(rock);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Water Ocean Props

export function generateWaterOceanSubmarine(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/water/water-ocean/red-submarine.glb', function(gltf) {
            let submarine = gltf.scene;
            scale = 1.5;
            submarine.scale.set(scale, scale, scale);
            submarine.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            submarine.rotation.y = rotation;
            submarine.position.y = posY - 4;
            submarine.position.x = posX ;
            submarine.position.z = posZ ;
            submarine.name = "water-ocean-submarine";
            scene.add(submarine);
            resolve(submarine);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

export function generateWaterOceanTreasure(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/water/water-ocean/treasure-chest.glb', function(gltf) {
            let treasure = gltf.scene;
            scale = 3;
            treasure.scale.set(scale, scale, scale);
            treasure.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            treasure.rotation.y = rotation;
            treasure.position.y = posY ;
            treasure.position.x = posX ;
            treasure.position.z = posZ ;
            treasure.name = "water-ocean-treasure";
            scene.add(treasure);
            resolve(treasure);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Water Plain Props

export function generateWaterPlainShell(posX,posY,posZ ,rotation, glbLoader, scene){

    return new Promise((resolve, reject) => {
        glbLoader.load('resources/props/water/water-plain/sea-shell.glb', function(gltf) {
            let shell = gltf.scene;
            scale = 1.25;
            shell.scale.set(scale, scale, scale);
            shell.traverse(function(child) {
            if (child.isMesh) {
                child.scale.set(scale, scale, scale);
            }
            });
            shell.rotation.y = rotation;
            shell.position.y = posY ;
            shell.position.x = posX ;
            shell.position.z = posZ ;
            shell.name = "water-plain-shell";
            scene.add(shell);
            resolve(shell);
        }, undefined, function(error) {
            console.error(error);
            reject(error);
        });
    });
}

// Earth Prop Generators

export function generateEarthHillProps(chunk,threshold, frequency ,glbLoader, scene){
    let earthHillProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateEarthHillDeer(vertX, vertY, vertZ, rotation, glbLoader, scene).then( deer => {
                    currentProp = deer;
                    earthHillProps.push(currentProp);
                });
            }else if (vertY <= 0){
                generateEarthHillTree(vertX, vertY, vertZ, rotation, glbLoader, scene).then( tree => {
                    currentProp = tree;
                    earthHillProps.push(currentProp);
                });
            }
        }
    }
    return earthHillProps;
}

export function generateEarthMountainProps(chunk,threshold, frequency ,glbLoader, scene){
    let earthMountainProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;
        
        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateEarthMountainRock(vertX, vertY, vertZ, rotation, glbLoader, scene).then(rock => {
                    currentProp = rock;
                    earthMountainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            
            else if (vertY <= 0){
                generateEarthMountainTree(vertX, vertY, vertZ, rotation, glbLoader, scene).then(tree => {
                    currentProp = tree;
                    earthMountainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return earthMountainProps;

}

export function generateEarthOceanProps(chunk,threshold, frequency ,glbLoader, scene){
    let earthOceanProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateEarthOceanTree(vertX, vertY, vertZ, rotation, glbLoader, scene).then(tree => {
                    currentProp = tree;
                    earthOceanProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateEarthOceanBoat(vertX, vertY, vertZ, rotation, glbLoader, scene).then(boat => {
                    currentProp = boat;
                    earthOceanProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return earthOceanProps;

}

export function generateEarthPlainProps(chunk,threshold, frequency ,glbLoader, scene){
    let earthPlainProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);
        
        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateEarthPlainFlower(vertX, vertY, vertZ, rotation, glbLoader, scene).then(flower => {
                    currentProp = flower;
                    earthPlainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateEarthPlainFlower(vertX, vertY, vertZ, rotation, glbLoader, scene).then(flower => {
                    currentProp = flower;
                    earthPlainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return earthPlainProps;

}

// Fire Prop Generators

export function generateFireHillProps(chunk,threshold, frequency ,glbLoader, scene){
    let fireHillProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateFireHillFox(vertX, vertY, vertZ, rotation, glbLoader, scene).then(fox => {
                    currentProp = fox;
                    fireHillProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateFireHillTree(vertX, vertY, vertZ, rotation, glbLoader, scene).then(tree => {
                    currentProp = tree;
                    fireHillProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return fireHillProps;

}

export function generateFireMountainProps(chunk,threshold, frequency ,glbLoader, scene){
    let fireMountainProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateFireMountainRock(vertX, vertY, vertZ, rotation, glbLoader, scene).then(rock => {
                    currentProp = rock;
                    fireMountainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateFireMountainTree(vertX, vertY, vertZ, rotation, glbLoader, scene).then(tree => {
                    currentProp = tree;
                    fireMountainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return fireMountainProps;

}

export function generateFireOceanProps(chunk,threshold, frequency ,glbLoader, scene){
    let fireOceanProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateFireOceanDeath(vertX, vertY, vertZ, rotation, glbLoader, scene).then(death => {
                    currentProp = death;
                    fireOceanProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateFireOceanBoat(vertX, vertY, vertZ, rotation, glbLoader, scene).then(boat => {
                    currentProp = boat;
                    fireOceanProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return fireOceanProps;

}

export function generateFirePlainProps(chunk,threshold, frequency ,glbLoader, scene){
    let firePlainProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateFirePlainFlower(vertX, vertY, vertZ, rotation, glbLoader, scene).then(flower => {
                    currentProp = flower;
                    firePlainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateFirePlainFlower(vertX, vertY, vertZ, rotation, glbLoader, scene).then(flower => {
                    currentProp = flower;
                    firePlainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return firePlainProps;

}

// Ice Prop Generators

export function generateIceHillProps(chunk,threshold, frequency ,glbLoader, scene){
    let iceHillProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateIceHillPenguin(vertX, vertY, vertZ, rotation, glbLoader, scene).then(penguin => {
                    currentProp = penguin;
                    iceHillProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateIceHillTree(vertX, vertY, vertZ, rotation, glbLoader, scene).then(tree => {
                    currentProp = tree;
                    iceHillProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return iceHillProps;

}

export function generateIceMountainProps(chunk,threshold, frequency ,glbLoader, scene){
    let iceMountainProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateIceMountainRock(vertX, vertY, vertZ, rotation, glbLoader, scene).then(rock => {
                    currentProp = rock;
                    iceMountainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateIceMountainTree(vertX, vertY, vertZ, rotation, glbLoader, scene).then(tree => {
                    currentProp = tree;
                    iceMountainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return iceMountainProps;

}

export function generateIceOceanProps(chunk,threshold, frequency ,glbLoader, scene){
    let iceOceanProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;
        
        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateIceOceanSnowman(vertX, vertY, vertZ, rotation, glbLoader, scene).then(snowman => {
                    currentProp = snowman;
                    iceOceanProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateIceOceanBuoy(vertX, vertY, vertZ, rotation, glbLoader, scene).then(buoy => {
                    currentProp = buoy;
                    iceOceanProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return iceOceanProps;

}

export function generateIcePlainProps(chunk,threshold, frequency ,glbLoader, scene){
    let icePlainProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateIcePlainFlower(vertX, vertY, vertZ, rotation, glbLoader, scene).then(flower => {
                    currentProp = flower;
                    icePlainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateIcePlainIgloo(vertX, vertY, vertZ, rotation, glbLoader, scene).then(igloo => {
                    currentProp = igloo;
                    icePlainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return icePlainProps;

}

// Water Prop Generators

export function generateWaterHillProps(chunk,threshold, frequency ,glbLoader, scene){
    let waterHillProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateWaterHillFish(vertX, vertY, vertZ, rotation, glbLoader, scene).then(fish => {
                    currentProp = fish;
                    waterHillProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateWaterHillTree(vertX, vertY, vertZ, rotation, glbLoader, scene).then(tree => {
                    currentProp = tree;
                    waterHillProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return waterHillProps;

}

export function generateWaterMountainProps(chunk,threshold, frequency ,glbLoader, scene){
    let waterMountainProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateWaterMountainRock(vertX, vertY, vertZ, rotation, glbLoader, scene).then(rock => {
                    currentProp = rock;
                    waterMountainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateWaterMountainCoral(vertX, vertY, vertZ, rotation, glbLoader, scene).then(coral => {
                    currentProp = coral;
                    waterMountainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return waterMountainProps;

}

export function generateWaterOceanProps(chunk,threshold, frequency ,glbLoader, scene){
    let waterOceanProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateWaterOceanTreasure(vertX, vertY, vertZ, rotation, glbLoader, scene).then(treasure => {
                    currentProp = treasure;
                    waterOceanProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateWaterOceanSubmarine(vertX, vertY, vertZ, rotation, glbLoader, scene).then(sub => {
                    currentProp = sub;
                    waterOceanProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return waterOceanProps;

}

export function generateWaterPlainProps(chunk,threshold, frequency ,glbLoader, scene){
    let waterPlainProps = [];
    let currentProp;
    //let sectionSize = (chunk.max - chunk.min)/(propTypes/2);
    let verticies = chunk.groundGeometry.attributes.position;
    for(let i = 0; i < verticies.count; i++) {
        let vertX = (verticies.getY(i) + chunk.position.x);
        let vertY = (verticies.getZ(i) + 0);
        let vertZ = (verticies.getX(i) + chunk.position.z);

        let x = vertX * frequency;
        let y = vertY * frequency;
        let z = vertZ * frequency;

        let noise = MATH.improvedNoise(x,y,z);
        let rotation = Math.PI * 2 * noise;

        if(Math.abs(noise) > threshold){
            if(vertY > 0){
                generateWaterPlainShell(vertX, vertY, vertZ, rotation, glbLoader, scene).then(shell => {
                    currentProp = shell;
                    waterPlainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
            else if (vertY <= 0){
                generateWaterPlainShell(vertX, vertY, vertZ, rotation, glbLoader, scene).then(shell => {
                    currentProp = shell;
                    waterPlainProps.push(currentProp);
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }
    return waterPlainProps;

}

// Prop Generator Switch
export function generateProps(chunk, threshold, frequency, glbLoader, scene){

    if(chunk.biome == "Fire" && chunk.terrain == "Mountain"){
        return generateFireMountainProps(chunk, 0.7 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Fire" && chunk.terrain == "Hill"){
        return generateFireHillProps(chunk, 0.75 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Fire" && chunk.terrain == "Plain"){
        return generateFirePlainProps(chunk, 0.85 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Fire" && chunk.terrain == "Ocean"){
        return generateFireOceanProps(chunk, 0.85 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Ice" && chunk.terrain == "Mountain"){
        return generateIceMountainProps(chunk, 0.7 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Ice" && chunk.terrain == "Hill"){
        return generateIceHillProps(chunk, 0.75 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Ice" && chunk.terrain == "Plain"){
        return generateIcePlainProps(chunk, 0.85 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Ice" && chunk.terrain == "Ocean"){
        return generateIceOceanProps(chunk, 0.85 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Earth" && chunk.terrain == "Mountain"){
        return generateEarthMountainProps(chunk, 0.7 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Earth" && chunk.terrain == "Hill"){
        return generateEarthHillProps(chunk, 0.75 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Earth" && chunk.terrain == "Plain"){
        return generateEarthPlainProps(chunk, 0.85 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Earth" && chunk.terrain == "Ocean"){
        return generateEarthOceanProps(chunk, 0.85 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Water" && chunk.terrain == "Mountain"){
        return generateWaterMountainProps(chunk, 0.7 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Water" && chunk.terrain == "Hill"){
        return generateWaterHillProps(chunk, 0.75 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Water" && chunk.terrain == "Plain"){
        return generateWaterPlainProps(chunk, 0.85 , 0.5, glbLoader, scene);
    }
    else if(chunk.biome == "Water" && chunk.terrain == "Ocean"){
        return generateWaterOceanProps(chunk, 0.85 , 0.5, glbLoader, scene);
    }

    return [];
}

// Prop Destroyer

export function destroyAllProps(chunk,scene){
    for(let i = 0; i < chunk.props.length; i++){
        scene.remove(chunk.props[i]);
    }
    chunk.props = [];
}