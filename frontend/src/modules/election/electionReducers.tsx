import list from 'src/modules/election/list/electionListReducers';
import form from 'src/modules/election/form/electionFormReducers';
import view from 'src/modules/election/view/electionViewReducers';
import destroy from 'src/modules/election/destroy/electionDestroyReducers';
import importerReducer from 'src/modules/election/importer/electionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
