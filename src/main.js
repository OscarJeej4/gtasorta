import * as BABYLON from "https://cdn.babylonjs.com/babylon.js";
import { createPlayer } from './player.js';
import { loadWorld } from './world.js';

const canvas = document.getElementById("gameCanvas");
const engine = new BABYLON.Engine(canvas, true);
const scene = new BABYLON.Scene(engine);
scene.gravity = new BABYLON.Vector3(0, -0.98, 0);
scene.collisionsEnabled = true;

// Camera
const camera = new BABYLON.ArcRotateCamera("cam", Math.PI / 2, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);
camera.lowerRadiusLimit = 5;
camera.upperRadiusLimit = 50;
camera.wheelDeltaPercentage = 0.01;

// Light
const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

// Load world and player
await loadWorld(scene);
const player = await createPlayer(scene);

// Game loop
engine.runRenderLoop(() => {
  player.update();
  scene.render();
});

window.addEventListener("resize", () => {
  engine.resize();
});
