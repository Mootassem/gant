import DepenseService from 'src/modules/depense/depenseService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DEPENSE_VIEW';

const depenseViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: depenseViewActions.FIND_STARTED,
      });

      const record = await DepenseService.find(id);

      dispatch({
        type: depenseViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: depenseViewActions.FIND_ERROR,
      });

      getHistory().push('/depense');
    }
  },
};

export default depenseViewActions;
