import { Link } from 'react-router-dom';

export const Hero = (): JSX.Element => (
  <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-accent/10 p-8 lg:p-12 shadow-glass">
    <div className="absolute inset-0 grid-background opacity-30" aria-hidden="true" />
    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="max-w-2xl space-y-4">
        <div className="badge bg-white/10 text-accent">Learn Three.js faster</div>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
          Build intuition for 3D on the web
        </h1>
        <p className="text-lg text-white/80">
          Structured docs, beginner-friendly tutorials, and curated examples to help you ship 3D experiences with Three.js.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/tutorials"
            className="rounded-lg bg-accent px-4 py-2 font-semibold text-midnight shadow-glass hover:bg-accentDeep transition"
          >
            Start with tutorials
          </Link>
          <Link
            to="/examples"
            className="rounded-lg border border-white/20 px-4 py-2 font-semibold text-white hover:border-accent/60"
          >
            Browse examples
          </Link>
        </div>
      </div>
      <div className="glass-panel relative mt-6 grid aspect-square w-full max-w-md place-items-center overflow-hidden rounded-2xl lg:mt-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,245,160,0.2),transparent_40%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(0,194,255,0.2),transparent_35%)]" aria-hidden="true" />
        <div className="relative text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">Three.js flow</p>
          <h2 className="mt-4 font-display text-2xl text-white">Scene → Camera → Renderer → Mesh</h2>
          <p className="mt-2 text-white/70 text-sm">Everything you build is a remix of these primitives.</p>
        </div>
      </div>
    </div>
  </section>
);
