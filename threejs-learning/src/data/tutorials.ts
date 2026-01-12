import type { Tutorial } from '../types';

export const tutorialsData: Tutorial[] = [
  {
    id: 'first-scene',
    title: 'Creating Your First Scene',
    difficulty: 'beginner',
    description: 'Learn the fundamentals of Three.js by creating your first 3D scene with a simple colored cube.',
    steps: [
      {
        id: 'step-1',
        title: 'Set Up Your Project',
        content: 'First, create a new project and install Three.js. You can use npm, yarn, or pnpm to install the library.',
        codeSnippet: `# Create a new project
npm create vite@latest my-three-app -- --template vanilla-ts

# Navigate to project
cd my-three-app

# Install Three.js
npm install three
npm install -D @types/three`,
      },
      {
        id: 'step-2',
        title: 'Create the HTML Structure',
        content: 'Set up a minimal HTML file with a container for the Three.js canvas.',
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Three.js Scene</title>
  <style>
    body { margin: 0; overflow: hidden; }
    canvas { display: block; }
  </style>
</head>
<body>
  <script type="module" src="/src/main.ts"></script>
</body>
</html>`,
      },
      {
        id: 'step-3',
        title: 'Initialize the Scene',
        content: 'Create the three essential components: Scene, Camera, and Renderer.',
        codeSnippet: `import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

// Create the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Create the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);`,
      },
      {
        id: 'step-4',
        title: 'Add a Cube',
        content: 'Create a cube mesh by combining geometry and material, then add it to the scene.',
        codeSnippet: `// Create geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create material
const material = new THREE.MeshBasicMaterial({ 
  color: 0x00ff88,
  wireframe: false 
});

// Create mesh
const cube = new THREE.Mesh(geometry, material);

// Add to scene
scene.add(cube);`,
      },
      {
        id: 'step-5',
        title: 'Create the Animation Loop',
        content: 'Set up the render loop to animate the cube and continuously render the scene.',
        codeSnippet: `function animate() {
  requestAnimationFrame(animate);

  // Rotate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation
animate();`,
      },
      {
        id: 'step-6',
        title: 'Handle Window Resize',
        content: 'Make the scene responsive by handling window resize events.',
        codeSnippet: `window.addEventListener('resize', () => {
  // Update camera aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // Update renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
});`,
      },
    ],
  },
  {
    id: 'adding-camera',
    title: 'Adding a Camera',
    difficulty: 'beginner',
    description: 'Deep dive into Three.js cameras, understanding perspective vs orthographic cameras and how to control them.',
    steps: [
      {
        id: 'step-1',
        title: 'Understanding Camera Types',
        content: 'Three.js provides two main camera types: PerspectiveCamera for realistic 3D views and OrthographicCamera for 2D-style projections.',
      },
      {
        id: 'step-2',
        title: 'Creating a Perspective Camera',
        content: 'The PerspectiveCamera mimics how human eyes see the world, with objects appearing smaller as they get farther away.',
        codeSnippet: `const camera = new THREE.PerspectiveCamera(
  75,    // FOV: Field of View in degrees
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1,   // Near plane: closest visible distance
  1000   // Far plane: farthest visible distance
);

// Position the camera
camera.position.set(0, 2, 5);

// Point camera at a specific location
camera.lookAt(new THREE.Vector3(0, 0, 0));`,
      },
      {
        id: 'step-3',
        title: 'Creating an Orthographic Camera',
        content: 'OrthographicCamera renders objects without perspective distortion, useful for 2D games or technical visualizations.',
        codeSnippet: `const aspect = window.innerWidth / window.innerHeight;
const frustumSize = 5;

const camera = new THREE.OrthographicCamera(
  frustumSize * aspect / -2,  // Left
  frustumSize * aspect / 2,   // Right
  frustumSize / 2,            // Top
  frustumSize / -2,           // Bottom
  0.1,                        // Near
  1000                        // Far
);

camera.position.set(0, 0, 10);`,
      },
      {
        id: 'step-4',
        title: 'Camera Movement',
        content: 'Learn how to move and animate the camera programmatically.',
        codeSnippet: `// Orbit around origin
function animateCamera(time: number) {
  const radius = 5;
  camera.position.x = Math.sin(time * 0.001) * radius;
  camera.position.z = Math.cos(time * 0.001) * radius;
  camera.lookAt(0, 0, 0);
}

// In animation loop
function animate(time: number) {
  requestAnimationFrame(animate);
  animateCamera(time);
  renderer.render(scene, camera);
}`,
      },
    ],
  },
  {
    id: 'rendering-objects',
    title: 'Rendering Objects',
    difficulty: 'intermediate',
    description: 'Learn how to create and render various 3D objects with different geometries, materials, and lighting.',
    steps: [
      {
        id: 'step-1',
        title: 'Understanding Meshes',
        content: 'A Mesh is the combination of Geometry (shape) and Material (appearance). This is the fundamental building block for 3D objects.',
        codeSnippet: `import * as THREE from 'three';

// Mesh = Geometry + Material
const mesh = new THREE.Mesh(
  geometry,  // The shape
  material   // The appearance
);

scene.add(mesh);`,
      },
      {
        id: 'step-2',
        title: 'Working with Built-in Geometries',
        content: 'Three.js provides many built-in geometries that you can use to create common shapes.',
        codeSnippet: `// Sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.MeshStandardMaterial({ color: 0xff6b6b })
);
sphere.position.x = -3;

// Torus (donut shape)
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.7, 0.3, 16, 100),
  new THREE.MeshStandardMaterial({ color: 0x4ecdc4 })
);

// Cone
const cone = new THREE.Mesh(
  new THREE.ConeGeometry(0.5, 1, 32),
  new THREE.MeshStandardMaterial({ color: 0xffe66d })
);
cone.position.x = 3;

scene.add(sphere, torus, cone);`,
      },
      {
        id: 'step-3',
        title: 'Adding Lights for Realistic Rendering',
        content: 'MeshStandardMaterial and MeshPhongMaterial require lights to be visible. Add different light types for realistic illumination.',
        codeSnippet: `// Ambient light for base illumination
const ambient = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambient);

// Directional light for shadows and highlights
const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(5, 5, 5);
directional.castShadow = true;
scene.add(directional);

// Point light for local illumination
const point = new THREE.PointLight(0xff9000, 0.5);
point.position.set(-3, 2, 0);
scene.add(point);`,
      },
      {
        id: 'step-4',
        title: 'Enabling Shadows',
        content: 'Shadows add depth and realism to your scene. Enable them on the renderer, lights, and objects.',
        codeSnippet: `// Enable shadows on renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Light must cast shadows
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;

// Objects cast shadows
cube.castShadow = true;

// Floor receives shadows
floor.receiveShadow = true;`,
      },
      {
        id: 'step-5',
        title: 'Creating a Complete Scene',
        content: 'Put it all together to create a scene with multiple objects, lighting, and shadows.',
        codeSnippet: `// Create floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10),
  new THREE.MeshStandardMaterial({ color: 0x808080 })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1;
floor.receiveShadow = true;
scene.add(floor);

// Animation loop with object rotation
function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.01;
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  cone.rotation.y -= 0.01;

  renderer.render(scene, camera);
}

animate();`,
      },
    ],
  },
];
