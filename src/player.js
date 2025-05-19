export async function createPlayer(scene) {
  const url = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Fox/glTF/Fox.gltf";
  const result = await BABYLON.SceneLoader.ImportMeshAsync("", "", url, scene);
  const player = result.meshes[0];
  player.position = new BABYLON.Vector3(0, 1, 0);

  const input = { forward: false, backward: false, left: false, right: false };

  window.addEventListener("keydown", (e) => {
    if (e.key === "w") input.forward = true;
    if (e.key === "s") input.backward = true;
    if (e.key === "a") input.left = true;
    if (e.key === "d") input.right = true;
  });
  window.addEventListener("keyup", (e) => {
    if (e.key === "w") input.forward = false;
    if (e.key === "s") input.backward = false;
    if (e.key === "a") input.left = false;
    if (e.key === "d") input.right = false;
  });

  return {
    update: () => {
      let speed = 0.1;
      if (input.forward) player.position.z += speed;
      if (input.backward) player.position.z -= speed;
      if (input.left) player.position.x -= speed;
      if (input.right) player.position.x += speed;
    }
  };
}
