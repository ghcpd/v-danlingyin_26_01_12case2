import { useState } from 'react';
import { Card, SearchInput, Tabs, CodeBlock } from '../../components';
import { tutorialsData } from '../../data';
import { useSearch } from '../../hooks';
import { getDifficultyColor, capitalize } from '../../utils';
import type { Tutorial } from '../../types';

const difficultyTabs = [
  { id: 'all', label: 'All' },
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' },
];

export function TutorialsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const { searchTerm, setSearchTerm, filteredItems: searchFilteredItems } = useSearch(
    tutorialsData,
    ['title', 'description']
  );

  const filteredTutorials = searchFilteredItems.filter((tutorial) =>
    selectedDifficulty === 'all' ? true : tutorial.difficulty === selectedDifficulty
  );

  if (selectedTutorial) {
    return (
      <div className="min-h-screen bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => setSelectedTutorial(null)}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tutorials
          </button>

          {/* Tutorial Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedTutorial.difficulty)}`}>
                {capitalize(selectedTutorial.difficulty)}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">{selectedTutorial.title}</h1>
            <p className="text-slate-300 text-lg">{selectedTutorial.description}</p>
          </header>

          {/* Tutorial Steps */}
          <div className="space-y-8">
            {selectedTutorial.steps.map((step, index) => (
              <article
                key={step.id}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </span>
                  <h2 className="text-xl font-semibold text-white">{step.title}</h2>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">{step.content}</p>
                {step.codeSnippet && (
                  <CodeBlock code={step.codeSnippet} language="typescript" />
                )}
              </article>
            ))}
          </div>

          {/* Navigation Footer */}
          <div className="mt-12 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-center">
              Congratulations on completing this tutorial! 🎉
            </p>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={() => setSelectedTutorial(null)}
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                Explore More Tutorials
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Tutorials</h1>
          <p className="text-slate-400">
            Step-by-step guides to help you master Three.js
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search tutorials..."
            className="sm:w-72"
          />
          <Tabs
            tabs={difficultyTabs}
            activeTab={selectedDifficulty}
            onTabChange={setSelectedDifficulty}
          />
        </div>

        {/* Tutorials Grid */}
        {filteredTutorials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <Card
                key={tutorial.id}
                title={tutorial.title}
                description={tutorial.description}
                badge={capitalize(tutorial.difficulty)}
                badgeColor={getDifficultyColor(tutorial.difficulty)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    {tutorial.steps.length} steps
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedTutorial(tutorial)}
                    className="text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center gap-1"
                  >
                    Start Tutorial
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400">No tutorials found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
