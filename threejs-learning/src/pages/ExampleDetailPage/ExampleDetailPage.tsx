import { useParams, Link } from 'react-router-dom';
import { CodeBlock } from '../../components';
import { ThreeCanvas } from '../../three';
import { examplesData } from '../../data';
import { getCategoryColor, capitalize } from '../../utils';

export function ExampleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const example = examplesData.find((ex) => ex.id === id);

  if (!example) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Example Not Found</h1>
          <p className="text-slate-400 mb-6">
            The example you're looking for doesn't exist.
          </p>
          <Link
            to="/examples"
            className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            Back to Examples
          </Link>
        </div>
      </div>
    );
  }

  const getCanvasType = (): 'cube' | 'sphere' | 'particles' => {
    switch (example.id) {
      case 'rotating-cube':
      case 'texture-mapping':
      case 'wireframe-geometry':
        return 'cube';
      case 'basic-lighting':
      case 'orbit-controls':
        return 'sphere';
      case 'animated-particles':
        return 'particles';
      default:
        return 'cube';
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Navigation */}
        <Link
          to="/examples"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Examples
        </Link>

        {/* Example Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold text-white">{example.title}</h1>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                example.category
              )}`}
            >
              {capitalize(example.category)}
            </span>
          </div>
          <p className="text-slate-300 text-lg">{example.description}</p>
        </header>

        {/* Demo Canvas */}
        <section className="mb-8">
          <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-slate-700 flex items-center justify-between">
              <h2 className="text-white font-semibold">Live Demo</h2>
              <span className="text-xs text-slate-400 bg-slate-700 px-2 py-1 rounded">
                Interactive
              </span>
            </div>
            <div className="aspect-video max-h-[500px]">
              <ThreeCanvas type={getCanvasType()} className="w-full h-full" />
            </div>
          </div>
        </section>

        {/* Code Section */}
        <section>
          <h2 className="text-xl font-semibold text-white mb-4">Source Code</h2>
          <CodeBlock code={example.codeSnippet} language="typescript" />
        </section>

        {/* Related Examples */}
        <section className="mt-12 pt-8 border-t border-slate-700">
          <h2 className="text-xl font-semibold text-white mb-6">Related Examples</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {examplesData
              .filter((ex) => ex.id !== example.id && ex.category === example.category)
              .slice(0, 3)
              .map((relatedExample) => (
                <Link
                  key={relatedExample.id}
                  to={`/examples/${relatedExample.id}`}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-primary-500 transition-colors"
                >
                  <h3 className="font-medium text-white mb-1">{relatedExample.title}</h3>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    {relatedExample.description}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
