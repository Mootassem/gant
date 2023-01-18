import list from 'src/modules/shippingservice/list/shippingserviceListReducers';
import form from 'src/modules/shippingservice/form/shippingserviceFormReducers';
import view from 'src/modules/shippingservice/view/shippingserviceViewReducers';
import destroy from 'src/modules/shippingservice/destroy/shippingserviceDestroyReducers';
import importerReducer from 'src/modules/shippingservice/importer/shippingserviceImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
