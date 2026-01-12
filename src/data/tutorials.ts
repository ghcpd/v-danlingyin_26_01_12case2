import { Tutorial } from '../types';

export const tutorials: Tutorial[] = [
  {
    id: 'first-scene',
    title: 'Creating Your First Scene',
    difficulty: 'Beginner',
    description: 'Learn the fundamentals of Three.js by creating a simple 3D scene with a rotating cube.',
    steps: [
      {
        stepNumber: 1,
        title: 'Setup HTML and Import Three.js',
        content: 'First, create an HTML file with a canvas element where Three.js will render. Import the Three.js library using a module bundler or CDN.',
        codeSnippet: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Three.js Scene</title>
  <style>
    body { margin: 0; }
    canvas { display: block; }
  </style>
</head>
<body>
  <script type="module" src="main.js"></script>
</body>
</html>`
      },
      {
        stepNumber: 2,
        title: 'Create Scene, Camera, and Renderer',
        content: 'Every Three.js project needs three essential components: a scene to hold objects, a camera to define the viewpoint, and a renderer to draw everything.',
        codeSnippet: `import * as THREE from 'three';

// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight, 
  0.1, 
  1000
);
camera.position.z = 5;

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);`
      },
      {
        stepNumber: 3,
        title: 'Add a Cube to the Scene',
        content: 'Create a cube by combining a box geometry with a material. Add the resulting mesh to the scene.',
        codeSnippet: `// Create cube geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create material with color
const material = new THREE.MeshBasicMaterial({ 
  color: 0x00ff00 
});

// Combine geometry and material into mesh
const cube = new THREE.Mesh(geometry, material);

// Add cube to scene
scene.add(cube);`
      },
      {
        stepNumber: 4,
        title: 'Create Animation Loop',
        content: 'Use requestAnimationFrame to create a smooth animation loop that rotates the cube and renders the scene continuously.',
        codeSnippet: `function animate() {
  requestAnimationFrame(animate);
  
  // Rotate cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  // Render scene
  renderer.render(scene, camera);
}

// Start animation
animate();`
      },
      {
        stepNumber: 5,
        title: 'Handle Window Resize',
        content: 'Make your scene responsive by updating the camera and renderer when the window is resized.',
        codeSnippet: `window.addEventListener('resize', () => {
  // Update camera aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  
  // Update renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
});`
      }
    ]
  },
  {
    id: 'adding-camera',
    title: 'Understanding and Positioning Cameras',
    difficulty: 'Beginner',
    description: 'Deep dive into camera types, positioning, and controls in Three.js.',
    steps: [
      {
        stepNumber: 1,
        title: 'Perspective vs Orthographic Cameras',
        content: 'Three.js offers different camera types. PerspectiveCamera simulates human vision with depth, while OrthographicCamera shows objects at the same size regardless of distance.',
        codeSnippet: `import * as THREE from 'three';

// Perspective camera (realistic depth)
const perspectiveCamera = new THREE.PerspectiveCamera(
  75,                                    // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1,                                   // Near clipping plane
  1000                                   // Far clipping plane
);

// Orthographic camera (no perspective distortion)
const orthoCamera = new THREE.OrthographicCamera(
  -10, 10,  // Left and right
  10, -10,  // Top and bottom
  0.1,      // Near
  1000      // Far
);`
      },
      {
        stepNumber: 2,
        title: 'Position and Orientation',
        content: 'Control where the camera is located and what it looks at using position and lookAt methods.',
        codeSnippet: `// Position camera in 3D space
camera.position.set(5, 5, 5);

// Point camera at specific coordinates
camera.lookAt(0, 0, 0);

// Or look at an object
const targetObject = new THREE.Mesh(/* ... */);
camera.lookAt(targetObject.position);`
      },
      {
        stepNumber: 3,
        title: 'Camera Controls',
        content: 'Add interactive controls to let users orbit, pan, and zoom around the scene using OrbitControls.',
        codeSnippet: `import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Create orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Configure controls
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 2;
controls.maxDistance = 20;

// Update in animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();`
      }
    ]
  },
  {
    id: 'rendering-objects',
    title: 'Creating and Rendering 3D Objects',
    difficulty: 'Intermediate',
    description: 'Master the creation of various 3D objects with different geometries and materials.',
    steps: [
      {
        stepNumber: 1,
        title: 'Built-in Geometries',
        content: 'Three.js provides many pre-built geometries for common shapes. Learn how to create and customize them.',
        codeSnippet: `import * as THREE from 'three';

// Box
const box = new THREE.BoxGeometry(1, 1, 1);

// Sphere
const sphere = new THREE.SphereGeometry(
  1,   // radius
  32,  // width segments
  32   // height segments
);

// Cylinder
const cylinder = new THREE.CylinderGeometry(
  0.5,  // top radius
  0.5,  // bottom radius
  2,    // height
  32    // segments
);

// Torus (donut shape)
const torus = new THREE.TorusGeometry(
  1,    // radius
  0.4,  // tube diameter
  16,   // radial segments
  100   // tubular segments
);`
      },
      {
        stepNumber: 2,
        title: 'Working with Materials',
        content: 'Apply different materials to create various visual effects. Some materials require lights to be visible.',
        codeSnippet: `// Basic material (no lights needed)
const basicMat = new THREE.MeshBasicMaterial({ 
  color: 0xff0000,
  wireframe: false
});

// Lambert material (matte surfaces)
const lambertMat = new THREE.MeshLambertMaterial({ 
  color: 0x00ff00 
});

// Standard material (PBR - realistic)
const standardMat = new THREE.MeshStandardMaterial({
  color: 0x0000ff,
  metalness: 0.3,
  roughness: 0.7
});

// Create meshes
const redCube = new THREE.Mesh(box, basicMat);
const greenSphere = new THREE.Mesh(sphere, lambertMat);
const blueTorus = new THREE.Mesh(torus, standardMat);`
      },
      {
        stepNumber: 3,
        title: 'Positioning and Transforming Objects',
        content: 'Control object position, rotation, and scale to compose your scene.',
        codeSnippet: `// Position (x, y, z)
redCube.position.set(-2, 0, 0);
greenSphere.position.set(0, 0, 0);
blueTorus.position.set(2, 0, 0);

// Rotation (in radians)
redCube.rotation.x = Math.PI / 4;
redCube.rotation.y = Math.PI / 4;

// Scale
greenSphere.scale.set(1.5, 1.5, 1.5);

// Add all to scene
scene.add(redCube, greenSphere, blueTorus);`
      },
      {
        stepNumber: 4,
        title: 'Adding Lights',
        content: 'Most materials need lights to be visible. Add various light types to illuminate your objects.',
        codeSnippet: `// Ambient light (soft overall illumination)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

// Directional light (like sun)
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// Point light (like light bulb)
const pointLight = new THREE.PointLight(0xff00ff, 1, 50);
pointLight.position.set(0, 5, 0);
scene.add(pointLight);`
      }
    ]
  }
];
