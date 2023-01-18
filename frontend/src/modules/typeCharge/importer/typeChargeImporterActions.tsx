import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/typeCharge/importer/typeChargeImporterSelectors';
import TypeChargeService from 'src/modules/typeCharge/typeChargeService';
import fields from 'src/modules/typeCharge/importer/typeChargeImporterFields';
import { i18n } from 'src/i18n';

const typeChargeImporterActions = importerActions(
  'TYPECHARGE_IMPORTER',
  selectors,
  TypeChargeService.import,
  fields,
  i18n('entities.typeCharge.importer.fileName'),
);

export default typeChargeImporterActions;