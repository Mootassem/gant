import TypeDepenseService from 'src/modules/typeDepense/typeDepenseService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TYPEDEPENSE_VIEW';

const typeDepenseViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: typeDepenseViewActions.FIND_STARTED,
      });

      const record = await TypeDepenseService.find(id);

      dispatch({
        type: typeDepenseViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: typeDepenseViewActions.FIND_ERROR,
      });

      getHistory().push('/type-depense');
    }
  },
};

export default typeDepenseViewActions;
