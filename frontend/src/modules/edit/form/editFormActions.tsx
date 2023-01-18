import EditService from 'src/modules/edit/editService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'EDIT_FORM';

const editFormActions = {
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
        type: editFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await EditService.find(id);
      }

      dispatch({
        type: editFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: editFormActions.INIT_ERROR,
      });

      getHistory().push('/edit');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: editFormActions.CREATE_STARTED,
      });

      await EditService.create(values);

      dispatch({
        type: editFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.edit.create.success'),
      );

      getHistory().push('/edit');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: editFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: editFormActions.UPDATE_STARTED,
      });

      await EditService.update(id, values);

      dispatch({
        type: editFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.edit.update.success'),
      );

      getHistory().push('/edit');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: editFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default editFormActions;
