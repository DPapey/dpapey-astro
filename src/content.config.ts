import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "src/data/blog" }),
  schema: ({ image }) => z.object({
    author: z.string().default('DPapey'),
    title: z.string(),
    description: z.string(),
    cover: image(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    draft: z.boolean().default(true),


  })

})

export const collections = { blog };
