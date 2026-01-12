import { Link } from 'react-router-dom';
import { Button, Card } from '../../components';
import { ThreeCanvas } from '../../three';
import { learningPaths } from '../../data';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Learn{' '}
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Three.js
                </span>{' '}
                the Right Way
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                A comprehensive learning platform for developers exploring 3D web development.
                From basic concepts to advanced techniques, master Three.js step by step.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/tutorials">
                  <Button size="lg">Get Started</Button>
                </Link>
                <Link to="/documentation">
                  <Button variant="secondary" size="lg">
                    View Documentation
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <ThreeCanvas type="cube" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Entry Points */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Explore the Library</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Choose your learning path and dive into the world of 3D web development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Documentation"
              description="Core Three.js concepts explained with code examples"
              href="/documentation"
              thumbnail={
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              }
            />

            <Card
              title="Tutorials"
              description="Step-by-step guides to build your skills"
              href="/tutorials"
              thumbnail={
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              }
            />

            <Card
              title="Examples"
              description="Interactive demos and code samples"
              href="/examples"
              thumbnail={
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              }
            />

            <Card
              title="3D Basics"
              description="Foundational concepts of 3D graphics"
              href="/basics"
              thumbnail={
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Learning Paths</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Structured paths to guide your Three.js journey from beginner to expert
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {learningPaths.map((path) => (
              <div
                key={path.id}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-primary-500 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      path.level === 'beginner'
                        ? 'bg-green-900/50 text-green-400'
                        : 'bg-yellow-900/50 text-yellow-400'
                    }`}
                  >
                    {path.level.charAt(0).toUpperCase() + path.level.slice(1)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{path.title}</h3>
                <p className="text-slate-400 mb-4">{path.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-300">Topics covered:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {path.topics.map((topic, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-400">
                        <svg
                          className="w-4 h-4 text-primary-400 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/tutorials"
                  className="inline-flex items-center gap-2 mt-6 text-primary-400 hover:text-primary-300 font-medium"
                >
                  Start Learning
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Learn Here?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A learning experience designed specifically for developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Code-First Learning</h3>
              <p className="text-slate-400">
                Every concept is accompanied by practical code examples you can learn from and build upon.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Progressive Structure</h3>
              <p className="text-slate-400">
                Start from basics and progressively advance to more complex topics at your own pace.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Interactive Examples</h3>
              <p className="text-slate-400">
                See concepts in action with real Three.js demos and visualizations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
