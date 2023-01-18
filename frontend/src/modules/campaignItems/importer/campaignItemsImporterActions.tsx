import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/campaignItems/importer/campaignItemsImporterSelectors';
import CampaignItemsService from 'src/modules/campaignItems/campaignItemsService';
import fields from 'src/modules/campaignItems/importer/campaignItemsImporterFields';
import { i18n } from 'src/i18n';

const campaignItemsImporterActions = importerActions(
  'CAMPAIGNITEMS_IMPORTER',
  selectors,
  CampaignItemsService.import,
  fields,
  i18n('entities.campaignItems.importer.fileName'),
);

export default campaignItemsImporterActions;