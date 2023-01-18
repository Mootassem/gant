import list from 'src/modules/attributeOptions/list/attributeOptionsListReducers';
import form from 'src/modules/attributeOptions/form/attributeOptionsFormReducers';
import view from 'src/modules/attributeOptions/view/attributeOptionsViewReducers';
import destroy from 'src/modules/attributeOptions/destroy/attributeOptionsDestroyReducers';
import importerReducer from 'src/modules/attributeOptions/importer/attributeOptionsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
