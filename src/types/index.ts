export interface DocConcept {
  id: string;
  title: string;
  description: string;
  codeSnippet: string;
  category: string;
}

export interface Tutorial {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  steps: TutorialStep[];
  description: string;
}

export interface TutorialStep {
  stepNumber: number;
  title: string;
  content: string;
  codeSnippet?: string;
}

export interface Example {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  codeSnippet: string;
  category: string;
}

export interface BasicConcept {
  id: string;
  title: string;
  content: string;
  diagram?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  topics: string[];
}
