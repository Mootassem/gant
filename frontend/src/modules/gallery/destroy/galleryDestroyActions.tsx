import listActions from 'src/modules/gallery/list/galleryListActions';
import GalleryService from 'src/modules/gallery/galleryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'GALLERY_DESTROY';

const galleryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: galleryDestroyActions.DESTROY_STARTED,
      });

      await GalleryService.destroyAll([id]);

      dispatch({
        type: galleryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.gallery.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/gallery');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: galleryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: galleryDestroyActions.DESTROY_ALL_STARTED,
      });

      await GalleryService.destroyAll(ids);

      dispatch({
        type: galleryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.gallery.destroyAll.success'),
      );

      getHistory().push('/gallery');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: galleryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default galleryDestroyActions;
