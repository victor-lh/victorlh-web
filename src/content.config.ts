import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    current: z.boolean().default(false),
    description: z.string(),
    tags: z.array(z.string()),
    sector: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { experience };
