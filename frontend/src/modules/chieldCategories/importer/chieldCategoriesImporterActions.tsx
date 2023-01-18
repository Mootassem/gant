import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/chieldCategories/importer/chieldCategoriesImporterSelectors';
import ChieldCategoriesService from 'src/modules/chieldCategories/chieldCategoriesService';
import fields from 'src/modules/chieldCategories/importer/chieldCategoriesImporterFields';
import { i18n } from 'src/i18n';

const chieldCategoriesImporterActions = importerActions(
  'CHIELDCATEGORIES_IMPORTER',
  selectors,
  ChieldCategoriesService.import,
  fields,
  i18n('entities.chieldCategories.importer.fileName'),
);

export default chieldCategoriesImporterActions;