import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/entree/importer/entreeImporterSelectors';
import EntreeService from 'src/modules/entree/entreeService';
import fields from 'src/modules/entree/importer/entreeImporterFields';
import { i18n } from 'src/i18n';

const entreeImporterActions = importerActions(
  'ENTREE_IMPORTER',
  selectors,
  EntreeService.import,
  fields,
  i18n('entities.entree.importer.fileName'),
);

export default entreeImporterActions;