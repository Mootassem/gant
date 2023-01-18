import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/partner/importer/partnerImporterSelectors';
import PartnerService from 'src/modules/partner/partnerService';
import fields from 'src/modules/partner/importer/partnerImporterFields';
import { i18n } from 'src/i18n';

const partnerImporterActions = importerActions(
  'PARTNER_IMPORTER',
  selectors,
  PartnerService.import,
  fields,
  i18n('entities.partner.importer.fileName'),
);

export default partnerImporterActions;