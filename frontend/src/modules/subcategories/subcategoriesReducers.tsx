import list from 'src/modules/subcategories/list/subcategoriesListReducers';
import form from 'src/modules/subcategories/form/subcategoriesFormReducers';
import view from 'src/modules/subcategories/view/subcategoriesViewReducers';
import destroy from 'src/modules/subcategories/destroy/subcategoriesDestroyReducers';
import importerReducer from 'src/modules/subcategories/importer/subcategoriesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
