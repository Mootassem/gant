import list from 'src/modules/trackOrder/list/trackOrderListReducers';
import form from 'src/modules/trackOrder/form/trackOrderFormReducers';
import view from 'src/modules/trackOrder/view/trackOrderViewReducers';
import destroy from 'src/modules/trackOrder/destroy/trackOrderDestroyReducers';
import importerReducer from 'src/modules/trackOrder/importer/trackOrderImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
