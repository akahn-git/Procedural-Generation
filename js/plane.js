
// plane 
export function loadPlane(scene, sceneEntities, glbLoader) {
    return new Promise((resolve, reject) => {
      glbLoader.load('resources/props/plane.glb', function(gltf) {
        let plane = gltf.scene;
        plane.scale.set(3, 3, 3);
        plane.traverse(function(child) {
          if (child.isMesh) {
            child.scale.set(3, 3, 3);
          }
        });
        plane.rotation.y = -Math.PI / 2;
        plane.position.y = 100;
        plane.position.x = 0;
        plane.position.z = 0;
        plane.speed = 5;
        scene.add(plane);
        //sceneEntities.push(plane);
        resolve(plane);
      }, undefined, function(error) {
        console.error(error);
        reject(error);
      });
    });
}  

// Plane Movement

export function movePlaneForward(world, camera, freeCamera, freeControls, api, plane) {
    plane.position.x += 0.1 * plane.speed;
    freeCamera.position.x += 0.1 * plane.speed;
    freeControls.target.copy(plane.position);
    camera.position.x += 0.1 * plane.speed;
    api.xCord += 0.1 * plane.speed;
    if(plane.position.x > api.ChunkXID * world.x + world.x/2) {
        api.ChunkXID++;
        return true;
    }
}

export function movePlaneBackward(world, camera, freeCamera, freeControls, api, plane) {
    plane.position.x -= 0.1 * plane.speed;
    freeCamera.position.x -= 0.1 * plane.speed;
    freeControls.target.copy(plane.position);
    camera.position.x -= 0.1 * plane.speed;
    api.xCord -= 0.1 * plane.speed;
    if(plane.position.x < api.ChunkXID * world.x - world.x/2) {
        api.ChunkXID--;
        return true;
    }
}

export function movePlaneLeft(world, camera, freeCamera, freeControls, api, plane) {
    plane.position.z -= 0.1 * plane.speed;
    freeCamera.position.z -= 0.1 * plane.speed;
    freeControls.target.copy(plane.position);
    camera.position.z -= 0.1 * plane.speed;
    api.zCord -= 0.1 * plane.speed;
    if(plane.position.z < api.ChunkZID * world.z - world.z/2) {
        api.ChunkZID--;
        return true;
    }
}

export function movePlaneRight(world, camera, freeCamera, freeControls, api, plane) {
    plane.position.z += 0.1 * plane.speed;
    freeCamera.position.z += 0.1 * plane.speed;
    freeControls.target.copy(plane.position);
    camera.position.z += 0.1 * plane.speed;
    api.zCord += 0.1 * plane.speed;
    if(plane.position.z > api.ChunkZID * world.z + world.z/2) {
        api.ChunkZID++;
        return true;
    }
}

export function movePlaneUp(camera, freeCamera, freeControls, api, plane) {
    plane.position.y += 0.1 * plane.speed;
    freeCamera.position.y += 0.1 * plane.speed;
    freeControls.target.copy(plane.position);
    camera.position.y += 0.1 * plane.speed;
    api.yCord += 0.1 * plane.speed;

}

export function movePlaneDown(camera, freeCamera, freeControls, api, plane) {
    plane.position.y -= 0.1 * plane.speed;
    freeCamera.position.y -= 0.1 * plane.speed;
    freeControls.target.copy(plane.position);
    camera.position.y -= 0.1 * plane.speed;
    api.yCord -= 0.1 * plane.speed;
}

// Plane Rotation (not used)

export function rotatePlaneLeft(camera, freeCamera, api) {
    plane.rotation.y += 0.1;
    freeCamera.rotation.y += 0.1;
    camera.rotation.y += 0.1;
    api.yRotation += 0.1;
}

export function rotatePlaneRight(camera, freeCamera, api) {
    plane.rotation.y -= 0.1;
    freeCamera.rotation.y -= 0.1;
    camera.rotation.y -= 0.1;
    api.yRotation -= 0.1;
}

export function rotatePlaneUp(camera, freeCamera, api) {
    plane.rotation.x += 0.1;
    freeCamera.rotation.x += 0.1;
    camera.rotation.x += 0.1;
    api.xRotation += 0.1;
}

export function rotatePlaneDown(camera, freeCamera, api) {
    plane.rotation.x -= 0.1;
    freeCamera.rotation.x -= 0.1;
    camera.rotation.x -= 0.1;
    api.xRotation -= 0.1;
}

export function setPlaneLocation(x, y, z, plane) {
    plane.position.x = x;
    plane.position.y = y;
    plane.position.z = z;

    return plane;
}
