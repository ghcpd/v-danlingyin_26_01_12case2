import { ExampleItem } from '../types/content';

export const examples: ExampleItem[] = [
  {
    id: 'rotating-cube',
    title: 'Rotating Cube',
    description: 'A foundational example showing geometry, material, and animation basics.',
    thumbnail: '/thumbnails/cube.png',
    snippet: `cube.rotation.x += 0.01;
cube.rotation.y += 0.015;
renderer.render(scene, camera);`,
    tags: ['animation', 'basics']
  },
  {
    id: 'lighting-demo',
    title: 'Basic Lighting Demo',
    description: 'Understand ambient and directional light to add depth to your scenes.',
    thumbnail: '/thumbnails/light.png',
    snippet: `const ambient = new THREE.AmbientLight('#cbd5e1', 0.5);
const directional = new THREE.DirectionalLight('#ffffff', 1.1);
directional.position.set(5, 5, 4);
scene.add(ambient, directional);`,
    tags: ['lighting', 'composition']
  },
  {
    id: 'orbit-controls',
    title: 'Orbit Controls Demo',
    description: 'Allow users to rotate, pan, and zoom around your subject.',
    thumbnail: '/thumbnails/orbit.png',
    snippet: `const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;`,
    tags: ['interaction', 'controls']
  }
];
