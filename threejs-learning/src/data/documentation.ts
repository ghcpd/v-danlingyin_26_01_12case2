import type { DocConcept } from '../types';

export const documentationData: DocConcept[] = [
  {
    id: 'scene',
    title: 'Scene',
    description: 'The Scene is the container for all 3D objects, lights, and cameras in Three.js. It serves as the root of your 3D world and defines what gets rendered.',
    codeSnippet: `import * as THREE from 'three';

// Create a new scene
const scene = new THREE.Scene();

// Set background color (optional)
scene.background = new THREE.Color(0x000000);

// Add fog effect (optional)
scene.fog = new THREE.Fog(0xcccccc, 10, 50);

// Add objects to the scene
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);`,
    category: 'core',
  },
  {
    id: 'camera',
    title: 'Camera',
    description: 'Cameras define the viewpoint from which the scene is rendered. The most common type is PerspectiveCamera, which mimics how the human eye sees the world.',
    codeSnippet: `import * as THREE from 'three';

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(
  75,                           // Field of view (degrees)
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1,                          // Near clipping plane
  1000                          // Far clipping plane
);

// Position the camera
camera.position.set(0, 0, 5);
camera.lookAt(0, 0, 0);

// OrthographicCamera for 2D-like rendering
const orthoCamera = new THREE.OrthographicCamera(
  -1, 1, 1, -1, 0.1, 1000
);`,
    category: 'core',
  },
  {
    id: 'renderer',
    title: 'Renderer',
    description: 'The WebGLRenderer uses WebGL to render your scene. It creates an HTML canvas element and handles all the GPU-accelerated rendering.',
    codeSnippet: `import * as THREE from 'three';

// Create WebGL renderer
const renderer = new THREE.WebGLRenderer({
  antialias: true,              // Smooth edges
  alpha: true,                  // Transparent background
});

// Set renderer size
renderer.setSize(window.innerWidth, window.innerHeight);

// Set pixel ratio for sharp rendering on high-DPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// Enable shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Add to DOM
document.body.appendChild(renderer.domElement);

// Render the scene
renderer.render(scene, camera);`,
    category: 'rendering',
  },
  {
    id: 'geometry',
    title: 'Geometry',
    description: 'Geometry defines the shape of 3D objects. Three.js provides many built-in geometries like BoxGeometry, SphereGeometry, and PlaneGeometry.',
    codeSnippet: `import * as THREE from 'three';

// Box geometry
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

// Sphere geometry
const sphereGeometry = new THREE.SphereGeometry(
  0.5,    // Radius
  32,     // Width segments
  32      // Height segments
);

// Plane geometry
const planeGeometry = new THREE.PlaneGeometry(10, 10);

// Cylinder geometry
const cylinderGeometry = new THREE.CylinderGeometry(
  0.5,    // Top radius
  0.5,    // Bottom radius
  1,      // Height
  32      // Radial segments
);

// Custom geometry with BufferGeometry
const customGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([...]);
customGeometry.setAttribute('position', 
  new THREE.BufferAttribute(vertices, 3)
);`,
    category: 'objects',
  },
  {
    id: 'material',
    title: 'Material',
    description: 'Materials define the appearance of surfaces. They control color, texture, transparency, and how objects react to light.',
    codeSnippet: `import * as THREE from 'three';

// Basic material (not affected by lights)
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: false,
});

// Standard material (physically-based rendering)
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0x0077ff,
  metalness: 0.5,
  roughness: 0.5,
});

// Phong material (shiny surfaces)
const phongMaterial = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  shininess: 100,
  specular: 0x444444,
});

// Material with texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('texture.jpg');
const texturedMaterial = new THREE.MeshStandardMaterial({
  map: texture,
});`,
    category: 'objects',
  },
  {
    id: 'light',
    title: 'Light',
    description: 'Lights illuminate objects in the scene. Different light types create different effects: ambient for overall illumination, directional for sunlight, point for bulbs.',
    codeSnippet: `import * as THREE from 'three';

// Ambient light (illuminates all objects equally)
const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);

// Directional light (parallel rays, like sunlight)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Point light (radiates from a point)
const pointLight = new THREE.PointLight(0xff0000, 1, 100);
pointLight.position.set(0, 5, 0);
scene.add(pointLight);

// Spot light (cone-shaped light)
const spotLight = new THREE.SpotLight(0xffffff, 1);
spotLight.position.set(0, 10, 0);
spotLight.angle = Math.PI / 6;
scene.add(spotLight);`,
    category: 'lighting',
  },
];
