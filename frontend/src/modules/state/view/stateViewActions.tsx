import StateService from 'src/modules/state/stateService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'STATE_VIEW';

const stateViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: stateViewActions.FIND_STARTED,
      });

      const record = await StateService.find(id);

      dispatch({
        type: stateViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: stateViewActions.FIND_ERROR,
      });

      getHistory().push('/state');
    }
  },
};

export default stateViewActions;
