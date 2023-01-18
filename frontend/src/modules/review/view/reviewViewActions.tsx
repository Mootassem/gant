import ReviewService from 'src/modules/review/reviewService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'REVIEW_VIEW';

const reviewViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: reviewViewActions.FIND_STARTED,
      });

      const record = await ReviewService.find(id);

      dispatch({
        type: reviewViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reviewViewActions.FIND_ERROR,
      });

      getHistory().push('/review');
    }
  },
};

export default reviewViewActions;
