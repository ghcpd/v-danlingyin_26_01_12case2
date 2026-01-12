interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ eyebrow, title, description, align = 'left' }: SectionHeaderProps): JSX.Element => (
  <div className={`space-y-2 ${align === 'center' ? 'text-center' : ''}`}>
    {eyebrow ? <p className="badge bg-white/10 text-accent">{eyebrow}</p> : null}
    <h2 className="font-display text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
    {description ? <p className="text-white/70 max-w-3xl">{description}</p> : null}
  </div>
);
