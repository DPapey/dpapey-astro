import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "src/content/blog" }),
  schema: ({ image }) => z.object({
    author: z.string().default('DPapey'),
    title: z.string(),
    description: z.string(),
    cover: image(),
    coverAlt: z.string().default("blog Cover"),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),
  })

})

export const collections = { blog };
