import { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import CodeSnippet from '../components/CodeSnippet';
import Badge from '../components/Badge';
import { tutorials } from '../data/tutorials';

const Tutorials = () => {
  const [selectedTutorial, setSelectedTutorial] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const filteredTutorials = selectedDifficulty === 'All'
    ? tutorials
    : tutorials.filter(t => t.difficulty === selectedDifficulty);

  const activeTutorial = selectedTutorial
    ? tutorials.find(t => t.id === selectedTutorial)
    : null;

  const getBadgeVariant = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'beginner';
      case 'Intermediate': return 'intermediate';
      case 'Advanced': return 'advanced';
      default: return 'default';
    }
  };

  return (
    <Layout>
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tutorials</h1>
          <p className="text-xl text-green-100">
            Step-by-step guides to master Three.js from basics to advanced techniques
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {activeTutorial ? (
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedTutorial(null)}
              className="text-primary-600 hover:text-primary-700 mb-6 flex items-center"
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to tutorials
            </button>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <Badge 
                  text={activeTutorial.difficulty} 
                  variant={getBadgeVariant(activeTutorial.difficulty)}
                  className="mb-3"
                />
                <h2 className="text-3xl font-bold text-gray-800 mb-3">{activeTutorial.title}</h2>
                <p className="text-gray-600 text-lg">{activeTutorial.description}</p>
              </div>

              <div className="space-y-8">
                {activeTutorial.steps.map((step) => (
                  <div key={step.stepNumber} className="border-l-4 border-primary-500 pl-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mr-3">
                        {step.stepNumber}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{step.content}</p>
                    {step.codeSnippet && (
                      <CodeSnippet code={step.codeSnippet} language="javascript" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Tutorial Complete!
                </h4>
                <p className="text-green-700">
                  Great job completing this tutorial. Try experimenting with the code and explore related concepts in the documentation.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="flex flex-wrap gap-3">
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                      selectedDifficulty === difficulty
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map(tutorial => (
                <Card
                  key={tutorial.id}
                  title={tutorial.title}
                  description={tutorial.description}
                  onClick={() => setSelectedTutorial(tutorial.id)}
                >
                  <div className="mt-4 flex items-center justify-between">
                    <Badge 
                      text={tutorial.difficulty} 
                      variant={getBadgeVariant(tutorial.difficulty)}
                    />
                    <span className="text-sm text-gray-500">
                      {tutorial.steps.length} steps
                    </span>
                  </div>
                </Card>
              ))}
            </div>

            {filteredTutorials.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No tutorials found for this difficulty level.</p>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Tutorials;
