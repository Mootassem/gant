import list from 'src/modules/entree/list/entreeListReducers';
import form from 'src/modules/entree/form/entreeFormReducers';
import view from 'src/modules/entree/view/entreeViewReducers';
import destroy from 'src/modules/entree/destroy/entreeDestroyReducers';
import importerReducer from 'src/modules/entree/importer/entreeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
