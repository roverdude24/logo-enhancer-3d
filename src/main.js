// src/main.js
import * as THREE from 'three';
import { CameraSystem } from './core/CameraSystem.js';
import { SceneManager } from './core/SceneManager.js';
import { EffectManager } from './core/EffectManager.js';
import { setupGUI } from './ui/GUIControls.js';
import FileLoader from './ui/FileLoader.js';
import { createDefaultObject } from './utils/defaultObjects.js'; // Fixed import

class LogoEnhancer {
  constructor() {
    // DOM elements
    this.canvas = document.getElementById('glCanvas');
    this.fileInput = document.getElementById('imageUpload');
    this.uploadBtn = document.getElementById('uploadBtn');
    this.loadingIndicator = document.getElementById('loadingIndicator');
    
    // Three.js setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create scene
    this.sceneManager = new SceneManager();
    
    // Setup camera
    this.cameraSystem = new CameraSystem(this.canvas);
    
    // Setup grid and axes helpers
    this.grid = this.sceneManager.createGridHelper();
    this.axesHelper = this.sceneManager.createAxisHelper();
    
    // Current logo object
    this.currentObject = null;
    
    // Effect manager
    this.effectManager = new EffectManager();
    
    // Set scene reference in EffectManager
    this.effectManager.setScene(this.sceneManager.scene);
    
    // Set up GUI controls
    this.gui = setupGUI(
      this.effectManager,
      this.sceneManager,
      this.cameraSystem,
      this.grid,
      this.axesHelper
    );
    
    // Add resetCamera function to GUI
    const cameraFolder = this.gui.__folders['Camera'];
    const resetCameraController = cameraFolder.__controllers.find(
      controller => controller.property === 'resetCamera'
    );
    
    if (resetCameraController) {
      resetCameraController.object.resetCamera = () => {
        if (this.currentObject) {
          this.cameraSystem.fitToObject(this.currentObject);
        }
      };
    }
    
    // Setup file loader
    this.fileLoader = new FileLoader(this.sceneManager.scene, this.effectManager);
    this.setupFileUpload();
    
    // Create default object
    this.createDefaultObject();
    
    // Handle window resize
    window.addEventListener('resize', () => this.onWindowResize());
    
    // Start animation loop
    this.animate();
  }
  
  showLoading() {
    if (this.loadingIndicator) {
      this.loadingIndicator.classList.add('active');
    }
  }

  hideLoading() {
    if (this.loadingIndicator) {
      this.loadingIndicator.classList.remove('active');
    }
  }

  setupFileUpload() {
    this.uploadBtn.addEventListener('click', () => this.fileInput.click());
    
    this.fileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      this.showLoading();
      try {
        const object = await this.fileLoader.loadFile(file);
        this.currentObject = object;
        this.cameraSystem.fitToObject(object);
        
        if (this.gui?.updateControlsForFileType) {
          this.gui.updateControlsForFileType(this.fileLoader.currentType);
        }
      } catch (error) {
        console.error('Error loading file:', error);
        alert('Error loading file: ' + error.message);
        // Show default object on error
        this.scene.traverse(child => {
          if (child.userData?.type === 'default') {
            child.visible = true;
          }
        });
      } finally {
        this.hideLoading();
        this.fileInput.value = '';
      }
    });
  }
  
  createDefaultObject() {
    this.currentObject = createDefaultObject();
    this.currentObject.userData.type = 'default'; // Mark as default object
    this.currentObject.userData.needsUpdate = true;
    this.currentObject.classList = ['wireframe-toggle'];
    
    this.sceneManager.addObject(this.currentObject);
    this.cameraSystem.fitToObject(this.currentObject);
  }
  
  onWindowResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    
    this.cameraSystem.camera.aspect = window.innerWidth / window.innerHeight;
    this.cameraSystem.camera.updateProjectionMatrix();
    
    if (this.currentObject) {
      this.currentObject.traverse(child => {
        if (child.isMesh && child.material && child.material.uniforms && 
            child.material.uniforms.u_resolution) {
          child.material.uniforms.u_resolution.value.set(
            window.innerWidth, window.innerHeight);
        }
      });
    }
  }
  
  animate() {
    requestAnimationFrame(() => this.animate());
    
    const time = this.effectManager.update();
    const deltaTime = this.effectManager.clock.getDelta();
    
    this.cameraSystem.update();
    this.sceneManager.update(deltaTime); // Update environment cylinders
    
    // Update materials
    this.sceneManager.scene.traverse(child => {
      if (child.isMesh && child.material?.uniforms) {
        if (child.material.uniforms.u_time) {
          child.material.uniforms.u_time.value = time;
        }
        this.effectManager.updateMaterialUniforms(child.material);
      }
    });
    
    this.renderer.render(this.sceneManager.scene, this.cameraSystem.camera);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LogoEnhancer();
});