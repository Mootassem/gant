import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/shippingservice/importer/shippingserviceImporterSelectors';
import ShippingserviceService from 'src/modules/shippingservice/shippingserviceService';
import fields from 'src/modules/shippingservice/importer/shippingserviceImporterFields';
import { i18n } from 'src/i18n';

const shippingserviceImporterActions = importerActions(
  'SHIPPINGSERVICE_IMPORTER',
  selectors,
  ShippingserviceService.import,
  fields,
  i18n('entities.shippingservice.importer.fileName'),
);

export default shippingserviceImporterActions;