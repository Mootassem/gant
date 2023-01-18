import list from 'src/modules/edit/list/editListReducers';
import form from 'src/modules/edit/form/editFormReducers';
import view from 'src/modules/edit/view/editViewReducers';
import destroy from 'src/modules/edit/destroy/editDestroyReducers';
import importerReducer from 'src/modules/edit/importer/editImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
