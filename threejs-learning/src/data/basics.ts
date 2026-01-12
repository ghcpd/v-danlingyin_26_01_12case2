import type { LearningPath, BasicsSection } from '../types';

export const learningPaths: LearningPath[] = [
  {
    id: 'beginner-path',
    title: 'Beginner Path',
    level: 'beginner',
    description: 'Start your Three.js journey from scratch. Learn the core concepts and create your first 3D scenes.',
    topics: [
      'What is Three.js?',
      'Setting up your development environment',
      'Understanding Scene, Camera, and Renderer',
      'Creating basic geometries',
      'Working with materials and colors',
      'Animation basics',
    ],
  },
  {
    id: 'intermediate-path',
    title: 'Intermediate Path',
    level: 'intermediate',
    description: 'Take your skills to the next level with lighting, shadows, textures, and interactive controls.',
    topics: [
      'Lighting fundamentals',
      'Shadow mapping',
      'Texture loading and mapping',
      'OrbitControls and user interaction',
      'Particle systems',
      'Performance optimization basics',
    ],
  },
];

export const basicsData: BasicsSection[] = [
  {
    id: '3d-space',
    title: 'What is 3D Space?',
    content: `Three-dimensional space is a geometric model in which every point is specified by three coordinates: X, Y, and Z.

In Three.js:
- **X-axis** runs horizontally (left to right)
- **Y-axis** runs vertically (bottom to top)
- **Z-axis** runs in depth (towards and away from the viewer)

This is known as a right-handed coordinate system. When you position objects in Three.js, you specify their location using these three values. For example, \`position.set(1, 2, 3)\` places an object 1 unit right, 2 units up, and 3 units towards the viewer.

Understanding 3D space is fundamental to creating scenes, positioning cameras, and animating objects in Three.js.`,
    diagram: `
    Y
    │
    │    Z
    │   /
    │  /
    │ /
    └──────── X
    `,
  },
  {
    id: 'coordinate-systems',
    title: 'Coordinate Systems',
    content: `Three.js uses two main coordinate systems:

**World Coordinates**
- The global coordinate system where all objects exist
- When you set an object's position directly, you're using world coordinates
- The scene's origin (0, 0, 0) is at the center of this system

**Local Coordinates**
- Each object has its own local coordinate system
- When objects are nested (parent-child relationships), children use coordinates relative to their parent
- Rotating a parent rotates all children around the parent's origin

**Screen Coordinates**
- 2D coordinates on the screen where the final render appears
- Used for interactions like clicking on 3D objects
- Requires conversion from 3D world coordinates to 2D screen space

Understanding these coordinate systems is essential for:
- Positioning objects correctly
- Creating object hierarchies
- Implementing user interactions`,
    diagram: `
    World Space          Local Space
    ┌─────────┐         ┌─────────┐
    │    ●────│───→     │  ●      │
    │   /│    │         │ /│      │
    │  / │    │         │/ │      │
    └─/──│────┘         │  │      │
     /   │               \\─│──────┘
    `,
  },
  {
    id: 'mesh-geometry-material',
    title: 'Mesh, Geometry, and Material',
    content: `In Three.js, visible 3D objects are created by combining three elements:

**Geometry**
Defines the shape of an object through vertices (points) and faces (surfaces connecting vertices).
- Built-in: BoxGeometry, SphereGeometry, PlaneGeometry, etc.
- Custom: BufferGeometry for custom shapes
- Geometries can be modified, merged, or created procedurally

**Material**
Defines how the surface looks and interacts with light.
- MeshBasicMaterial: Simple color, not affected by lights
- MeshStandardMaterial: Physically-based rendering (PBR)
- MeshPhongMaterial: Classic shiny surfaces
- MeshLambertMaterial: Matte surfaces
- Materials can include textures, transparency, and more

**Mesh**
The combination of geometry and material that creates a visible object.
\`\`\`
const mesh = new THREE.Mesh(geometry, material);
\`\`\`

This separation allows you to:
- Reuse geometries with different materials
- Reuse materials across multiple geometries
- Efficiently manage memory and rendering`,
    diagram: `
    Geometry      +      Material      =      Mesh
    (Shape)              (Appearance)         (Object)
    
    ┌───┐              ┌───────┐           ┌───┐
    │ ▲ │      +       │ color │     =     │███│
    │   │              │ texture│           │███│
    └───┘              └───────┘           └───┘
    `,
  },
  {
    id: 'rendering-pipeline',
    title: 'The Rendering Pipeline',
    content: `The rendering pipeline is the process by which Three.js converts your 3D scene into a 2D image on screen.

**1. Scene Graph**
Your scene is organized as a tree structure. The scene is the root, and all objects (meshes, lights, cameras) are children.

**2. Transformations**
Objects' positions, rotations, and scales are calculated relative to their parents, converting local coordinates to world coordinates.

**3. View Transformation**
The camera's position and orientation transform the world so that the camera is at the origin looking down the -Z axis.

**4. Projection**
3D coordinates are projected onto a 2D plane:
- Perspective: Objects farther away appear smaller
- Orthographic: No size change with distance

**5. Clipping**
Objects outside the camera's view frustum (the visible volume) are removed.

**6. Rasterization**
The WebGL renderer converts vector data to pixels, applying materials, textures, and lighting calculations.

**7. Fragment Processing**
Each pixel's final color is calculated based on materials, lights, and post-processing effects.

The renderer.render(scene, camera) call triggers this entire pipeline once per frame.`,
  },
  {
    id: 'vectors-matrices',
    title: 'Vectors and Matrices',
    content: `Three.js uses vectors and matrices extensively for 3D math.

**Vectors**
Represent positions, directions, or movements in space.

- **Vector2**: 2D vector (x, y) - used for UV coordinates, screen positions
- **Vector3**: 3D vector (x, y, z) - positions, directions, scales
- **Vector4**: 4D vector (x, y, z, w) - used in shader calculations

Common operations:
\`\`\`
const v = new THREE.Vector3(1, 2, 3);
v.add(other);        // Vector addition
v.sub(other);        // Vector subtraction
v.multiplyScalar(2); // Scale the vector
v.normalize();       // Make unit length
v.length();          // Get magnitude
v.dot(other);        // Dot product
v.cross(other);      // Cross product
\`\`\`

**Matrices**
Represent transformations (translation, rotation, scale) as 4x4 matrices.

- **Matrix3**: 3x3 matrix - normal transformations
- **Matrix4**: 4x4 matrix - full 3D transformations

Every Object3D has a matrix property that combines its position, rotation, and scale into a single transformation matrix.

Understanding vectors and matrices helps with:
- Custom animations
- Physics calculations
- Advanced camera controls
- Shader programming`,
  },
];
