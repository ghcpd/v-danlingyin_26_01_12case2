export const Footer = (): JSX.Element => (
  <footer className="border-t border-white/10 bg-midnight/80 backdrop-blur">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-white/60 lg:px-6 lg:flex-row lg:items-center lg:justify-between">
      <p>Three.js Knowledge Library — learn the core, build with confidence.</p>
      <div className="flex gap-4">
        <a className="hover:text-white" href="#docs">Docs</a>
        <a className="hover:text-white" href="#tutorials">Tutorials</a>
        <a className="hover:text-white" href="#examples">Examples</a>
        <a className="hover:text-white" href="#basics">3D Basics</a>
      </div>
    </div>
  </footer>
);
