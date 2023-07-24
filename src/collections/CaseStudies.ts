import type { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'
import richText from '../fields/richText'
import largeBody from '../fields/richText/largeBody'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { MediaBlock } from '../blocks/Media'

export const CaseStudies: CollectionConfig = {
    slug: 'case-studies',
    admin: {
      useAsTitle: 'title',
      preview: doc => formatPreviewURL('case-studies', doc),
    },
    fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        richText({
          name: 'introContent',
          admin: {
            elements: ['h1', largeBody],
            leaves: ['underline'],
          },
        }),
        {
          name: 'featuredImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'layout',
          type: 'blocks',
          blocks: [
            MediaBlock,
          ],
        },
    ],
}