export async function loadWorld(scene) {
  const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 100, height: 100 }, scene);
  const groundMat = new BABYLON.StandardMaterial("groundMat", scene);
  groundMat.diffuseColor = new BABYLON.Color3(0.3, 0.7, 0.3);
  ground.material = groundMat;

  const cityURL = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/VC/glTF/VC.gltf";
  await BABYLON.SceneLoader.ImportMeshAsync("", "", cityURL, scene);
}
