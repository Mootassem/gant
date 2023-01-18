import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/state/importer/stateImporterSelectors';
import StateService from 'src/modules/state/stateService';
import fields from 'src/modules/state/importer/stateImporterFields';
import { i18n } from 'src/i18n';

const stateImporterActions = importerActions(
  'STATE_IMPORTER',
  selectors,
  StateService.import,
  fields,
  i18n('entities.state.importer.fileName'),
);

export default stateImporterActions;