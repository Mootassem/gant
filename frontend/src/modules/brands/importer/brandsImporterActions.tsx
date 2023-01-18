import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/brands/importer/brandsImporterSelectors';
import BrandsService from 'src/modules/brands/brandsService';
import fields from 'src/modules/brands/importer/brandsImporterFields';
import { i18n } from 'src/i18n';

const brandsImporterActions = importerActions(
  'BRANDS_IMPORTER',
  selectors,
  BrandsService.import,
  fields,
  i18n('entities.brands.importer.fileName'),
);

export default brandsImporterActions;