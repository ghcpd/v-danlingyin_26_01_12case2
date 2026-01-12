import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { useScrollToTop } from './hooks/useScrollToTop';

const HomePage = lazy(() => import('./pages/HomePage'));
const DocsPage = lazy(() => import('./pages/DocsPage'));
const TutorialsPage = lazy(() => import('./pages/TutorialsPage'));
const ExamplesPage = lazy(() => import('./pages/ExamplesPage'));
const ExampleDetailPage = lazy(() => import('./pages/ExampleDetailPage'));
const BasicsPage = lazy(() => import('./pages/BasicsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const PageLoader = () => (
  <div className="text-white/80">Loading...</div>
);

const App = (): JSX.Element => {
  useScrollToTop();

  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/examples/:id" element={<ExampleDetailPage />} />
          <Route path="/basics" element={<BasicsPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
