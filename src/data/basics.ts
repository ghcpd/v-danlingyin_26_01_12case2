import { BasicTopic } from '../types/content';

export const basics: BasicTopic[] = [
  {
    id: '3d-space',
    title: 'What is 3D space?',
    description: 'A 3D world uses X, Y, and Z axes to position objects. Positive Z usually moves objects toward the viewer.',
    diagramLabel: 'XYZ axes intersect at origin.'
  },
  {
    id: 'coordinates',
    title: 'Coordinate systems',
    description: 'World space positions everything globally, while local space describes position relative to a parent.',
    diagramLabel: 'Origin-centered box with arrows for X/Y/Z.'
  },
  {
    id: 'mesh',
    title: 'Mesh, geometry, material',
    description: 'A Mesh pairs geometry (shape) with material (appearance). Geometry defines vertices; material defines shading.',
    diagramLabel: 'Mesh = Geometry + Material overlay.'
  }
];
