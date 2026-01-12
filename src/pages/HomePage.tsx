import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SectionHeader } from '../components/SectionHeader';
import { ConceptCard } from '../components/ConceptCard';
import { TutorialCard } from '../components/TutorialCard';
import { ExampleCard } from '../components/ExampleCard';
import { LearningPathCard } from '../components/LearningPathCard';
import { concepts } from '../data/concepts';
import { tutorials } from '../data/tutorials';
import { examples } from '../data/examples';
import { learningPaths } from '../data/learningPaths';

export const HomePage = (): JSX.Element => (
  <div className="space-y-14">
    <Hero />

    <section id="docs" className="space-y-6">
      <SectionHeader
        eyebrow="Documentation"
        title="Core concepts you will keep reusing"
        description="Get crisp explanations of the Three.js building blocks before diving into code."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {concepts.slice(0, 4).map((concept) => (
          <ConceptCard key={concept.id} concept={concept} />
        ))}
      </div>
      <Link to="/docs" className="text-accent hover:text-accentDeep text-sm font-semibold">
        Explore the documentation →
      </Link>
    </section>

    <section id="tutorials" className="space-y-6">
      <SectionHeader
        eyebrow="Tutorials"
        title="Guided steps for your first render"
        description="Follow concise steps to go from zero to a lit, animated scene without guesswork."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {tutorials.slice(0, 2).map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>
      <Link to="/tutorials" className="text-accent hover:text-accentDeep text-sm font-semibold">
        View all tutorials →
      </Link>
    </section>

    <section id="examples" className="space-y-6">
      <SectionHeader
        eyebrow="Examples"
        title="See patterns you can copy"
        description="Use curated demos as a starting point for your own scenes."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {examples.map((example) => (
          <ExampleCard key={example.id} example={example} />
        ))}
      </div>
    </section>

    <section id="paths" className="space-y-6">
      <SectionHeader
        eyebrow="Learning Paths"
        title="Move with intention"
        description="Choose a track that matches your background and build up with purpose."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {learningPaths.map((path) => (
          <LearningPathCard key={path.id} path={path} />
        ))}
      </div>
    </section>
  </div>
);

export default HomePage;
