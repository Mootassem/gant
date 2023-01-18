import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/membership/importer/membershipImporterSelectors';
import MembershipService from 'src/modules/membership/membershipService';
import fields from 'src/modules/membership/importer/membershipImporterFields';
import { i18n } from 'src/i18n';

const membershipImporterActions = importerActions(
  'MEMBERSHIP_IMPORTER',
  selectors,
  MembershipService.import,
  fields,
  i18n('entities.membership.importer.fileName'),
);

export default membershipImporterActions;