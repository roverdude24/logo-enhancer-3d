// src/core/EffectManager.js
import * as THREE from 'three';
import { METAL_PRESETS } from '../effects/LiquidMetalShader.js';

export class EffectManager {
  constructor() {
    this.params = {
      effectStrength: 0.7,
      distortionAmount: 1.0,
      metalness: 1.0,
      colorShift: 1.0,
      backgroundColor: '#111111',
      showGrid: false, // Changed to false
      wireframe: false,
      autoRotate: false,
      metalPreset: 'silver',
      flowSpeed: 0.5,
      roughness: 0.15,
      dispersionStrength: 1.0,
      dispersionScale: 1.0,
      flowIntensity: 1.0
    };
    
    this.clock = new THREE.Clock();
    this.elapsedTime = 0;
    this.scene = null; // Add scene reference
  }

  setScene(scene) {
    this.scene = scene;
  }
  
  update() {
    this.elapsedTime = this.clock.getElapsedTime();
    return this.elapsedTime;
  }
  
  getParams() {
    return this.params;
  }
  
  setParam(name, value) {
    if (name in this.params) {
      // Handle color conversion for backgroundColor
      if (name === 'backgroundColor') {
        this.params[name] = value;
        // Ensure color update triggers properly
        if (this.scene) {
          this.scene.background = new THREE.Color(value);
        }
      } else {
        this.params[name] = value;
      }
    }
  }
  
  setMetalPreset(presetName) {
    if (!presetName || !this.scene) return;
    
    this.params.metalPreset = presetName;
    
    // Update all materials
    this.scene.traverse(child => {
      if (child.isMesh && child.material && child.material.type === 'ShaderMaterial') {
        const uniforms = child.material.uniforms;
        if (uniforms.u_baseColor && uniforms.u_highlightColor) {
          const preset = METAL_PRESETS[presetName];
          if (preset) {
            uniforms.u_baseColor.value.copy(preset.baseColor);
            uniforms.u_highlightColor.value.copy(preset.highlightColor);
            uniforms.u_metalness.value = preset.metalness;
            uniforms.u_roughness.value = preset.roughness;
            uniforms.u_flowSpeed.value = preset.flowSpeed;
          }
        }
      }
    });
  }

  updateMaterialUniforms(material) {
    if (!material || !material.uniforms) return;
    
    if (material.uniforms.u_time !== undefined) {
      material.uniforms.u_time.value = this.elapsedTime;
    }
    
    if (material.uniforms.u_effectStrength !== undefined) {
      material.uniforms.u_effectStrength.value = this.params.effectStrength;
    }
    
    if (material.uniforms.u_distortionAmount !== undefined) {
      material.uniforms.u_distortionAmount.value = this.params.distortionAmount;
    }
    
    if (material.uniforms.u_metalness !== undefined) {
      material.uniforms.u_metalness.value = this.params.metalness;
    }
    
    if (material.uniforms.u_colorShift !== undefined) {
      material.uniforms.u_colorShift.value = this.params.colorShift;
    }
    
    if (material.uniforms.u_wireframe !== undefined) {
      material.uniforms.u_wireframe.value = this.params.wireframe;
    }

    if (material.uniforms.u_flowSpeed !== undefined) {
      material.uniforms.u_flowSpeed.value = this.params.flowSpeed;
    }
    if (material.uniforms.u_roughness !== undefined) {
      material.uniforms.u_roughness.value = this.params.roughness;
    }
    if (material.uniforms.u_dispersionStrength !== undefined) {
      material.uniforms.u_dispersionStrength.value = this.params.dispersionStrength;
    }
    if (material.uniforms.u_dispersionScale !== undefined) {
      material.uniforms.u_dispersionScale.value = this.params.dispersionScale;
    }
    if (material.uniforms.u_flowIntensity !== undefined) {
      material.uniforms.u_flowIntensity.value = this.params.flowIntensity;
    }
  }
}