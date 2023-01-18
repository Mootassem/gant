import list from 'src/modules/formule/list/formuleListReducers';
import form from 'src/modules/formule/form/formuleFormReducers';
import view from 'src/modules/formule/view/formuleViewReducers';
import destroy from 'src/modules/formule/destroy/formuleDestroyReducers';
import importerReducer from 'src/modules/formule/importer/formuleImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
