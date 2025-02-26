// src/effects/LiquidMetalShader.js
import * as THREE from 'three';
import { noiseFunction, dispersionUtils } from './shaderUtils.js';

// Add export to METAL_PRESETS
export const METAL_PRESETS = {
  gold: {
    baseColor: new THREE.Color(0xffd700),
    highlightColor: new THREE.Color(0xffffcc),
    metalness: 1.2,
    roughness: 0.1,
    flowSpeed: 0.4
  },
  silver: {
    baseColor: new THREE.Color(0xc0c0c0),
    highlightColor: new THREE.Color(0xffffff),
    metalness: 1.0,
    roughness: 0.15,
    flowSpeed: 0.5
  },
  bronze: {
    baseColor: new THREE.Color(0xcd7f32),
    highlightColor: new THREE.Color(0xffdab9),
    metalness: 0.9,
    roughness: 0.25,
    flowSpeed: 0.3
  },
  chrome: {
    baseColor: new THREE.Color(0x8899aa),
    highlightColor: new THREE.Color(0xffffff),
    metalness: 1.5,
    roughness: 0.05,
    flowSpeed: 0.7
  }
};

export const liquidMetalVertexShader = `
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vViewPosition = cameraPosition - worldPosition.xyz;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

export const liquidMetalFragmentShader = `
${noiseFunction}
${dispersionUtils}

precision mediump float;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_effectStrength;
uniform float u_distortionAmount;
uniform float u_metalness;
uniform float u_colorShift;
uniform sampler2D u_texture;
uniform bool u_hasTexture;
uniform bool u_wireframe;
uniform bool u_isSVG;

uniform vec3 u_baseColor;
uniform vec3 u_highlightColor;
uniform float u_roughness;
uniform float u_flowSpeed;

// Simple noise function
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Value noise
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Fractional Brownian Motion
float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 3.0;
  
  for (int i = 0; i < 3; i++) {
    value += amplitude * noise(st * frequency);
    frequency *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  
  // Enhanced lighting setup
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
  float diffuse = max(dot(normal, lightDir), 0.0);
  vec3 halfDir = normalize(lightDir + viewDir);
  float specular = pow(max(dot(normal, halfDir), 0.0), 32.0);
  float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 5.0);
  
  // Position-based UVs for consistent mapping
  vec2 worldUV = vUv;
  if (u_isSVG) {
    // Use modified UVs for better dispersion coverage
    worldUV = vec2(
      vWorldPosition.x * 0.02 + vWorldPosition.z * 0.01,
      vWorldPosition.y * 0.02 + vWorldPosition.z * 0.01
    );
  }
  
  // Calculate flow effect
  float t = u_time * u_flowSpeed;
  float flowPattern = enhancedFBM(vec3(worldUV * 5.0, t * 0.2));
  
  // Enhanced distortion
  vec2 distortedUV = worldUV + vec2(
    enhancedFBM(vec3(worldUV * 3.0, t * 0.1)) * 0.03,
    enhancedFBM(vec3(worldUV * 3.0, t * 0.15 + 10.0)) * 0.03
  ) * u_distortionAmount;
  
  // Apply color dispersion and metal effect
  vec3 baseColorWithDispersion = disperseColor(u_baseColor, u_distortionAmount * 0.5, t, distortedUV);
  vec3 metallicColor = mix(baseColorWithDispersion, u_highlightColor, flowPattern * (1.0 - u_roughness));
  
  // Add highlights and reflections
  metallicColor += specular * u_highlightColor * u_metalness * (1.0 + flowPattern * 0.5);
  metallicColor += fresnel * u_highlightColor * u_metalness;
  
  // Add iridescence
  float iridescence = sin(dot(normal, viewDir) * 5.0 + t * 0.2) * 0.5 + 0.5;
  vec3 finalColor = metallicColor * (0.6 + diffuse * 0.4);
  finalColor += u_highlightColor * iridescence * 0.1 * u_metalness;
  
  gl_FragColor = vec4(finalColor, 1.0);
}`;

export const liquidMetal2DFragmentShader = `
// ...existing uniforms and helper functions...

void main() {
  vec4 texColor = texture2D(u_texture, vUv);
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  
  // Enhanced fresnel effect for 2D
  float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);
  
  // Apply effect only to non-white areas
  float luminance = (texColor.r + texColor.g + texColor.b) / 3.0;
  float effectMask = 1.0 - smoothstep(0.7, 0.9, luminance);
  
  // Flow effect
  float t = u_time * u_flowSpeed;
  vec2 flowUV = vUv + vec2(
    fbm(vUv * 2.0 + t),
    fbm(vUv * 2.0 - t)
  ) * u_effectStrength * effectMask;
  
  // Sample texture with flow distortion
  vec4 distortedColor = texture2D(u_texture, flowUV);
  
  // Create metallic effect
  vec3 metallicColor = mix(
    u_baseColor,
    u_highlightColor,
    fbm(flowUV * 5.0 + t) * (1.0 - u_roughness)
  );
  
  // Mix based on luminance mask
  vec3 finalColor = mix(
    distortedColor.rgb,
    metallicColor,
    effectMask * u_metalness
  );
  
  // Add highlights and fresnel
  finalColor += fresnel * u_highlightColor * effectMask * u_metalness;
  
  gl_FragColor = vec4(finalColor, texColor.a);
}`;

export function createLiquidMetalMaterial(hasTexture = false, texture = null, preset = 'silver') {
  const metalPreset = METAL_PRESETS[preset] || METAL_PRESETS.silver;
  // Choose shader based on texture presence
  const fragmentShader = hasTexture ? liquidMetal2DFragmentShader : liquidMetalFragmentShader;
  
  const uniforms = {
    u_time: { value: 0 },
    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    u_effectStrength: { value: 0.7 },
    u_distortionAmount: { value: 1.0 },
    u_metalness: { value: 1.0 },
    u_colorShift: { value: 1.0 },
    u_hasTexture: { value: hasTexture },
    u_wireframe: { value: false },
    u_baseColor: { value: metalPreset.baseColor },
    u_highlightColor: { value: metalPreset.highlightColor },
    u_roughness: { value: metalPreset.roughness },
    u_flowSpeed: { value: metalPreset.flowSpeed },
    u_isSVG: { value: false },
    u_svgScale: { value: new THREE.Vector2(1, 1) }
  };
  
  if (hasTexture && texture) {
    uniforms.u_texture = { value: texture };
  }
  
  return new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: liquidMetalVertexShader,
    fragmentShader: fragmentShader,
    side: THREE.DoubleSide,
    transparent: true,
    blending: THREE.NormalBlending
  });
}