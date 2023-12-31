import type { Block } from 'payload/types'

import { blockFields } from '../../fields/blockFields'
import richText from '../../fields/richText'
import { CaseStudies } from '../../collections/CaseStudies'

export const CaseStudyCards: Block = {
  slug: 'caseStudyCards',
  labels: {
    singular: 'Case Study Cards',
    plural: 'Case Study Cards',
  },
  fields: [
    blockFields({
      name: 'caseStudyCardFields',
      fields: [
        {
          name: 'cards',
          type: 'array',
          fields: [
            richText(),
            {
              name: 'caseStudy',
              type: 'relationship',
              relationTo: 'case-studies',
              required: true,
            },
          ],
        },
      ],
    }),
  ],
}
