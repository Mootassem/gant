import list from 'src/modules/charge/list/chargeListReducers';
import form from 'src/modules/charge/form/chargeFormReducers';
import view from 'src/modules/charge/view/chargeViewReducers';
import destroy from 'src/modules/charge/destroy/chargeDestroyReducers';
import importerReducer from 'src/modules/charge/importer/chargeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
