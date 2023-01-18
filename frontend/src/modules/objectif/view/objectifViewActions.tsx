import ObjectifService from 'src/modules/objectif/objectifService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'OBJECTIF_VIEW';

const objectifViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: objectifViewActions.FIND_STARTED,
      });

      const record = await ObjectifService.find(id);

      dispatch({
        type: objectifViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: objectifViewActions.FIND_ERROR,
      });

      getHistory().push('/objectif');
    }
  },
};

export default objectifViewActions;
