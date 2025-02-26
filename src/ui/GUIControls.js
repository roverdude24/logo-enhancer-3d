// src/ui/GUIControls.js
import * as dat from 'dat.gui';

export function setupGUI(effectManager, sceneManager, cameraSystem, grid, axesHelper) {
  const params = effectManager.getParams();
  const gui = new dat.GUI();
  
  // Add Interface controls with fixed toggle functionality
  const interfaceFolder = gui.addFolder('Interface');
  const uiState = { visible: true };
  
  interfaceFolder.add({
    toggleUI: function() {
      uiState.visible = !uiState.visible;
      document.querySelector('.header').classList.toggle('hidden');
      document.querySelector('.upload-container').classList.toggle('hidden');
      // Don't use classList for dat.GUI element
      gui.domElement.style.display = uiState.visible ? 'block' : 'none';
    }
  }, 'toggleUI').name('Toggle UI (H)');

  // Fix for control settings visibility
  const metalFolder = gui.addFolder('Metal Settings');
  metalFolder.add(params, 'metalPreset', {
    Silver: 'silver',
    Gold: 'gold',
    Bronze: 'bronze',
    Chrome: 'chrome'
  }).onChange(value => effectManager.setMetalPreset(value));

  metalFolder.add(params, 'metalness', 0, 2).name('Metalness');
  metalFolder.add(params, 'roughness', 0, 1).name('Roughness');
  
  const effectFolder = gui.addFolder('Effect Settings');
  effectFolder.add(params, 'effectStrength', 0, 1).name('Effect Strength');
  effectFolder.add(params, 'distortionAmount', 0, 3).name('Distortion');
  effectFolder.add(params, 'flowSpeed', 0, 2).name('Flow Speed');
  effectFolder.add(params, 'colorShift', 0, 2).name('Color Shift');
  
  // Add dispersion controls
  const dispersionFolder = gui.addFolder('Color Settings');
  dispersionFolder.add(params, 'dispersionStrength', 0, 2).name('Color Separation');
  dispersionFolder.add(params, 'dispersionScale', 0.1, 2).name('Effect Scale');
  
  // Appearance folder with fixed color picker
  const appearanceFolder = gui.addFolder('Appearance');
  
  const colorController = appearanceFolder.addColor(params, 'backgroundColor')
    .name('Background')
    .onChange(value => {
      // Convert input to proper color format
      let color = value;
      if (typeof value === 'string') {
        color = value;
      } else if (Array.isArray(value)) {
        color = `rgb(${value[0]}, ${value[1]}, ${value[2]})`;
      } else if (typeof value === 'object') {
        color = `#${value.r.toString(16).padStart(2, '0')}${value.g.toString(16).padStart(2, '0')}${value.b.toString(16).padStart(2, '0')}`;
      }
      
      // Update both effect manager and scene
      effectManager.setParam('backgroundColor', color);
      sceneManager.setBackgroundColor(color);
      
      // Force GUI to update
      colorController.updateDisplay();
    });
  
  appearanceFolder.add(params, 'showGrid')
    .name('Show Grid')
    .onChange(value => {
      effectManager.setParam('showGrid', value);
      if (grid) grid.visible = value;
    });
  
  appearanceFolder.add({
    toggleAxes: function() {
      axesHelper.visible = !axesHelper.visible;
    }
  }, 'toggleAxes')
    .name('Toggle Axes');
  
  appearanceFolder.open();
  
  // Camera folder
  const cameraFolder = gui.addFolder('Camera');
  
  cameraFolder.add(params, 'autoRotate')
    .name('Auto Rotate')
    .onChange(value => {
      effectManager.setParam('autoRotate', value);
      cameraSystem.setAutoRotate(value);
    });
  
  cameraFolder.add({
    resetCamera: function() {
      // We'll implement this in the main.js
    }
  }, 'resetCamera')
    .name('Reset Camera');
  
  cameraFolder.open();
  
  // Keep folders open by default
  metalFolder.open();
  effectFolder.open();
  dispersionFolder.open();

  // Update GUI visibility based on file type
  gui.updateControlsForFileType = function(fileType) {
    const folders = [metalFolder, effectFolder, dispersionFolder];
    folders.forEach(folder => {
      folder.domElement.style.display = fileType === 'png' ? 'none' : '';
    });
  };

  // Add keyboard shortcut with same toggle logic
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'h') {
      uiState.visible = !uiState.visible;
      document.querySelector('.header').classList.toggle('hidden');
      document.querySelector('.upload-container').classList.toggle('hidden');
      gui.domElement.style.display = uiState.visible ? 'block' : 'none';
    }
  });

  interfaceFolder.open();
  return gui;
}