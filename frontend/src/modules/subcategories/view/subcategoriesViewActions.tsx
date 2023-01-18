import SubcategoriesService from 'src/modules/subcategories/subcategoriesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SUBCATEGORIES_VIEW';

const subcategoriesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: subcategoriesViewActions.FIND_STARTED,
      });

      const record = await SubcategoriesService.find(id);

      dispatch({
        type: subcategoriesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subcategoriesViewActions.FIND_ERROR,
      });

      getHistory().push('/subcategories');
    }
  },
};

export default subcategoriesViewActions;
