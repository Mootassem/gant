import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/attributes/importer/attributesImporterSelectors';
import AttributesService from 'src/modules/attributes/attributesService';
import fields from 'src/modules/attributes/importer/attributesImporterFields';
import { i18n } from 'src/i18n';

const attributesImporterActions = importerActions(
  'ATTRIBUTES_IMPORTER',
  selectors,
  AttributesService.import,
  fields,
  i18n('entities.attributes.importer.fileName'),
);

export default attributesImporterActions;