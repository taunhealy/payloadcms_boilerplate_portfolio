import { CollectionConfig } from 'payload/types';

const Items: CollectionConfig = {
  slug: 'items',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
          
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'category',
      label: 'Portfolio Category',
      type: "relationship",
      relationTo: "portfolioCategories",
    },
  ],
  timestamps: false,
}

export default Items;