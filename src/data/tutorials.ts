import { Tutorial } from '../types/content';

export const tutorials: Tutorial[] = [
  {
    id: 'first-scene',
    title: 'Creating your first scene',
    difficulty: 'Beginner',
    steps: [
      { id: 'step-1', text: 'Install three.js and import the core classes.' },
      { id: 'step-2', text: 'Create a Scene, PerspectiveCamera, and WebGLRenderer.' },
      { id: 'step-3', text: 'Add a simple cube mesh and position the camera.' },
      { id: 'step-4', text: 'Render the scene inside an animation loop.' }
    ],
    snippet: `import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, w / h, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: '#22d3ee' })
);
scene.add(cube);

function animate() {
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();`
  },
  {
    id: 'adding-camera',
    title: 'Adding a camera',
    difficulty: 'Beginner',
    steps: [
      { id: 'step-1', text: 'Use PerspectiveCamera for realistic depth perception.' },
      { id: 'step-2', text: 'Set camera position so the subject is in view.' },
      { id: 'step-3', text: 'Update aspect ratio on resize events.' },
      { id: 'step-4', text: 'Experiment with OrthographicCamera for UI scenes.' }
    ],
    snippet: `const camera = new THREE.PerspectiveCamera(
  60,
  container.clientWidth / container.clientHeight,
  0.1,
  500
);
camera.position.set(3, 2, 4);
window.addEventListener('resize', () => {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
});`
  },
  {
    id: 'rendering-objects',
    title: 'Rendering objects',
    difficulty: 'Intermediate',
    steps: [
      { id: 'step-1', text: 'Choose materials that match your lighting setup.' },
      { id: 'step-2', text: 'Batch updates inside the animation loop for smooth motion.' },
      { id: 'step-3', text: 'Leverage requestAnimationFrame for frame syncing.' },
      { id: 'step-4', text: 'Use helpers and axes to debug spatial orientation.' }
    ],
    snippet: `const material = new THREE.MeshStandardMaterial({
  color: '#a78bfa',
  metalness: 0.3,
  roughness: 0.5
});
const mesh = new THREE.Mesh(new THREE.SphereGeometry(1), material);
scene.add(mesh);

function render() {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
render();`
  }
];
