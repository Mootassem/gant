import ShippingserviceService from 'src/modules/shippingservice/shippingserviceService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SHIPPINGSERVICE_VIEW';

const shippingserviceViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: shippingserviceViewActions.FIND_STARTED,
      });

      const record = await ShippingserviceService.find(id);

      dispatch({
        type: shippingserviceViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: shippingserviceViewActions.FIND_ERROR,
      });

      getHistory().push('/shippingservice');
    }
  },
};

export default shippingserviceViewActions;
