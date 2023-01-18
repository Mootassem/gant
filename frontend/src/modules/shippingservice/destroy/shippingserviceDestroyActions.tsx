import listActions from 'src/modules/shippingservice/list/shippingserviceListActions';
import ShippingserviceService from 'src/modules/shippingservice/shippingserviceService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SHIPPINGSERVICE_DESTROY';

const shippingserviceDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: shippingserviceDestroyActions.DESTROY_STARTED,
      });

      await ShippingserviceService.destroyAll([id]);

      dispatch({
        type: shippingserviceDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.shippingservice.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/shippingservice');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: shippingserviceDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: shippingserviceDestroyActions.DESTROY_ALL_STARTED,
      });

      await ShippingserviceService.destroyAll(ids);

      dispatch({
        type: shippingserviceDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.shippingservice.destroyAll.success'),
      );

      getHistory().push('/shippingservice');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: shippingserviceDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default shippingserviceDestroyActions;
