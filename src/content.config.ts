import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { changelogPageSchema } from './validation/content.schema';

const changelog = defineCollection({
  // Load data from Markdown files on disk
  loader: glob({ pattern: "**/*.(md|mdx)", base: "./src/data/changelog" }),
  schema: changelogPageSchema,
});

export const collections = { changelog }
