import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/group/importer/groupImporterSelectors';
import GroupService from 'src/modules/group/groupService';
import fields from 'src/modules/group/importer/groupImporterFields';
import { i18n } from 'src/i18n';

const groupImporterActions = importerActions(
  'GROUP_IMPORTER',
  selectors,
  GroupService.import,
  fields,
  i18n('entities.group.importer.fileName'),
);

export default groupImporterActions;