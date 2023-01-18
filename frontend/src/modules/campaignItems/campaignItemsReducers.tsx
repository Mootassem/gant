import list from 'src/modules/campaignItems/list/campaignItemsListReducers';
import form from 'src/modules/campaignItems/form/campaignItemsFormReducers';
import view from 'src/modules/campaignItems/view/campaignItemsViewReducers';
import destroy from 'src/modules/campaignItems/destroy/campaignItemsDestroyReducers';
import importerReducer from 'src/modules/campaignItems/importer/campaignItemsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
