import { type ClassValue, clsx } from './clsx';

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function getDifficultyColor(difficulty: 'beginner' | 'intermediate' | 'advanced'): string {
  const colors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };
  return colors[difficulty];
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    core: 'bg-blue-100 text-blue-800',
    rendering: 'bg-purple-100 text-purple-800',
    objects: 'bg-orange-100 text-orange-800',
    lighting: 'bg-yellow-100 text-yellow-800',
    geometry: 'bg-cyan-100 text-cyan-800',
    controls: 'bg-green-100 text-green-800',
    animation: 'bg-pink-100 text-pink-800',
  };
  return colors[category] ?? 'bg-gray-100 text-gray-800';
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
