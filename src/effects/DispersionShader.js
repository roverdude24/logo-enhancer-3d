import { noiseFunction, dispersionUtils } from './shaderUtils.js';

export const dispersionFragmentShader = `
${noiseFunction}
${dispersionUtils}

uniform float u_dispersionStrength;
uniform float u_dispersionScale;
uniform float u_time;
uniform sampler2D u_texture;

varying vec2 vUv;

void main() {
  vec4 texColor = texture2D(u_texture, vUv);
  
  // Calculate dispersion effect
  vec3 dispersed = disperseColor(
    texColor.rgb,
    u_dispersionStrength,
    u_time,
    vUv * u_dispersionScale
  );
  
  gl_FragColor = vec4(dispersed, texColor.a);
}`;
