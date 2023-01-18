import StateService from 'src/modules/state/stateService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'STATE_FORM';

const stateFormActions = {
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
        type: stateFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await StateService.find(id);
      }

      dispatch({
        type: stateFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: stateFormActions.INIT_ERROR,
      });

      getHistory().push('/state');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: stateFormActions.CREATE_STARTED,
      });

      await StateService.create(values);

      dispatch({
        type: stateFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.state.create.success'),
      );

      getHistory().push('/state');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: stateFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: stateFormActions.UPDATE_STARTED,
      });

      await StateService.update(id, values);

      dispatch({
        type: stateFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.state.update.success'),
      );

      getHistory().push('/state');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: stateFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default stateFormActions;
