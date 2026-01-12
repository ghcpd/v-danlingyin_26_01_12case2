import { useMemo, useState } from 'react';
import { TutorialCard } from '../components/TutorialCard';
import { SectionHeader } from '../components/SectionHeader';
import { tutorials } from '../data/tutorials';
import { matchesQuery } from '../utils/filters';
import { Difficulty } from '../types/content';

const difficultyOptions: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced'];

export const TutorialsPage = (): JSX.Element => {
  const [difficulty, setDifficulty] = useState<Difficulty | 'All'>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return tutorials.filter((tutorial) => {
      const matchesDifficulty = difficulty === 'All' ? true : tutorial.difficulty === difficulty;
      const matchesSearch = matchesQuery(`${tutorial.title} ${tutorial.steps.map((s) => s.text).join(' ')}`, query);
      return matchesDifficulty && matchesSearch;
    });
  }, [difficulty, query]);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Tutorials"
        title="Step-by-step guides"
        description="Move through guided steps and copy ready-to-run snippets to get visuals on screen."
      />

      <div className="glass-panel flex flex-col gap-3 rounded-xl p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/70" htmlFor="tutorial-search">
            Search steps
          </label>
          <input
            id="tutorial-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find camera setup, rendering, lighting..."
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 focus:border-accent focus:outline-none md:w-72"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/70" htmlFor="difficulty-select">
            Difficulty
          </label>
          <select
            id="difficulty-select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty | 'All')}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-accent focus:outline-none"
          >
            <option value="All">All levels</option>
            {difficultyOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
};

export default TutorialsPage;
