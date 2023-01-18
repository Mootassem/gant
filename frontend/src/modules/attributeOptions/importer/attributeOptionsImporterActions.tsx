import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/attributeOptions/importer/attributeOptionsImporterSelectors';
import AttributeOptionsService from 'src/modules/attributeOptions/attributeOptionsService';
import fields from 'src/modules/attributeOptions/importer/attributeOptionsImporterFields';
import { i18n } from 'src/i18n';

const attributeOptionsImporterActions = importerActions(
  'ATTRIBUTEOPTIONS_IMPORTER',
  selectors,
  AttributeOptionsService.import,
  fields,
  i18n('entities.attributeOptions.importer.fileName'),
);

export default attributeOptionsImporterActions;