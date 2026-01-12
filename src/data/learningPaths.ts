import { LearningPath } from '../types/content';

export const learningPaths: LearningPath[] = [
  {
    id: 'beginner-track',
    title: 'Beginner Track',
    level: 'Beginner',
    focus: 'Foundations to get a scene on screen quickly.',
    items: ['Install Three.js', 'Compose a scene', 'Render your first mesh', 'Add basic lighting']
  },
  {
    id: 'intermediate-track',
    title: 'Intermediate Track',
    level: 'Intermediate',
    focus: 'Structure scenes, manage controls, and light compelling spaces.',
    items: ['Camera controls', 'Physically-based materials', 'Scene organization', 'Lighting moods']
  }
];
