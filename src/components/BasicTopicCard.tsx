import { BasicTopic } from '../types/content';

interface BasicTopicCardProps {
  topic: BasicTopic;
}

export const BasicTopicCard = ({ topic }: BasicTopicCardProps): JSX.Element => (
  <article className="glass-panel flex flex-col gap-3 rounded-xl p-4">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-white">{topic.title}</h3>
      <span className="badge bg-white/5 text-white/70">3D basics</span>
    </div>
    <p className="text-sm text-white/70">{topic.description}</p>
    <div className="rounded-lg border border-dashed border-white/20 bg-white/5 px-4 py-6 text-center text-xs uppercase tracking-[0.3em] text-white/50">
      {topic.diagramLabel}
    </div>
  </article>
);
