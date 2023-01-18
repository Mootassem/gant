import ObjectifService from 'src/modules/objectif/objectifService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'OBJECTIF_FORM';

const objectifFormActions = {
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
        type: objectifFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ObjectifService.find(id);
      }

      dispatch({
        type: objectifFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: objectifFormActions.INIT_ERROR,
      });

      getHistory().goBack();
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: objectifFormActions.CREATE_STARTED,
      });

      await ObjectifService.create(values);

      dispatch({
        type: objectifFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.objectif.create.success'),
      );

      getHistory().goBack();
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: objectifFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: objectifFormActions.UPDATE_STARTED,
      });

      await ObjectifService.update(id, values);

      dispatch({
        type: objectifFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.objectif.update.success'),
      );

      getHistory().goBack();
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: objectifFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default objectifFormActions;
