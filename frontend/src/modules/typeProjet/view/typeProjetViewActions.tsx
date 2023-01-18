import TypeProjetService from 'src/modules/typeProjet/typeProjetService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TYPEPROJET_VIEW';

const typeProjetViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: typeProjetViewActions.FIND_STARTED,
      });

      const record = await TypeProjetService.find(id);

      dispatch({
        type: typeProjetViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: typeProjetViewActions.FIND_ERROR,
      });

      getHistory().push('/type-projet');
    }
  },
};

export default typeProjetViewActions;
