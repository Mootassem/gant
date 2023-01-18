import list from 'src/modules/cart/list/cartListReducers';
import form from 'src/modules/cart/form/cartFormReducers';
import view from 'src/modules/cart/view/cartViewReducers';
import destroy from 'src/modules/cart/destroy/cartDestroyReducers';
import importerReducer from 'src/modules/cart/importer/cartImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
