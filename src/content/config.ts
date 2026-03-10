import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
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
