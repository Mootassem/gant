import list from 'src/modules/typeDepense/list/typeDepenseListReducers';
import form from 'src/modules/typeDepense/form/typeDepenseFormReducers';
import view from 'src/modules/typeDepense/view/typeDepenseViewReducers';
import destroy from 'src/modules/typeDepense/destroy/typeDepenseDestroyReducers';
import importerReducer from 'src/modules/typeDepense/importer/typeDepenseImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
