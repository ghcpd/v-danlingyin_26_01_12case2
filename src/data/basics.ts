import { BasicConcept } from '../types';

export const basicConcepts: BasicConcept[] = [
  {
    id: '3d-space',
    title: 'What is 3D Space?',
    content: `3D space is a mathematical model that represents three-dimensional reality. Unlike 2D which has only width and height, 3D adds depth, creating a more realistic representation of the world around us.

In computer graphics, 3D space is defined by three axes:
- X-axis: Represents left-right movement (horizontal)
- Y-axis: Represents up-down movement (vertical)  
- Z-axis: Represents forward-backward movement (depth)

Every point in 3D space can be described using three coordinates (x, y, z). For example:
- (0, 0, 0) is the origin point at the center
- (5, 0, 0) is 5 units to the right
- (0, 3, 0) is 3 units up
- (0, 0, -2) is 2 units away from the viewer

Understanding 3D space is fundamental to working with Three.js, as you'll constantly be positioning objects, cameras, and lights using these coordinates.`,
    diagram: '/diagrams/3d-space.svg'
  },
  {
    id: 'coordinate-systems',
    title: 'Coordinate Systems',
    content: `Coordinate systems define how we measure and describe positions in 3D space. Three.js uses a right-handed coordinate system, which is the standard in 3D graphics.

Right-Handed Coordinate System:
- When you point your right thumb along the positive X-axis (right)
- Your index finger along the positive Y-axis (up)
- Your middle finger naturally points along the positive Z-axis (toward you)

Key Points:
1. Origin (0, 0, 0): The center point where all axes meet
2. Positive vs Negative: Each axis has positive and negative directions
   - +X is right, -X is left
   - +Y is up, -Y is down
   - +Z is toward viewer, -Z is away from viewer

3. Units: Three.js doesn't enforce specific units (meters, feet, etc.)
   - You can treat 1 unit as 1 meter, 1 foot, or anything else
   - Just be consistent throughout your project

World vs Local Coordinates:
- World coordinates: Position relative to the scene's origin
- Local coordinates: Position relative to a parent object
- When you add an object to a group, it uses local coordinates relative to that group`,
    diagram: '/diagrams/coordinate-system.svg'
  },
  {
    id: 'mesh-geometry-material',
    title: 'Mesh, Geometry, and Material',
    content: `In Three.js, visible 3D objects are created by combining three concepts: Mesh, Geometry, and Material.

Geometry:
Geometry defines the shape of an object. It's a collection of:
- Vertices: Points in 3D space
- Faces: Triangles connecting vertices
- Normals: Vectors perpendicular to faces (used for lighting)
- UV coordinates: Map 2D textures onto 3D surfaces

Think of geometry as the skeleton or wireframe of your object. Three.js provides many built-in geometries like BoxGeometry, SphereGeometry, and PlaneGeometry.

Material:
Material defines how the surface of the geometry appears:
- Color: Base color of the object
- Texture: Images mapped onto the surface
- Reflectivity: How shiny or matte the surface is
- Transparency: Whether you can see through it

Different material types react to light differently:
- MeshBasicMaterial: Not affected by lights, always shows full color
- MeshLambertMaterial: Matte, non-shiny surfaces
- MeshPhongMaterial: Shiny surfaces with specular highlights
- MeshStandardMaterial: Physically-based rendering (most realistic)

Mesh:
A Mesh combines geometry and material into a renderable object:
- It takes a geometry (shape) and material (appearance)
- Can be positioned, rotated, and scaled
- Added to the scene to be rendered

Example workflow:
1. Create geometry: const geometry = new THREE.BoxGeometry(1, 1, 1)
2. Create material: const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
3. Create mesh: const cube = new THREE.Mesh(geometry, material)
4. Add to scene: scene.add(cube)`,
    diagram: '/diagrams/mesh-geometry-material.svg'
  }
];
