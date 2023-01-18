import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/objectif/importer/objectifImporterSelectors';
import ObjectifService from 'src/modules/objectif/objectifService';
import fields from 'src/modules/objectif/importer/objectifImporterFields';
import { i18n } from 'src/i18n';

const objectifImporterActions = importerActions(
  'OBJECTIF_IMPORTER',
  selectors,
  ObjectifService.import,
  fields,
  i18n('entities.objectif.importer.fileName'),
);

export default objectifImporterActions;