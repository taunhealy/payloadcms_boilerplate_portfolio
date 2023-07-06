import { CollectionConfig } from 'payload/types';

const PortfolioCategories: CollectionConfig = {
  slug: 'portfolioCategories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Portfolio Category',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default PortfolioCategories;