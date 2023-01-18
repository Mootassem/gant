import list from 'src/modules/typeRevenue/list/typeRevenueListReducers';
import form from 'src/modules/typeRevenue/form/typeRevenueFormReducers';
import view from 'src/modules/typeRevenue/view/typeRevenueViewReducers';
import destroy from 'src/modules/typeRevenue/destroy/typeRevenueDestroyReducers';
import importerReducer from 'src/modules/typeRevenue/importer/typeRevenueImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
