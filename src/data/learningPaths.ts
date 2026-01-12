import { LearningPath } from '../types';

export const learningPaths: LearningPath[] = [
  {
    id: 'beginner-path',
    title: 'Beginner Path',
    level: 'Beginner',
    description: 'Start your Three.js journey from scratch. Learn fundamental concepts and create your first 3D scenes.',
    topics: [
      'Understanding 3D space and coordinates',
      'Setting up a basic Three.js project',
      'Creating scenes, cameras, and renderers',
      'Adding simple geometries',
      'Basic materials and colors',
      'Simple animations with requestAnimationFrame'
    ]
  },
  {
    id: 'intermediate-path',
    title: 'Intermediate Path',
    level: 'Intermediate',
    description: 'Build on basics with advanced techniques. Add lighting, textures, and interactivity to your scenes.',
    topics: [
      'Working with different light types',
      'Loading and applying textures',
      'Camera controls and movement',
      'Loading 3D models (GLTF/GLB)',
      'Basic physics and collision detection',
      'Performance optimization techniques'
    ]
  }
];
