import list from 'src/modules/typeProjet/list/typeProjetListReducers';
import form from 'src/modules/typeProjet/form/typeProjetFormReducers';
import view from 'src/modules/typeProjet/view/typeProjetViewReducers';
import destroy from 'src/modules/typeProjet/destroy/typeProjetDestroyReducers';
import importerReducer from 'src/modules/typeProjet/importer/typeProjetImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
