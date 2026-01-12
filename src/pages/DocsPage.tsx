import { useMemo, useState } from 'react';
import { ConceptCard } from '../components/ConceptCard';
import { SectionHeader } from '../components/SectionHeader';
import { concepts } from '../data/concepts';
import { matchesQuery } from '../utils/filters';

export const DocsPage = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [activeId, setActiveId] = useState(concepts[0]?.id ?? '');

  const filtered = useMemo(
    () => concepts.filter((concept) => matchesQuery(concept.title + concept.summary, query)),
    [query]
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[220px,1fr]">
      <aside className="glass-panel h-fit rounded-xl p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">Concepts</p>
        <ul className="mt-4 space-y-2">
          {concepts.map((concept) => (
            <li key={concept.id}>
              <button
                className={`w-full text-left rounded-lg px-3 py-2 text-sm transition ${
                  activeId === concept.id ? 'bg-white/10 text-white' : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setActiveId(concept.id)}
              >
                {concept.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <section className="space-y-4">
        <SectionHeader
          eyebrow="Documentation"
          title="Core Three.js concepts"
          description="Skim friendly explanations and the smallest viable snippets to get each primitive working."
        />

        <div className="glass-panel flex flex-col gap-3 rounded-xl p-4">
          <label className="text-sm text-white/70" htmlFor="concept-search">
            Search concepts
          </label>
          <input
            id="concept-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search scene, camera, renderer..."
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 focus:border-accent focus:outline-none"
          />
          <p className="text-xs text-white/50">{filtered.length} items</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((concept) => (
            <ConceptCard key={concept.id} concept={concept} isActive={concept.id === activeId} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
