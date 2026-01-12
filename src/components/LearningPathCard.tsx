import { LearningPath } from '../types/content';

interface LearningPathCardProps {
  path: LearningPath;
}

export const LearningPathCard = ({ path }: LearningPathCardProps): JSX.Element => (
  <article className="glass-panel flex flex-col gap-3 rounded-xl p-5">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-white">{path.title}</h3>
      <span className="badge bg-accent/20 text-accent">{path.level}</span>
    </div>
    <p className="text-sm text-white/70">{path.focus}</p>
    <ul className="space-y-1 text-sm text-white/80">
      {path.items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </article>
);
