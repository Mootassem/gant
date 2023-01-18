import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/edit/importer/editImporterSelectors';
import EditService from 'src/modules/edit/editService';
import fields from 'src/modules/edit/importer/editImporterFields';
import { i18n } from 'src/i18n';

const editImporterActions = importerActions(
  'EDIT_IMPORTER',
  selectors,
  EditService.import,
  fields,
  i18n('entities.edit.importer.fileName'),
);

export default editImporterActions;