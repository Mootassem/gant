import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/typeDepense/importer/typeDepenseImporterSelectors';
import TypeDepenseService from 'src/modules/typeDepense/typeDepenseService';
import fields from 'src/modules/typeDepense/importer/typeDepenseImporterFields';
import { i18n } from 'src/i18n';

const typeDepenseImporterActions = importerActions(
  'TYPEDEPENSE_IMPORTER',
  selectors,
  TypeDepenseService.import,
  fields,
  i18n('entities.typeDepense.importer.fileName'),
);

export default typeDepenseImporterActions;