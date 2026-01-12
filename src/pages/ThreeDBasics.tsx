import Layout from '../components/Layout';
import { basicConcepts } from '../data/basics';

const ThreeDBasics = () => {
  return (
    <Layout>
      <div className="bg-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">3D Basics</h1>
          <p className="text-xl text-orange-100">
            Essential 3D concepts and terminology to understand before diving into Three.js
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {basicConcepts.map((concept, index) => (
            <div key={concept.id} className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl font-bold text-orange-600">{index + 1}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{concept.title}</h2>
                </div>
              </div>

              {concept.diagram && (
                <div className="w-full h-64 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <svg className="w-24 h-24 text-orange-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <p className="text-orange-600 text-sm">Diagram Placeholder</p>
                  </div>
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                {concept.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Building?</h3>
            <p className="text-orange-100 mb-6">
              Now that you understand the basics of 3D space and Three.js concepts, you're ready to start creating your own 3D scenes!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/tutorials"
                className="bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Start with Tutorials
              </a>
              <a
                href="/documentation"
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors border-2 border-white"
              >
                Browse Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThreeDBasics;
