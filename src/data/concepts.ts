import { Concept } from '../types/content';

export const concepts: Concept[] = [
  {
    id: 'scene',
    title: 'Scene',
    summary: 'A container that holds all objects, lights, and cameras. Think of it as your 3D stage.',
    snippet: `const scene = new THREE.Scene();
scene.background = new THREE.Color('#0b1120');`
  },
  {
    id: 'camera',
    title: 'Camera',
    summary: 'Defines what part of the 3D world is visible. Perspective cameras mimic human vision.',
    snippet: `const camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(2, 2, 3);`
  },
  {
    id: 'renderer',
    title: 'Renderer',
    summary: 'Converts the 3D scene into pixels. WebGLRenderer is the standard choice.',
    snippet: `const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);`
  },
  {
    id: 'geometry',
    title: 'Geometry',
    summary: 'Mathematical description of shapes. Combine with materials to form visible meshes.',
    snippet: `const geometry = new THREE.BoxGeometry(1, 1, 1);
const wireframe = new THREE.WireframeGeometry(geometry);`
  },
  {
    id: 'material',
    title: 'Material',
    summary: 'Defines how light interacts with surfaces. MeshStandardMaterial covers most PBR needs.',
    snippet: `const material = new THREE.MeshStandardMaterial({
  color: '#4ade80',
  metalness: 0.2,
  roughness: 0.4
});`
  },
  {
    id: 'light',
    title: 'Light',
    summary: 'Illuminates the scene. Mix ambient with directional or point lights for depth.',
    snippet: `const ambient = new THREE.AmbientLight('#e0f2fe', 0.6);
const directional = new THREE.DirectionalLight('#ffffff', 1.2);
directional.position.set(2, 3, 2);`
  }
];
