import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { createLiquidMetalMaterial, METAL_PRESETS } from '../effects/LiquidMetalShader.js';

export class FileLoader {
  constructor(scene, effectManager) {
    this.scene = scene;
    this.effectManager = effectManager;
    this.svgGroup = new THREE.Group();
    this.scene.add(this.svgGroup);
    this.currentObject = null;
    this.currentType = null;
    this.svgLoader = new SVGLoader();
    this.textureLoader = new THREE.TextureLoader();
  }

  hideAllObjects() {
    // Hide all existing objects including default
    this.scene.traverse(child => {
      if (child.isMesh && child.userData?.type) {
        child.visible = false;
      }
    });
  }

  clearCurrentObject() {
    if (this.currentObject) {
      // Hide default object instead of skipping it
      if (this.currentObject.userData?.type === 'default') {
        this.currentObject.visible = false;
        return;
      }
      
      if (this.currentType === 'svg') {
        this.svgGroup.children.forEach(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material?.dispose) child.material.dispose();
        });
        this.svgGroup.clear();
      } else if (this.currentType === 'png') {
        this.scene.remove(this.currentObject);
        if (this.currentObject.geometry) this.currentObject.geometry.dispose();
        if (this.currentObject.material?.dispose) this.currentObject.material.dispose();
      }
      this.currentObject = null;
    }
  }

  showDefaultObject() {
    // Find and show default object if it exists
    this.scene.traverse(child => {
      if (child.userData?.type === 'default') {
        child.visible = true;
      }
    });
  }

  async loadFile(file) {
    // Hide all existing objects first
    this.hideAllObjects();
    
    const fileName = file.name.toLowerCase();
    
    if (fileName.endsWith('.svg')) {
      // Clear any previous SVG objects
      while (this.svgGroup.children.length > 0) {
        const child = this.svgGroup.children[0];
        this.svgGroup.remove(child);
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
      }
      return this.loadSVG(file);
    } else if (fileName.match(/\.(png|jpg|jpeg)$/)) {
      return this.loadImage(file);
    } else {
      throw new Error('Unsupported file type');
    }
  }

  async loadSVG(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        try {
          this.clearCurrentObject();
          const svgPaths = this.svgLoader.parse(event.target.result).paths;
          
          if (svgPaths.length === 0) {
            throw new Error('No paths found in SVG');
          }
          
          const shapes = [];
          svgPaths.forEach(path => {
            shapes.push(...path.toShapes(true));
          });
          
          const geometry = new THREE.ExtrudeGeometry(shapes, {
            depth: 20,
            bevelEnabled: true,
            bevelThickness: 2,
            bevelSize: 1,
            bevelSegments: 5,
            curveSegments: 64
          });
          
          const material = createLiquidMetalMaterial(
            false,
            null,
            this.effectManager.params.metalPreset || 'silver'
          );
          
          material.uniforms.u_isSVG = { value: true };
          
          const mesh = new THREE.Mesh(geometry, material);
          this.svgGroup.add(mesh);
          
          // Calculate bounding box once
          const bbox = new THREE.Box3().setFromObject(this.svgGroup);
          const size = new THREE.Vector3();
          const center = new THREE.Vector3();
          bbox.getSize(size);
          bbox.getCenter(center);
          
          // Calculate scale once
          const targetSize = 30;
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = targetSize / maxDim;
          
          // Apply transformations in correct order
          this.svgGroup.scale.set(scale, -scale, scale); // Y-flipped scale
          this.svgGroup.position.set(
            -center.x * scale,
            -center.y * scale,
            -center.z * scale
          );
          this.svgGroup.rotation.set(0, 0, 0);
          
          // Hide default object
          this.scene.traverse(child => {
            if (child.userData?.type === 'default') {
              child.visible = false;
            }
          });
          
          this.currentObject = this.svgGroup;
          this.currentType = 'svg';
          this.svgGroup.visible = true;
          
          resolve(this.svgGroup);
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  async loadImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        this.textureLoader.load(
          event.target.result,
          (texture) => {
            try {
              this.clearCurrentObject();
              
              const aspectRatio = texture.image.width / texture.image.height;
              const width = 50;
              const height = width / aspectRatio;
              
              const geometry = new THREE.PlaneGeometry(width, height, 64, 64);
              
              const material = createLiquidMetalMaterial(
                true,
                texture,
                this.effectManager.params.metalPreset || 'silver'
              );
              
              const plane = new THREE.Mesh(geometry, material);
              this.scene.add(plane);
              this.currentObject = plane;
              this.currentType = 'png';
              
              resolve(plane);
            } catch (error) {
              reject(error);
            }
          },
          undefined,
          reject
        );
      };
      
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  getCurrentObject() {
    return {
      object: this.currentObject,
      type: this.currentType
    };
  }
}

// Remove standalone functions and export the class
export default FileLoader;