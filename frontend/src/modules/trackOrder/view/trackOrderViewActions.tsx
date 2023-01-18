import TrackOrderService from 'src/modules/trackOrder/trackOrderService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TRACKORDER_VIEW';

const trackOrderViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: trackOrderViewActions.FIND_STARTED,
      });

      const record = await TrackOrderService.find(id);

      dispatch({
        type: trackOrderViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: trackOrderViewActions.FIND_ERROR,
      });

      getHistory().push('/track-order');
    }
  },
};

export default trackOrderViewActions;
