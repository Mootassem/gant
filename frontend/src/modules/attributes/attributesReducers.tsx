import list from 'src/modules/attributes/list/attributesListReducers';
import form from 'src/modules/attributes/form/attributesFormReducers';
import view from 'src/modules/attributes/view/attributesViewReducers';
import destroy from 'src/modules/attributes/destroy/attributesDestroyReducers';
import importerReducer from 'src/modules/attributes/importer/attributesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
