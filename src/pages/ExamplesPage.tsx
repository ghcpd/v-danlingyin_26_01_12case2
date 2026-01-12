import { useMemo, useState } from 'react';
import { ExampleCard } from '../components/ExampleCard';
import { SectionHeader } from '../components/SectionHeader';
import { examples } from '../data/examples';
import { matchesQuery } from '../utils/filters';

export const ExamplesPage = (): JSX.Element => {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('all');

  const availableTags = Array.from(new Set(examples.flatMap((example) => example.tags)));

  const filtered = useMemo(() => {
    return examples.filter((example) => {
      const tagMatch = tag === 'all' ? true : example.tags.includes(tag);
      const textMatch = matchesQuery(`${example.title} ${example.description}`, query);
      return tagMatch && textMatch;
    });
  }, [query, tag]);

  return (
    <div className="space-y-6">
      <SectionHeader
        eyebrow="Examples"
        title="Curated demos you can extend"
        description="Each card leads to a detail page with a live placeholder canvas and code snippet."
      />

      <div className="glass-panel flex flex-col gap-3 rounded-xl p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <label htmlFor="example-search" className="text-sm text-white/70">
            Search examples
          </label>
          <input
            id="example-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rotating cube, lighting, controls..."
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 focus:border-accent focus:outline-none md:w-72"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tag-filter" className="text-sm text-white/70">
            Filter by tag
          </label>
          <select
            id="tag-filter"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white focus:border-accent focus:outline-none"
          >
            <option value="all">All</option>
            {availableTags.map((availableTag) => (
              <option key={availableTag} value={availableTag}>
                {availableTag}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((example) => (
          <ExampleCard key={example.id} example={example} />
        ))}
      </div>
    </div>
  );
};

export default ExamplesPage;
