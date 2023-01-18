import AttributesService from 'src/modules/attributes/attributesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ATTRIBUTES_VIEW';

const attributesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: attributesViewActions.FIND_STARTED,
      });

      const record = await AttributesService.find(id);

      dispatch({
        type: attributesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: attributesViewActions.FIND_ERROR,
      });

      getHistory().push('/attributes');
    }
  },
};

export default attributesViewActions;
