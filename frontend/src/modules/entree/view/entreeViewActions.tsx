import EntreeService from 'src/modules/entree/entreeService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ENTREE_VIEW';

const entreeViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: entreeViewActions.FIND_STARTED,
      });

      const record = await EntreeService.find(id);

      dispatch({
        type: entreeViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: entreeViewActions.FIND_ERROR,
      });

      getHistory().push('/entree');
    }
  },
};

export default entreeViewActions;
