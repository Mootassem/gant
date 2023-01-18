import list from 'src/modules/gallery/list/galleryListReducers';
import form from 'src/modules/gallery/form/galleryFormReducers';
import view from 'src/modules/gallery/view/galleryViewReducers';
import destroy from 'src/modules/gallery/destroy/galleryDestroyReducers';
import importerReducer from 'src/modules/gallery/importer/galleryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
