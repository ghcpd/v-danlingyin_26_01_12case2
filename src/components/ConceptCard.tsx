import { Concept } from '../types/content';

interface ConceptCardProps {
  concept: Concept;
  isActive?: boolean;
}

export const ConceptCard = ({ concept, isActive }: ConceptCardProps): JSX.Element => (
  <article className={`glass-panel flex flex-col gap-3 rounded-xl p-4 transition ${isActive ? 'border-accent/40 shadow-glass' : ''}`}>
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-white">{concept.title}</h3>
      {isActive ? <span className="badge bg-accent/20 text-accent">Active</span> : null}
    </div>
    <p className="text-sm text-white/70">{concept.summary}</p>
    <pre className="code-block" aria-label={`${concept.title} code snippet`}>
      <code>{concept.snippet}</code>
    </pre>
  </article>
);
