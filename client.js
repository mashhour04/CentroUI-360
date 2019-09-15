// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import {ReactInstance, Location, Surface} from 'react-360-web';
import CnRayCaster from "./utilities/cn-raycaster";
import * as THREE from 'three'

function init(bundle, parent, options) {
  const scene = new THREE.Scene();

  const r360 = new ReactInstance(bundle, parent, {
      raycasters: [
          new CnRayCaster(scene)
      ],
      cursorVisibility: "visible", // Add cursorVisibility
      // Add scene to render the custom Raycasters
      scene: scene,

      //enableHotReload: true,
      ...options,
  });
  // const MainPanel = new Surface(700, 800, Surface.SurfaceShape.Flat);
  // MainPanel.setAngle(0, 0);
  r360.renderToLocation(
    r360.createRoot('Example'),
    new Location([0, 0, 0]),
  );
  
  r360.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  r360.start();
  return r360;
}

window.React360 = {init};
