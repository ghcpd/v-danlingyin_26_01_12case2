import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation, Footer } from './components';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const DocumentationPage = lazy(() =>
  import('./pages/DocumentationPage').then((m) => ({ default: m.DocumentationPage }))
);
const TutorialsPage = lazy(() =>
  import('./pages/TutorialsPage').then((m) => ({ default: m.TutorialsPage }))
);
const ExamplesPage = lazy(() =>
  import('./pages/ExamplesPage').then((m) => ({ default: m.ExamplesPage }))
);
const ExampleDetailPage = lazy(() =>
  import('./pages/ExampleDetailPage').then((m) => ({ default: m.ExampleDetailPage }))
);
const BasicsPage = lazy(() =>
  import('./pages/BasicsPage').then((m) => ({ default: m.BasicsPage }))
);

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-400">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Navigation />
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/tutorials" element={<TutorialsPage />} />
              <Route path="/examples" element={<ExamplesPage />} />
              <Route path="/examples/:id" element={<ExampleDetailPage />} />
              <Route path="/basics" element={<BasicsPage />} />
              <Route
                path="*"
                element={
                  <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-white mb-4">404</h1>
                      <p className="text-slate-400 mb-6">Page not found</p>
                      <a
                        href="/"
                        className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors inline-block"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                }
              />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
