import * as THREE from 'three';

export const initThreeScene = (container: HTMLElement, exampleId: string): (() => void) => {
  const width = container.clientWidth;
  const height = container.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  let animationId: number;
  let mesh: THREE.Mesh | null = null;

  switch (exampleId) {
    case 'rotating-cube':
      setupRotatingCube(scene, camera);
      mesh = scene.children.find(child => child instanceof THREE.Mesh) as THREE.Mesh;
      break;
    case 'basic-lighting':
      setupBasicLighting(scene, camera);
      mesh = scene.children.find(child => child instanceof THREE.Mesh) as THREE.Mesh;
      break;
    case 'orbit-controls':
      setupOrbitControls(scene, camera);
      break;
    default:
      setupRotatingCube(scene, camera);
      mesh = scene.children.find(child => child instanceof THREE.Mesh) as THREE.Mesh;
  }

  const animate = () => {
    animationId = requestAnimationFrame(animate);

    if (mesh) {
      if (exampleId === 'rotating-cube') {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      } else if (exampleId === 'basic-lighting') {
        mesh.rotation.y += 0.005;
      }
    }

    if (exampleId === 'orbit-controls') {
      scene.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.TorusGeometry) {
          child.rotation.x += 0.01;
          child.rotation.y += 0.005;
        }
      });
    }

    renderer.render(scene, camera);
  };

  animate();

  const handleResize = () => {
    const newWidth = container.clientWidth;
    const newHeight = container.clientHeight;
    
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('resize', handleResize);
    container.removeChild(renderer.domElement);
    renderer.dispose();
  };
};

const setupRotatingCube = (scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
};

const setupBasicLighting = (scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshStandardMaterial({
    color: 0x2194ce,
    metalness: 0.3,
    roughness: 0.4,
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xff0000, 1, 100);
  pointLight.position.set(-5, 3, 0);
  scene.add(pointLight);

  camera.position.z = 5;
};

const setupOrbitControls = (scene: THREE.Scene, camera: THREE.PerspectiveCamera) => {
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

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  camera.position.z = 8;
};
