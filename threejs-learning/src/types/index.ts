export interface DocConcept {
  id: string;
  title: string;
  description: string;
  codeSnippet: string;
  category: 'core' | 'rendering' | 'objects' | 'lighting';
}

export interface Tutorial {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  steps: TutorialStep[];
}

export interface TutorialStep {
  id: string;
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
  category: 'geometry' | 'lighting' | 'controls' | 'animation';
}

export interface LearningPath {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate';
  description: string;
  topics: string[];
}

export interface BasicsSection {
  id: string;
  title: string;
  content: string;
  diagram?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}
