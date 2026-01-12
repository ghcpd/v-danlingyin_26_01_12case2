import { Link } from 'react-router-dom';

export const NotFoundPage = (): JSX.Element => (
  <div className="space-y-4 text-white">
    <p className="text-2xl font-semibold">Page not found</p>
    <p className="text-white/70">The page you are looking for does not exist.</p>
    <Link to="/" className="text-accent hover:text-accentDeep font-semibold">
      Go home
    </Link>
  </div>
);

export default NotFoundPage;
