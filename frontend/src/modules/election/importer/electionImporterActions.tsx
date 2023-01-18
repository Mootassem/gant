import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/election/importer/electionImporterSelectors';
import ElectionService from 'src/modules/election/electionService';
import fields from 'src/modules/election/importer/electionImporterFields';
import { i18n } from 'src/i18n';

const electionImporterActions = importerActions(
  'ELECTION_IMPORTER',
  selectors,
  ElectionService.import,
  fields,
  i18n('entities.election.importer.fileName'),
);

export default electionImporterActions;