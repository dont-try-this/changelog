import { z } from 'astro:content';

const INTERNAL__DISPLAY_MAX_LENGTH = 24

const changelogCategorySchema = z.union([
    z.literal("UNDEFINED"),
    z.literal("VERSION"),
    z.literal("CHANGELOG"),
    z.literal("REACT_LIBRARY"),
])

const changelogTagSchema = z.object({
    category: changelogCategorySchema,
    display: z.string().max(INTERNAL__DISPLAY_MAX_LENGTH, `CONTENT DISPLAY: Content should be no longer than ${INTERNAL__DISPLAY_MAX_LENGTH} characters`),
})

export const changelogPageSchema = z.object({
    datecreated: z.coerce.date(),
    author: z.string(),
    title: z.string(),
    description: z.string(),
    tags: z.array(changelogTagSchema),
  })

  export type AppChangelogTag = z.infer<typeof changelogTagSchema>
  export type AppChangelogCategory = z.infer<typeof changelogCategorySchema>
  export type AppChangelogPage = z.infer<typeof changelogPageSchema>