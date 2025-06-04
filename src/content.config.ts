import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md, mdx}", base: "src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default("DPapey"),
      title: z.string(),
      description: z.string(),
      cover: image().optional(),
      coverAlt: z.string().default("blog Cover"),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()),
      featured: z.boolean().default(false),
      draft: z.boolean().default(true),
    }),
});

/*const gallery = defineCollection({
  loader: file("src/content/gallery/gallery.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      image: image(),
      alt: z.string(),
      date: z.coerce.date(),
      category: z.string(), //Defines the gallery it belongs
      tags: z.array(z.string()).optional(),
    }),
});*/

export const collections = { blog };
