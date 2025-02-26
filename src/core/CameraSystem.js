// src/core/CameraSystem.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export class CameraSystem {
  constructor(container) {
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    
    this.camera.position.set(0, 0, 100);
    
    this.controls = new OrbitControls(this.camera, container);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.rotateSpeed = 0.7;
    
    this.autoRotate = false;
    this.controls.autoRotate = this.autoRotate;
    this.controls.autoRotateSpeed = 1.0;
    
    window.addEventListener('resize', () => {
      this.camera.aspect = container.clientWidth / container.clientHeight;
      this.camera.updateProjectionMatrix();
    });
  }
  
  update() {
    this.controls.update();
  }
  
  lookAt(target) {
    this.camera.lookAt(target);
    this.controls.target.copy(target);
  }
  
  setAutoRotate(value) {
    this.autoRotate = value;
    this.controls.autoRotate = value;
  }
  
  fitToObject(object, offset = 1.5) {
    if (!object) return;
    
    const boundingBox = new THREE.Box3().setFromObject(object);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);
    
    const size = new THREE.Vector3();
    boundingBox.getSize(size);
    
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = this.camera.fov * (Math.PI / 180);
    let distance = maxDim / (2 * Math.tan(fov / 2));
    distance *= offset;
    
    this.camera.position.set(center.x, center.y, center.z + distance);
    this.controls.target.copy(center);
    this.camera.lookAt(center);
    this.controls.update();
  }
}