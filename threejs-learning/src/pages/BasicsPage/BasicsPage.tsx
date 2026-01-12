import { useState } from 'react';
import { Sidebar } from '../../components';
import { basicsData } from '../../data';

export function BasicsPage() {
  const [activeSection, setActiveSection] = useState(basicsData[0]?.id ?? '');

  const sidebarItems = basicsData.map((section) => ({
    id: section.id,
    label: section.title,
  }));

  const currentSection = basicsData.find((section) => section.id === activeSection);

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">3D Basics</h1>
          <p className="text-slate-400">
            Foundational concepts for understanding 3D graphics and Three.js
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar
            items={sidebarItems}
            activeItem={activeSection}
            onItemClick={setActiveSection}
            title="Topics"
          />

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {currentSection ? (
              <article className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{currentSection.title}</h2>

                {/* Content */}
                <div className="prose prose-invert max-w-none">
                  {currentSection.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('```')) {
                      const code = paragraph.replace(/```\w*\n?/g, '');
                      return (
                        <pre
                          key={index}
                          className="bg-slate-950 border border-slate-800 rounded-lg p-4 overflow-x-auto"
                        >
                          <code className="text-sm text-slate-300 font-mono">{code}</code>
                        </pre>
                      );
                    }

                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return (
                        <h3 key={index} className="text-lg font-semibold text-white mt-6 mb-3">
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }

                    // Handle inline bold and code
                    const formattedParagraph = paragraph
                      .split(/(\*\*[^*]+\*\*|`[^`]+`)/)
                      .map((part, partIndex) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={partIndex} className="text-white font-semibold">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        if (part.startsWith('`') && part.endsWith('`')) {
                          return (
                            <code
                              key={partIndex}
                              className="bg-slate-800 px-1.5 py-0.5 rounded text-primary-400 text-sm"
                            >
                              {part.slice(1, -1)}
                            </code>
                          );
                        }
                        return part;
                      });

                    return (
                      <p key={index} className="text-slate-300 leading-relaxed mb-4">
                        {formattedParagraph}
                      </p>
                    );
                  })}
                </div>

                {/* Diagram */}
                {currentSection.diagram && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Diagram</h3>
                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-6">
                      <pre className="text-slate-400 font-mono text-sm whitespace-pre overflow-x-auto">
                        {currentSection.diagram}
                      </pre>
                    </div>
                  </div>
                )}
              </article>
            ) : (
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
                <p className="text-slate-400">
                  Select a topic from the sidebar to learn more.
                </p>
              </div>
            )}

            {/* Quick Navigation for Mobile */}
            <nav className="lg:hidden mt-6" aria-label="Topic navigation">
              <h3 className="text-sm font-medium text-slate-400 mb-3">All Topics</h3>
              <div className="flex flex-wrap gap-2">
                {basicsData.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {section.title}
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
