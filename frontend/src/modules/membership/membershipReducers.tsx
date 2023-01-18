import list from 'src/modules/membership/list/membershipListReducers';
import form from 'src/modules/membership/form/membershipFormReducers';
import view from 'src/modules/membership/view/membershipViewReducers';
import destroy from 'src/modules/membership/destroy/membershipDestroyReducers';
import importerReducer from 'src/modules/membership/importer/membershipImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
