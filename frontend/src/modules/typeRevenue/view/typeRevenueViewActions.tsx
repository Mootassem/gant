import TypeRevenueService from 'src/modules/typeRevenue/typeRevenueService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TYPEREVENUE_VIEW';

const typeRevenueViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: typeRevenueViewActions.FIND_STARTED,
      });

      const record = await TypeRevenueService.find(id);

      dispatch({
        type: typeRevenueViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: typeRevenueViewActions.FIND_ERROR,
      });

      getHistory().push('/type-revenue');
    }
  },
};

export default typeRevenueViewActions;
