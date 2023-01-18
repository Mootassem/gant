import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/subcategories/importer/subcategoriesImporterSelectors';
import SubcategoriesService from 'src/modules/subcategories/subcategoriesService';
import fields from 'src/modules/subcategories/importer/subcategoriesImporterFields';
import { i18n } from 'src/i18n';

const subcategoriesImporterActions = importerActions(
  'SUBCATEGORIES_IMPORTER',
  selectors,
  SubcategoriesService.import,
  fields,
  i18n('entities.subcategories.importer.fileName'),
);

export default subcategoriesImporterActions;