import DepenseService from 'src/modules/depense/depenseService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DEPENSE_FORM';

const depenseFormActions = {
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
        type: depenseFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DepenseService.find(id);
      }

      dispatch({
        type: depenseFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: depenseFormActions.INIT_ERROR,
      });

      getHistory().push('/depense');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: depenseFormActions.CREATE_STARTED,
      });

      await DepenseService.create(values);

      dispatch({
        type: depenseFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.depense.create.success'),
      );

      getHistory().push('/depense');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: depenseFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: depenseFormActions.UPDATE_STARTED,
      });

      await DepenseService.update(id, values);

      dispatch({
        type: depenseFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.depense.update.success'),
      );

      getHistory().push('/depense');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: depenseFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default depenseFormActions;
