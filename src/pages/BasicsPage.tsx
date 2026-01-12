import { BasicTopicCard } from '../components/BasicTopicCard';
import { SectionHeader } from '../components/SectionHeader';
import { basics } from '../data/basics';

export const BasicsPage = (): JSX.Element => (
  <div className="space-y-6">
    <SectionHeader
      eyebrow="3D Basics"
      title="Understand the space you are working in"
      description="Get a mental model for coordinates, meshes, materials, and how they compose a scene."
    />
    <div className="grid gap-4 md:grid-cols-3">
      {basics.map((topic) => (
        <BasicTopicCard key={topic.id} topic={topic} />
      ))}
    </div>
  </div>
);

export default BasicsPage;
