import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/charge/importer/chargeImporterSelectors';
import ChargeService from 'src/modules/charge/chargeService';
import fields from 'src/modules/charge/importer/chargeImporterFields';
import { i18n } from 'src/i18n';

const chargeImporterActions = importerActions(
  'CHARGE_IMPORTER',
  selectors,
  ChargeService.import,
  fields,
  i18n('entities.charge.importer.fileName'),
);

export default chargeImporterActions;