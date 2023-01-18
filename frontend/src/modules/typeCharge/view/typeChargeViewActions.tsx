import TypeChargeService from 'src/modules/typeCharge/typeChargeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TYPECHARGE_VIEW';

const typeChargeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: typeChargeViewActions.FIND_STARTED,
      });

      const record = await TypeChargeService.find(id);

      dispatch({
        type: typeChargeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: typeChargeViewActions.FIND_ERROR,
      });

      getHistory().push('/type-charge');
    }
  },
};

export default typeChargeViewActions;
