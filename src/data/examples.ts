import { Example } from '../types';

export const examples: Example[] = [
  {
    id: 'rotating-cube',
    title: 'Rotating Cube',
    category: 'Basics',
    description: 'A simple colored cube that rotates continuously in 3D space. Perfect introduction to animation in Three.js.',
    thumbnail: '/examples/rotating-cube.png',
    codeSnippet: `import * as THREE from 'three';

// Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();`
  },
  {
    id: 'basic-lighting',
    title: 'Basic Lighting Demo',
    category: 'Lighting',
    description: 'Demonstrates different light types (ambient, directional, point) and how they affect 3D objects.',
    thumbnail: '/examples/basic-lighting.png',
    codeSnippet: `import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create sphere with standard material
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ 
  color: 0x2194ce,
  metalness: 0.3,
  roughness: 0.4
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xff0000, 1, 100);
pointLight.position.set(-5, 3, 0);
scene.add(pointLight);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();`
  },
  {
    id: 'orbit-controls',
    title: 'Orbit Controls Demo',
    category: 'Interaction',
    description: 'Interactive scene where you can orbit, zoom, and pan around 3D objects using mouse controls.',
    thumbnail: '/examples/orbit-controls.png',
    codeSnippet: `import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create multiple objects
const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x049ef4 });
const torus = new THREE.Mesh(torusGeometry, material);
scene.add(torus);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const box = new THREE.Mesh(boxGeometry, new THREE.MeshStandardMaterial({ color: 0xf4d03f }));
box.position.set(-3, 0, 0);
scene.add(box);

const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const sphere = new THREE.Mesh(sphereGeometry, new THREE.MeshStandardMaterial({ color: 0xe74c3c }));
sphere.position.set(3, 0, 0);
scene.add(sphere);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

camera.position.z = 8;

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  controls.update();
  renderer.render(scene, camera);
}
animate();`
  }
];
