import type { CollectionConfig } from 'payload/types'
import { BlogContent } from '../blocks/BlogContent'
import { BlogMarkdown } from '../blocks/BlogMarkdown'
import { CaseStudiesHighlight } from '../blocks/CaseStudiesHighlight'
import { CaseStudyCards } from '../blocks/CaseStudyCards'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [BlogContent, BlogMarkdown, CaseStudiesHighlight, CaseStudyCards],
            },
          ],
        },
      ],
    },
  ],
}