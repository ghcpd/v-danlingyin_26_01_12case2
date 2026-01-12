import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, SearchInput, Tabs } from '../../components';
import { examplesData } from '../../data';
import { useSearch } from '../../hooks';
import { getCategoryColor, capitalize } from '../../utils';

const categoryTabs = [
  { id: 'all', label: 'All' },
  { id: 'geometry', label: 'Geometry' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'controls', label: 'Controls' },
  { id: 'animation', label: 'Animation' },
];

export function ExamplesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { searchTerm, setSearchTerm, filteredItems: searchFilteredItems } = useSearch(
    examplesData,
    ['title', 'description']
  );

  const filteredExamples = searchFilteredItems.filter((example) =>
    selectedCategory === 'all' ? true : example.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Examples</h1>
          <p className="text-slate-400">
            Interactive demos showcasing Three.js capabilities
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search examples..."
            className="sm:w-72"
          />
          <Tabs
            tabs={categoryTabs}
            activeTab={selectedCategory}
            onTabChange={setSelectedCategory}
          />
        </div>

        {/* Examples Grid */}
        {filteredExamples.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExamples.map((example) => (
              <Link key={example.id} to={`/examples/${example.id}`}>
                <Card
                  title={example.title}
                  description={example.description}
                  badge={capitalize(example.category)}
                  badgeColor={getCategoryColor(example.category)}
                  thumbnail={
                    <ExampleThumbnail type={example.id} />
                  }
                >
                  <div className="flex items-center text-primary-400 text-sm font-medium">
                    View Example
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400">No examples found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ExampleThumbnail({ type }: { type: string }) {
  const getIcon = () => {
    switch (type) {
      case 'rotating-cube':
        return (
          <svg className="w-16 h-16 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        );
      case 'basic-lighting':
        return (
          <svg className="w-16 h-16 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        );
      case 'orbit-controls':
        return (
          <svg className="w-16 h-16 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <ellipse cx="12" cy="12" rx="10" ry="4" />
            <ellipse cx="12" cy="12" rx="4" ry="10" />
          </svg>
        );
      case 'animated-particles':
        return (
          <svg className="w-16 h-16 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="6" r="1.5" />
            <circle cx="12" cy="4" r="1" />
            <circle cx="8" cy="12" r="2.5" />
            <circle cx="16" cy="14" r="1.5" />
            <circle cx="12" cy="18" r="2" />
            <circle cx="4" cy="16" r="1" />
            <circle cx="20" cy="18" r="1.5" />
          </svg>
        );
      case 'texture-mapping':
        return (
          <svg className="w-16 h-16 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <rect x="7" y="7" width="4" height="4" fill="currentColor" />
            <rect x="13" y="7" width="4" height="4" />
            <rect x="7" y="13" width="4" height="4" />
            <rect x="13" y="13" width="4" height="4" fill="currentColor" />
          </svg>
        );
      case 'wireframe-geometry':
        return (
          <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
            <line x1="12" y1="2" x2="12" y2="22" />
            <line x1="2" y1="8.5" x2="22" y2="15.5" />
            <line x1="22" y1="8.5" x2="2" y2="15.5" />
          </svg>
        );
      default:
        return (
          <svg className="w-16 h-16 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12,2 22,20 2,20" />
          </svg>
        );
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-900/50">
      {getIcon()}
    </div>
  );
}
