import ChieldCategoriesService from 'src/modules/chieldCategories/chieldCategoriesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CHIELDCATEGORIES_VIEW';

const chieldCategoriesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: chieldCategoriesViewActions.FIND_STARTED,
      });

      const record = await ChieldCategoriesService.find(id);

      dispatch({
        type: chieldCategoriesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: chieldCategoriesViewActions.FIND_ERROR,
      });

      getHistory().push('/chield-categories');
    }
  },
};

export default chieldCategoriesViewActions;
