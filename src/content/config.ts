import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('RADICA Team'),
    heroImage: z.string().optional(),
    category: z.enum([
      'Marketing Automation',
      'WhatsApp',
      'Email Marketing',
      'Case Study',
      'Industry Insights',
      'AI & Data'
    ]),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    // SEO & GenAI fields
    canonicalUrl: z.string().optional(),
    ogImage: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
