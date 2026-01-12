import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Documentation = lazy(() => import('./pages/Documentation'));
const Tutorials = lazy(() => import('./pages/Tutorials'));
const Examples = lazy(() => import('./pages/Examples'));
const ExampleDetail = lazy(() => import('./pages/ExampleDetail'));
const ThreeDBasics = lazy(() => import('./pages/ThreeDBasics'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/examples/:id" element={<ExampleDetail />} />
          <Route path="/3d-basics" element={<ThreeDBasics />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
