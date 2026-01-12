export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Concept {
  id: string;
  title: string;
  summary: string;
  snippet: string;
}

export interface TutorialStep {
  id: string;
  text: string;
}

export interface Tutorial {
  id: string;
  title: string;
  difficulty: Difficulty;
  steps: TutorialStep[];
  snippet: string;
}

export interface ExampleItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  snippet: string;
  tags: string[];
}

export interface LearningPath {
  id: string;
  title: string;
  level: Difficulty;
  focus: string;
  items: string[];
}

export interface BasicTopic {
  id: string;
  title: string;
  description: string;
  diagramLabel: string;
}
