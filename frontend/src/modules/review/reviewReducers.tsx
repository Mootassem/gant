import list from 'src/modules/review/list/reviewListReducers';
import form from 'src/modules/review/form/reviewFormReducers';
import view from 'src/modules/review/view/reviewViewReducers';
import destroy from 'src/modules/review/destroy/reviewDestroyReducers';
import importerReducer from 'src/modules/review/importer/reviewImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
