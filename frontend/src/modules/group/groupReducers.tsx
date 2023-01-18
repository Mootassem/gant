import list from 'src/modules/group/list/groupListReducers';
import form from 'src/modules/group/form/groupFormReducers';
import view from 'src/modules/group/view/groupViewReducers';
import destroy from 'src/modules/group/destroy/groupDestroyReducers';
import importerReducer from 'src/modules/group/importer/groupImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
