import { buildConfig } from 'payload/config';
import path from 'path';
import PortfolioCategories from './collections/PortfolioCategories';
import Tags from './collections/Tags';
import Items from './collections/Items';
import { Footer } from './globals/Footer';
import MegaMenu from './globals/MegaMenu';
import { Pages } from './collections/Pages';
import { CaseStudies } from './collections/CaseStudies';
import { Media } from './collections/Media';

export default buildConfig({
  serverURL: 'http://localhost:4000',
  collections: [
        PortfolioCategories,
        Tags,
        Items,
        Pages,
        CaseStudies,
        Media,
     ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  globals: [Footer, MegaMenu],
});
