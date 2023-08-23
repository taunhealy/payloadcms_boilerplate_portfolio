import type { CollectionConfig } from 'payload/types'
import { CaseStudiesHighlight } from '../blocks/CaseStudiesHighlight'
import { CaseStudyCards } from '../blocks/CaseStudyCards'
import { CardGrid } from '../blocks/CardGrid'
import { slugField } from '../fields/slug'

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
              required: false,
              blocks: [CaseStudiesHighlight, CaseStudyCards, CardGrid],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
}