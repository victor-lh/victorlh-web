export type Level = 'expert' | 'advanced' | 'intermediate';

export interface Tech {
  name: string;
  level: Level;
  category: 'backend' | 'infra' | 'mobile' | 'db';
}

export const stack: Tech[] = [
  { name: 'Java 17',            level: 'expert',       category: 'backend' },
  { name: 'Spring Boot',        level: 'expert',       category: 'backend' },
  { name: 'Microservicios/EDA', level: 'expert',       category: 'backend' },
  { name: 'Kubernetes/OpenShift', level: 'advanced',   category: 'infra' },
  { name: 'Docker',             level: 'advanced',     category: 'infra' },
  { name: 'GCP',                level: 'advanced',     category: 'infra' },
  { name: 'Kotlin',             level: 'advanced',     category: 'mobile' },
  { name: 'Android',            level: 'advanced',     category: 'mobile' },
  { name: 'Node.js',            level: 'advanced',     category: 'backend' },
  { name: 'RabbitMQ',           level: 'advanced',     category: 'infra' },
  { name: 'Elasticsearch',      level: 'advanced',     category: 'db' },
  { name: 'MongoDB',            level: 'advanced',     category: 'db' },
  { name: 'PostgreSQL',         level: 'advanced',     category: 'db' },
  { name: 'Oracle',             level: 'advanced',     category: 'db' },
];
