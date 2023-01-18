import list from 'src/modules/partner/list/partnerListReducers';
import form from 'src/modules/partner/form/partnerFormReducers';
import view from 'src/modules/partner/view/partnerViewReducers';
import destroy from 'src/modules/partner/destroy/partnerDestroyReducers';
import importerReducer from 'src/modules/partner/importer/partnerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
