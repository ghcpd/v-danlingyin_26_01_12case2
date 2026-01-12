import { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import CodeSnippet from '../components/CodeSnippet';
import { docConcepts } from '../data/documentation';

const Documentation = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedConcept, setSelectedConcept] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(docConcepts.map(doc => doc.category)))];
  
  const filteredConcepts = selectedCategory === 'All' 
    ? docConcepts 
    : docConcepts.filter(doc => doc.category === selectedCategory);

  const activeConcept = selectedConcept 
    ? docConcepts.find(doc => doc.id === selectedConcept)
    : null;

  return (
    <Layout>
      <div className="bg-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-primary-100">
            Comprehensive reference for Three.js core concepts and APIs
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="font-semibold text-lg mb-4 text-gray-800">Categories</h3>
              <nav>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => {
                          setSelectedCategory(category);
                          setSelectedConcept(null);
                        }}
                        className={`w-full text-left px-3 py-2 rounded transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary-100 text-primary-700 font-semibold'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              {filteredConcepts.length > 0 && (
                <>
                  <h3 className="font-semibold text-lg mb-4 mt-6 text-gray-800">Concepts</h3>
                  <nav>
                    <ul className="space-y-2">
                      {filteredConcepts.map(concept => (
                        <li key={concept.id}>
                          <button
                            onClick={() => setSelectedConcept(concept.id)}
                            className={`w-full text-left px-3 py-2 rounded transition-colors text-sm ${
                              selectedConcept === concept.id
                                ? 'bg-primary-100 text-primary-700 font-semibold'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {concept.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeConcept ? (
              <div className="bg-white rounded-lg shadow-md p-8">
                <button
                  onClick={() => setSelectedConcept(null)}
                  className="text-primary-600 hover:text-primary-700 mb-4 flex items-center"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to all concepts
                </button>
                
                <div className="mb-2">
                  <span className="text-sm text-primary-600 font-semibold">{activeConcept.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{activeConcept.title}</h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {activeConcept.description}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Code Example</h3>
                <CodeSnippet code={activeConcept.codeSnippet} language="javascript" />
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedCategory === 'All' ? 'All Concepts' : `${selectedCategory} Concepts`}
                  </h2>
                  <p className="text-gray-600">
                    Click on any concept to view detailed documentation and code examples
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredConcepts.map(concept => (
                    <Card
                      key={concept.id}
                      title={concept.title}
                      description={concept.description}
                      onClick={() => setSelectedConcept(concept.id)}
                    >
                      <div className="mt-4">
                        <span className="text-xs text-primary-600 font-semibold">
                          {concept.category}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Documentation;
