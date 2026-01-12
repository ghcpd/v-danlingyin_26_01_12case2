import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { examples } from '../data/examples';
import { useState } from 'react';

const Examples = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(examples.map(ex => ex.category)))];
  
  const filteredExamples = selectedCategory === 'All'
    ? examples
    : examples.filter(ex => ex.category === selectedCategory);

  return (
    <Layout>
      <div className="bg-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Examples</h1>
          <p className="text-xl text-purple-100">
            Interactive demos showcasing Three.js capabilities with full source code
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExamples.map(example => (
            <Card
              key={example.id}
              title={example.title}
              description={example.description}
              onClick={() => navigate(`/examples/${example.id}`)}
            >
              <div className="mt-4">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-600 font-semibold">{example.category}</span>
                  <span className="text-sm text-primary-600 font-semibold">View Demo →</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredExamples.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No examples found in this category.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Examples;
