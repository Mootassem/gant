import EditService from 'src/modules/edit/editService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'EDIT_VIEW';

const editViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: editViewActions.FIND_STARTED,
      });

      const record = await EditService.find(id);

      dispatch({
        type: editViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: editViewActions.FIND_ERROR,
      });

      getHistory().push('/edit');
    }
  },
};

export default editViewActions;
