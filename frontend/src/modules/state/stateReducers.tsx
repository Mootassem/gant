import list from 'src/modules/state/list/stateListReducers';
import form from 'src/modules/state/form/stateFormReducers';
import view from 'src/modules/state/view/stateViewReducers';
import destroy from 'src/modules/state/destroy/stateDestroyReducers';
import importerReducer from 'src/modules/state/importer/stateImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
