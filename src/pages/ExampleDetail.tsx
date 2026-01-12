import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import CodeSnippet from '../components/CodeSnippet';
import { examples } from '../data/examples';
import { initThreeScene } from '../three/sceneUtils';

const ExampleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  
  const example = examples.find(ex => ex.id === id);

  useEffect(() => {
    if (!canvasContainerRef.current || !example) return;

    const cleanup = initThreeScene(canvasContainerRef.current, example.id);

    return () => {
      if (cleanup) cleanup();
    };
  }, [example]);

  if (!example) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Example Not Found</h1>
          <p className="text-gray-600 mb-8">The example you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/examples')}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Back to Examples
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-purple-700 text-white py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/examples')}
            className="text-purple-100 hover:text-white mb-4 flex items-center"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Examples
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{example.title}</h1>
          <p className="text-purple-100">{example.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo Canvas */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Live Demo</h2>
              <div 
                ref={canvasContainerRef}
                className="w-full h-96 bg-gray-900 rounded-lg overflow-hidden"
                aria-label="Three.js demo canvas"
              />
              <p className="text-sm text-gray-500 mt-4">
                Interactive 3D scene rendered with Three.js. Use mouse to interact (if controls enabled).
              </p>
            </div>
          </div>

          {/* Source Code */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Source Code</h2>
              <CodeSnippet code={example.codeSnippet} language="javascript" />
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Try It Yourself
                </h3>
                <p className="text-blue-700 text-sm">
                  Copy this code and modify it in your own project. Experiment with different parameters, colors, and geometries to learn how Three.js works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExampleDetail;
