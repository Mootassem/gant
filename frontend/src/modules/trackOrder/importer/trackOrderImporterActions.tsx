import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/trackOrder/importer/trackOrderImporterSelectors';
import TrackOrderService from 'src/modules/trackOrder/trackOrderService';
import fields from 'src/modules/trackOrder/importer/trackOrderImporterFields';
import { i18n } from 'src/i18n';

const trackOrderImporterActions = importerActions(
  'TRACKORDER_IMPORTER',
  selectors,
  TrackOrderService.import,
  fields,
  i18n('entities.trackOrder.importer.fileName'),
);

export default trackOrderImporterActions;