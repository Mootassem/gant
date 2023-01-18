import list from 'src/modules/typeCharge/list/typeChargeListReducers';
import form from 'src/modules/typeCharge/form/typeChargeFormReducers';
import view from 'src/modules/typeCharge/view/typeChargeViewReducers';
import destroy from 'src/modules/typeCharge/destroy/typeChargeDestroyReducers';
import importerReducer from 'src/modules/typeCharge/importer/typeChargeImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
