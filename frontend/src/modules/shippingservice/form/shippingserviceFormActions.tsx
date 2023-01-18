import ShippingserviceService from 'src/modules/shippingservice/shippingserviceService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SHIPPINGSERVICE_FORM';

const shippingserviceFormActions = {
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
        type: shippingserviceFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ShippingserviceService.find(id);
      }

      dispatch({
        type: shippingserviceFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shippingserviceFormActions.INIT_ERROR,
      });

      getHistory().push('/shippingservice');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: shippingserviceFormActions.CREATE_STARTED,
      });

      await ShippingserviceService.create(values);

      dispatch({
        type: shippingserviceFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.shippingservice.create.success'),
      );

      getHistory().push('/shippingservice');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shippingserviceFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: shippingserviceFormActions.UPDATE_STARTED,
      });

      await ShippingserviceService.update(id, values);

      dispatch({
        type: shippingserviceFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.shippingservice.update.success'),
      );

      getHistory().push('/shippingservice');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shippingserviceFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default shippingserviceFormActions;
