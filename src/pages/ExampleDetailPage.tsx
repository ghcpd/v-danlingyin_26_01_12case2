import { Link, useParams } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { examples } from '../data/examples';
import { BasicDemo } from '../three/BasicDemo';

export const ExampleDetailPage = (): JSX.Element => {
  const { id } = useParams();
  const example = examples.find((item) => item.id === id);

  if (!example) {
    return (
      <div className="space-y-4">
        <p className="text-white">Example not found.</p>
        <Link to="/examples" className="text-accent hover:text-accentDeep font-semibold">
          Back to examples
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/examples" className="text-accent hover:text-accentDeep font-semibold">
        ← Back to examples
      </Link>
      <SectionHeader
        eyebrow="Example"
        title={example.title}
        description={example.description}
      />
      <BasicDemo />
      <div className="glass-panel rounded-xl p-4">
        <h3 className="font-semibold text-white">Code snippet</h3>
        <pre className="code-block mt-3" aria-label={`${example.title} code snippet`}>
          <code>{example.snippet}</code>
        </pre>
      </div>
    </div>
  );
};

export default ExampleDetailPage;
