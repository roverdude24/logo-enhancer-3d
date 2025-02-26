// src/utils/helpers.js
import * as THREE from 'three';

export function createGrid(scene, size = 100, divisions = 100, color1 = 0x444444, color2 = 0x888888) {
  const grid = new THREE.GridHelper(size, divisions, color1, color2);
  grid.material.opacity = 0.2;
  grid.material.transparent = true;
  grid.position.y = -20; // Position grid below the object
  scene.add(grid);
  return grid;
}

export function createAxisHelper(scene, size = 20) {
  const axesHelper = new THREE.AxesHelper(size);
  scene.add(axesHelper);
  return axesHelper;
}