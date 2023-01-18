import list from 'src/modules/depense/list/depenseListReducers';
import form from 'src/modules/depense/form/depenseFormReducers';
import view from 'src/modules/depense/view/depenseViewReducers';
import destroy from 'src/modules/depense/destroy/depenseDestroyReducers';
import importerReducer from 'src/modules/depense/importer/depenseImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
