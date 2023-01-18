import TypeRevenueService from 'src/modules/typeRevenue/typeRevenueService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'TYPEREVENUE_FORM';

const typeRevenueFormActions = {
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
        type: typeRevenueFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await TypeRevenueService.find(id);
      }

      dispatch({
        type: typeRevenueFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: typeRevenueFormActions.INIT_ERROR,
      });

      getHistory().push('/type-revenue');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: typeRevenueFormActions.CREATE_STARTED,
      });

      await TypeRevenueService.create(values);

      dispatch({
        type: typeRevenueFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.typeRevenue.create.success'),
      );

      getHistory().push('/type-revenue');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: typeRevenueFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: typeRevenueFormActions.UPDATE_STARTED,
      });

      await TypeRevenueService.update(id, values);

      dispatch({
        type: typeRevenueFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.typeRevenue.update.success'),
      );

      getHistory().push('/type-revenue');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: typeRevenueFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default typeRevenueFormActions;
