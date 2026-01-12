import { useState } from 'react';
import { Sidebar, CodeBlock, SearchInput } from '../../components';
import { documentationData } from '../../data';
import { useSearch } from '../../hooks';
import { getCategoryColor, capitalize } from '../../utils';

export function DocumentationPage() {
  const [activeConcept, setActiveConcept] = useState(documentationData[0]?.id ?? '');
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    documentationData,
    ['title', 'description']
  );

  const sidebarItems = filteredItems.map((doc) => ({
    id: doc.id,
    label: doc.title,
  }));

  const currentDoc = documentationData.find((doc) => doc.id === activeConcept);

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Documentation</h1>
          <p className="text-slate-400">
            Core Three.js concepts explained with practical code examples
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="mb-4">
              <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="Search concepts..."
              />
            </div>
            <Sidebar
              items={sidebarItems}
              activeItem={activeConcept}
              onItemClick={setActiveConcept}
              title="Concepts"
            />
          </div>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {currentDoc ? (
              <article className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 lg:p-8">
                <header className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl font-bold text-white">{currentDoc.title}</h2>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(
                        currentDoc.category
                      )}`}
                    >
                      {capitalize(currentDoc.category)}
                    </span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{currentDoc.description}</p>
                </header>

                <section>
                  <h3 className="text-lg font-semibold text-white mb-4">Example Code</h3>
                  <CodeBlock code={currentDoc.codeSnippet} language="typescript" />
                </section>
              </article>
            ) : (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
                <p className="text-slate-400">
                  {searchTerm
                    ? 'No concepts found matching your search.'
                    : 'Select a concept from the sidebar to view its documentation.'}
                </p>
              </div>
            )}

            {/* Quick Navigation for Mobile */}
            <nav className="lg:hidden mt-6" aria-label="Concept navigation">
              <h3 className="text-sm font-medium text-slate-400 mb-3">All Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {documentationData.map((doc) => (
                  <button
                    key={doc.id}
                    type="button"
                    onClick={() => setActiveConcept(doc.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      activeConcept === doc.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {doc.title}
                  </button>
                ))}
              </div>
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
}
