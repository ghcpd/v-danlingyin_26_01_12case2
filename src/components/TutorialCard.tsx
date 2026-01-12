import { Tutorial } from '../types/content';

interface TutorialCardProps {
  tutorial: Tutorial;
}

export const TutorialCard = ({ tutorial }: TutorialCardProps): JSX.Element => (
  <article className="glass-panel flex flex-col gap-4 rounded-xl p-5">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-white">{tutorial.title}</h3>
      <span className="badge bg-white/5 text-white/80">{tutorial.difficulty}</span>
    </div>
    <ul className="space-y-2 text-sm text-white/70">
      {tutorial.steps.map((step) => (
        <li key={step.id} className="flex gap-2">
          <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
          <span>{step.text}</span>
        </li>
      ))}
    </ul>
    <pre className="code-block" aria-label={`${tutorial.title} code snippet`}>
      <code>{tutorial.snippet}</code>
    </pre>
  </article>
);
