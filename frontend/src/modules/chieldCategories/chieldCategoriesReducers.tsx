import list from 'src/modules/chieldCategories/list/chieldCategoriesListReducers';
import form from 'src/modules/chieldCategories/form/chieldCategoriesFormReducers';
import view from 'src/modules/chieldCategories/view/chieldCategoriesViewReducers';
import destroy from 'src/modules/chieldCategories/destroy/chieldCategoriesDestroyReducers';
import importerReducer from 'src/modules/chieldCategories/importer/chieldCategoriesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
