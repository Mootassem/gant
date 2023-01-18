import FormuleService from 'src/modules/formule/formuleService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'FORMULE_VIEW';

const formuleViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: formuleViewActions.FIND_STARTED,
      });

      const record = await FormuleService.find(id);

      dispatch({
        type: formuleViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: formuleViewActions.FIND_ERROR,
      });

      getHistory().push('/formule');
    }
  },
};

export default formuleViewActions;
