import CartService from 'src/modules/cart/cartService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'CART_FORM';

const cartFormActions = {
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
        type: cartFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await CartService.find(id);
      }

      dispatch({
        type: cartFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cartFormActions.INIT_ERROR,
      });

      getHistory().push('/cart');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: cartFormActions.CREATE_STARTED,
      });

      await CartService.create(values);

      dispatch({
        type: cartFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.cart.create.success'),
      );

      getHistory().push('/cart');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cartFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: cartFormActions.UPDATE_STARTED,
      });

      await CartService.update(id, values);

      dispatch({
        type: cartFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.cart.update.success'),
      );

      getHistory().push('/cart');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: cartFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default cartFormActions;
