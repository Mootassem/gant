import list from 'src/modules/brands/list/brandsListReducers';
import form from 'src/modules/brands/form/brandsFormReducers';
import view from 'src/modules/brands/view/brandsViewReducers';
import destroy from 'src/modules/brands/destroy/brandsDestroyReducers';
import importerReducer from 'src/modules/brands/importer/brandsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
