import ChargeService from 'src/modules/charge/chargeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CHARGE_VIEW';

const chargeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: chargeViewActions.FIND_STARTED,
      });

      const record = await ChargeService.find(id);

      dispatch({
        type: chargeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: chargeViewActions.FIND_ERROR,
      });

      getHistory().push('/charge');
    }
  },
};

export default chargeViewActions;
