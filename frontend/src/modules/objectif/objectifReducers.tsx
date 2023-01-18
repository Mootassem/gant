import list from 'src/modules/objectif/list/objectifListReducers';
import form from 'src/modules/objectif/form/objectifFormReducers';
import view from 'src/modules/objectif/view/objectifViewReducers';
import destroy from 'src/modules/objectif/destroy/objectifDestroyReducers';
import importerReducer from 'src/modules/objectif/importer/objectifImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
