import ElectionService from 'src/modules/election/electionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ELECTION_VIEW';

const electionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: electionViewActions.FIND_STARTED,
      });

      const record = await ElectionService.find(id);

      dispatch({
        type: electionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: electionViewActions.FIND_ERROR,
      });

      getHistory().push('/election');
    }
  },
};

export default electionViewActions;
