import GalleryService from 'src/modules/gallery/galleryService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'GALLERY_FORM';

const galleryFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: galleryFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await GalleryService.find(id);
      }

      dispatch({
        type: galleryFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: galleryFormActions.INIT_ERROR,
      });

      getHistory().push('/gallery');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: galleryFormActions.CREATE_STARTED,
      });

      await GalleryService.create(values);

      dispatch({
        type: galleryFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.gallery.create.success'),
      );

      getHistory().push('/gallery');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: galleryFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: galleryFormActions.UPDATE_STARTED,
      });

      await GalleryService.update(id, values);

      dispatch({
        type: galleryFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.gallery.update.success'),
      );

      getHistory().push('/gallery');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: galleryFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default galleryFormActions;
