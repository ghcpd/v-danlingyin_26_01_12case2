import { DocConcept } from '../types';

export const docConcepts: DocConcept[] = [
  {
    id: 'scene',
    title: 'Scene',
    category: 'Core',
    description: 'The Scene is the container that holds all objects, lights, and cameras in your 3D world. Think of it as a stage where everything takes place.',
    codeSnippet: `import * as THREE from 'three';

// Create a new scene
const scene = new THREE.Scene();

// Set background color
scene.background = new THREE.Color(0x000000);

// Add fog for depth effect
scene.fog = new THREE.Fog(0x000000, 10, 50);`
  },
  {
    id: 'camera',
    title: 'Camera',
    category: 'Core',
    description: 'The Camera defines the point of view from which the scene is rendered. PerspectiveCamera mimics how human eyes see the world with depth perception.',
    codeSnippet: `import * as THREE from 'three';

// Create perspective camera
// Parameters: FOV, aspect ratio, near, far
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Position the camera
camera.position.z = 5;`
  },
  {
    id: 'renderer',
    title: 'Renderer',
    category: 'Core',
    description: 'The Renderer takes the scene and camera and draws what the camera sees onto a canvas element using WebGL.',
    codeSnippet: `import * as THREE from 'three';

// Create WebGL renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true
});

// Set size to match container
renderer.setSize(window.innerWidth, window.innerHeight);

// Set pixel ratio for sharp rendering
renderer.setPixelRatio(window.devicePixelRatio);

// Append to DOM
document.body.appendChild(renderer.domElement);

// Render the scene
renderer.render(scene, camera);`
  },
  {
    id: 'geometry',
    title: 'Geometry',
    category: 'Objects',
    description: 'Geometry defines the shape and structure of 3D objects by specifying vertices, faces, and UV coordinates.',
    codeSnippet: `import * as THREE from 'three';

// Box geometry (width, height, depth)
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

// Sphere geometry (radius, width segments, height segments)
const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);

// Plane geometry (width, height)
const planeGeometry = new THREE.PlaneGeometry(5, 5);

// Custom geometry with BufferGeometry
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  -1.0, -1.0,  1.0,
   1.0, -1.0,  1.0,
   1.0,  1.0,  1.0,
]);
geometry.setAttribute('position', 
  new THREE.BufferAttribute(vertices, 3)
);`
  },
  {
    id: 'material',
    title: 'Material',
    category: 'Objects',
    description: 'Materials define how the surface of geometry appears - its color, texture, shininess, and how it reacts to light.',
    codeSnippet: `import * as THREE from 'three';

// Basic material (not affected by lights)
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000
});

// Standard material (physically based rendering)
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  metalness: 0.5,
  roughness: 0.5
});

// Phong material (shiny surfaces)
const phongMaterial = new THREE.MeshPhongMaterial({
  color: 0x0000ff,
  shininess: 100
});

// Create mesh with geometry and material
const mesh = new THREE.Mesh(geometry, standardMaterial);`
  },
  {
    id: 'light',
    title: 'Light',
    category: 'Lighting',
    description: 'Lights illuminate the scene and affect how materials appear. Different light types create different effects.',
    codeSnippet: `import * as THREE from 'three';

// Ambient light (illuminates all objects equally)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Directional light (like sunlight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// Point light (like a light bulb)
const pointLight = new THREE.PointLight(0xff0000, 1, 100);
pointLight.position.set(0, 5, 0);
scene.add(pointLight);

// Spot light (like a flashlight)
const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(10, 10, 10);
spotLight.angle = Math.PI / 6;
scene.add(spotLight);`
  }
];
