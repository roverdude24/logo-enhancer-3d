// src/core/SceneManager.js
import * as THREE from 'three';

export class SceneManager {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x111111);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 10);
    this.scene.add(directionalLight);
    
    const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
    backLight.position.set(0, -5, -10);
    this.scene.add(backLight);
  }
  
  setBackgroundColor(color) {
    this.scene.background = new THREE.Color(color);
  }
  
  addObject(object) {
    this.scene.add(object);
  }
  
  removeObject(object) {
    this.scene.remove(object);
  }
  
  createGridHelper(size = 100, divisions = 20, color1 = 0x444444, color2 = 0x888888) {
    const grid = new THREE.GridHelper(size, divisions, color1, color2);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    grid.position.y = -20;
    grid.visible = false; // Set initially invisible
    this.scene.add(grid);
    return grid;
  }
  
  createAxisHelper(size = 20) {
    const axesHelper = new THREE.AxesHelper(size);
    axesHelper.visible = false; // Set initially invisible
    this.scene.add(axesHelper);
    return axesHelper;
  }

  update(deltaTime) {
    // Empty update - no more cylinder animations
  }
}