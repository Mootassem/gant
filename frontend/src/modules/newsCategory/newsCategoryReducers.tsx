import list from 'src/modules/newsCategory/list/newsCategoryListReducers';
import form from 'src/modules/newsCategory/form/newsCategoryFormReducers';
import view from 'src/modules/newsCategory/view/newsCategoryViewReducers';
import destroy from 'src/modules/newsCategory/destroy/newsCategoryDestroyReducers';
import importerReducer from 'src/modules/newsCategory/importer/newsCategoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
