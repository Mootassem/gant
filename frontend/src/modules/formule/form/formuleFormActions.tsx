import FormuleService from 'src/modules/formule/formuleService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'FORMULE_FORM';

const formuleFormActions = {
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
        type: formuleFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await FormuleService.find(id);
      }

      dispatch({
        type: formuleFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: formuleFormActions.INIT_ERROR,
      });

      getHistory().push('/formule');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: formuleFormActions.CREATE_STARTED,
      });

      await FormuleService.create(values);

      dispatch({
        type: formuleFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.formule.create.success'),
      );

      getHistory().push('/formule');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: formuleFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: formuleFormActions.UPDATE_STARTED,
      });

      await FormuleService.update(id, values);

      dispatch({
        type: formuleFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.formule.update.success'),
      );

      getHistory().push('/formule');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: formuleFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default formuleFormActions;
