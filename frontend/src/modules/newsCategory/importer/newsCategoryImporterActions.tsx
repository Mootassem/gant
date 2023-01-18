import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/newsCategory/importer/newsCategoryImporterSelectors';
import NewsCategoryService from 'src/modules/newsCategory/newsCategoryService';
import fields from 'src/modules/newsCategory/importer/newsCategoryImporterFields';
import { i18n } from 'src/i18n';

const newsCategoryImporterActions = importerActions(
  'NEWSCATEGORY_IMPORTER',
  selectors,
  NewsCategoryService.import,
  fields,
  i18n('entities.newsCategory.importer.fileName'),
);

export default newsCategoryImporterActions;