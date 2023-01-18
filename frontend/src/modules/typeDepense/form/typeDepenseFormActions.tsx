import TypeDepenseService from 'src/modules/typeDepense/typeDepenseService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'TYPEDEPENSE_FORM';

const typeDepenseFormActions = {
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
        type: typeDepenseFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await TypeDepenseService.find(id);
      }

      dispatch({
        type: typeDepenseFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: typeDepenseFormActions.INIT_ERROR,
      });

      getHistory().push('/type-depense');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: typeDepenseFormActions.CREATE_STARTED,
      });

      await TypeDepenseService.create(values);

      dispatch({
        type: typeDepenseFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.typeDepense.create.success'),
      );

      getHistory().push('/type-depense');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: typeDepenseFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: typeDepenseFormActions.UPDATE_STARTED,
      });

      await TypeDepenseService.update(id, values);

      dispatch({
        type: typeDepenseFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.typeDepense.update.success'),
      );

      getHistory().push('/type-depense');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: typeDepenseFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default typeDepenseFormActions;
