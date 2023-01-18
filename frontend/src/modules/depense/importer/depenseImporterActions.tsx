import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/depense/importer/depenseImporterSelectors';
import DepenseService from 'src/modules/depense/depenseService';
import fields from 'src/modules/depense/importer/depenseImporterFields';
import { i18n } from 'src/i18n';

const depenseImporterActions = importerActions(
  'DEPENSE_IMPORTER',
  selectors,
  DepenseService.import,
  fields,
  i18n('entities.depense.importer.fileName'),
);

export default depenseImporterActions;