import type { Example } from '../types';

export const examplesData: Example[] = [
  {
    id: 'rotating-cube',
    title: 'Rotating Cube',
    description: 'A simple animated cube that rotates on all axes. This is the classic "Hello World" of Three.js.',
    thumbnail: '/thumbnails/rotating-cube.svg',
    category: 'geometry',
    codeSnippet: `import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}

animate();`,
  },
  {
    id: 'basic-lighting',
    title: 'Basic Lighting Demo',
    description: 'Demonstrates different types of lights in Three.js: ambient, directional, and point lights working together.',
    thumbnail: '/thumbnails/basic-lighting.svg',
    category: 'lighting',
    codeSnippet: `import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a1a);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 3);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Create sphere with PBR material
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({
  color: 0x2194ce,
  metalness: 0.3,
  roughness: 0.4,
});
const sphere = new THREE.Mesh(geometry, material);
sphere.castShadow = true;
scene.add(sphere);

// Floor
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1.5;
floor.receiveShadow = true;
scene.add(floor);

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

// Directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Point light (red)
const pointLight = new THREE.PointLight(0xff4444, 0.5);
pointLight.position.set(-2, 2, 0);
scene.add(pointLight);

// Point light (blue)
const pointLight2 = new THREE.PointLight(0x4444ff, 0.5);
pointLight2.position.set(2, 2, 0);
scene.add(pointLight2);

// Animation
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.005;
  renderer.render(scene, camera);
}

animate();`,
  },
  {
    id: 'orbit-controls',
    title: 'Orbit Controls Demo',
    description: 'Interactive camera controls that allow users to orbit, zoom, and pan around objects in the scene.',
    thumbnail: '/thumbnails/orbit-controls.svg',
    category: 'controls',
    codeSnippet: `import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x16213e);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 3, 3);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 2;
controls.maxDistance = 10;

// Create multiple objects
const objects: THREE.Mesh[] = [];

// Central sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xe94560 })
);
scene.add(sphere);
objects.push(sphere);

// Orbiting cubes
for (let i = 0; i < 6; i++) {
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.3, 0.3, 0.3),
    new THREE.MeshStandardMaterial({ 
      color: new THREE.Color().setHSL(i / 6, 0.7, 0.5) 
    })
  );
  const angle = (i / 6) * Math.PI * 2;
  cube.position.set(Math.cos(angle) * 1.5, 0, Math.sin(angle) * 1.5);
  scene.add(cube);
  objects.push(cube);
}

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.3));
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);

// Animation
function animate() {
  requestAnimationFrame(animate);
  
  // Update controls
  controls.update();
  
  // Rotate objects
  objects.forEach((obj, i) => {
    obj.rotation.x += 0.01;
    obj.rotation.y += 0.01 * (i + 1) * 0.5;
  });
  
  renderer.render(scene, camera);
}

animate();`,
  },
  {
    id: 'animated-particles',
    title: 'Animated Particles',
    description: 'A particle system creating a starfield effect with thousands of animated points.',
    thumbnail: '/thumbnails/particles.svg',
    category: 'animation',
    codeSnippet: `import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000011);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create particles
const particleCount = 5000;
const positions = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
  const i3 = i * 3;
  
  // Random positions in a sphere
  const radius = 10;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(Math.random() * 2 - 1);
  
  positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
  positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
  positions[i3 + 2] = radius * Math.cos(phi);
  
  // Random colors
  colors[i3] = Math.random() * 0.5 + 0.5;
  colors[i3 + 1] = Math.random() * 0.5 + 0.5;
  colors[i3 + 2] = 1;
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
  size: 0.02,
  vertexColors: true,
  transparent: true,
  opacity: 0.8,
});

const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Animation
function animate() {
  requestAnimationFrame(animate);
  
  particles.rotation.x += 0.0005;
  particles.rotation.y += 0.001;
  
  renderer.render(scene, camera);
}

animate();`,
  },
  {
    id: 'texture-mapping',
    title: 'Texture Mapping',
    description: 'Learn how to apply textures to 3D objects for realistic surface details.',
    thumbnail: '/thumbnails/texture.svg',
    category: 'geometry',
    codeSnippet: `import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Texture loader
const textureLoader = new THREE.TextureLoader();

// Create a procedural texture using canvas
const canvas = document.createElement('canvas');
canvas.width = 256;
canvas.height = 256;
const ctx = canvas.getContext('2d')!;

// Create checkerboard pattern
const tileSize = 32;
for (let y = 0; y < 256; y += tileSize) {
  for (let x = 0; x < 256; x += tileSize) {
    ctx.fillStyle = ((x + y) / tileSize) % 2 === 0 ? '#ffffff' : '#4a90d9';
    ctx.fillRect(x, y, tileSize, tileSize);
  }
}

const texture = new THREE.CanvasTexture(canvas);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

// Create textured cube
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const material = new THREE.MeshStandardMaterial({
  map: texture,
  metalness: 0.1,
  roughness: 0.5,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Animation
function animate() {
  requestAnimationFrame(animate);
  
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}

animate();`,
  },
  {
    id: 'wireframe-geometry',
    title: 'Wireframe Geometry',
    description: 'Display 3D objects as wireframes, revealing their geometric structure.',
    thumbnail: '/thumbnails/wireframe.svg',
    category: 'geometry',
    codeSnippet: `import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0f0f23);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create multiple wireframe objects
const geometries = [
  new THREE.IcosahedronGeometry(0.7, 1),
  new THREE.TorusKnotGeometry(0.4, 0.15, 100, 16),
  new THREE.OctahedronGeometry(0.6),
];

const colors = [0x00ff88, 0xff6b6b, 0x4ecdc4];
const meshes: THREE.Mesh[] = [];

geometries.forEach((geometry, i) => {
  const material = new THREE.MeshBasicMaterial({
    color: colors[i],
    wireframe: true,
  });
  
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = (i - 1) * 2.5;
  scene.add(mesh);
  meshes.push(mesh);
});

// Animation
function animate() {
  requestAnimationFrame(animate);
  
  meshes.forEach((mesh, i) => {
    mesh.rotation.x += 0.01 * (i + 1);
    mesh.rotation.y += 0.015 * (i + 1);
  });
  
  renderer.render(scene, camera);
}

animate();`,
  },
];
