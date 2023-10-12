import React, { Component } from 'react';
import * as THREE from 'three';
import { STLLoader } from 'three/addons/loaders/STLLoader';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

class ThreeJSApp extends Component {
  componentDidMount() {
    this.init();
    this.animate();
  }

  init() {
    this.container = document.createElement('div');
    document.body.appendChild(this.container);

    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 15);
    this.camera.position.set(3, 5, 3);

    // MOUSE CONTROLS
    this.controls = new TrackballControls(this.camera);
    this.controls.rotateSpeed = 2.0;
    this.controls.zoomSpeed = 2.2;
    this.controls.panSpeed = 0.8;
    this.controls.noZoom = false;
    this.controls.noPan = false;
    this.controls.staticMoving = true;
    this.controls.dynamicDampingFactor = 0.3;
    this.controls.keys = [65, 83, 68];
    this.controls.addEventListener('change', this.renderScene);

    this.cameraTarget = new THREE.Vector3(0, -0.25, 0);

    this.scene = new THREE.Scene();

    const loader = new STLLoader();
    const material = new THREE.MeshPhongMaterial({ color: 0xAAAAAA, specular: 0xffffff, shininess: 100 });

    loader.load('./stl/STEP1.stl', (geometry) => {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.scale.set(0.02, 0.02, 0.02);
      this.scene.add(mesh);
    });

    // LIGHTS
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x111122));

    // RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;

    this.container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', this.onWindowResize, false);
  }

  onWindowResize = () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.controls.handleResize();
  };

  animate() {
    requestAnimationFrame(this.animate);
    this.renderScene();
    this.controls.update();
  }

  debugAxis = (axisLength) => {
    function v(x, y, z) {
      return new THREE.Vector3(x, y, z);
    }

    function createAxis(p1, p2, color) {
      const lineGeometry = new THREE.Geometry();
      const lineMat = new THREE.LineBasicMaterial({ color, linewidth: 1 });
      lineGeometry.vertices.push(p1, p2);
      const line = new THREE.Line(lineGeometry, lineMat);
      this.scene.add(line);
    }

    createAxis(v(-axisLength, 0, 0), v(axisLength, 0, 0), 0xFF0000);
    createAxis(v(0, -axisLength, 0), v(0, axisLength, 0), 0x00FF00);
    createAxis(v(0, 0, -axisLength), v(0, 0, axisLength), 0x0000FF);
  };

  renderScene = () => {
    this.camera.lookAt(this.cameraTarget);
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return null; // Since ThreeJS renders directly to the DOM, return null in the component's render method.
  }
}

export default ThreeJSApp;
