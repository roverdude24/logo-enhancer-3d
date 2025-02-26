// src/utils/defaultObjects.js
import * as THREE from 'three';
import { createLiquidMetalMaterial } from '../effects/LiquidMetalShader.js';

export function createDefaultObject() {
  // Create a default torus knot with enhanced liquid metal material
  const geometry = new THREE.TorusKnotGeometry(15, 6, 100, 32, 2, 3);
  
  const material = createLiquidMetalMaterial(
    false,
    null,
    'silver'
  );
  
  const torusKnot = new THREE.Mesh(geometry, material);
  torusKnot.userData.type = 'default';
  
  return torusKnot;
}