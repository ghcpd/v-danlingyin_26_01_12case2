import { Link } from 'react-router-dom';
import { ExampleItem } from '../types/content';

interface ExampleCardProps {
  example: ExampleItem;
}

export const ExampleCard = ({ example }: ExampleCardProps): JSX.Element => (
  <Link
    to={`/examples/${example.id}`}
    className="glass-panel group flex flex-col gap-3 rounded-xl p-4 transition hover:border-accent/40 hover:shadow-glass"
  >
    <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center text-white/50 text-sm">
      {example.thumbnail ? <span>{example.thumbnail}</span> : <span>Thumbnail placeholder</span>}
    </div>
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="font-semibold text-white group-hover:text-accent">{example.title}</h3>
        <p className="text-sm text-white/70">{example.description}</p>
      </div>
      <span aria-hidden className="text-accent">→</span>
    </div>
    <div className="flex flex-wrap gap-2 text-xs text-white/60">
      {example.tags.map((tag) => (
        <span key={tag} className="badge bg-white/5 text-white/70">
          {tag}
        </span>
      ))}
    </div>
  </Link>
);
