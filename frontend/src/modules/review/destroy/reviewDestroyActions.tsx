import listActions from 'src/modules/review/list/reviewListActions';
import ReviewService from 'src/modules/review/reviewService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'REVIEW_DESTROY';

const reviewDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: reviewDestroyActions.DESTROY_STARTED,
      });

      await ReviewService.destroyAll([id]);

      dispatch({
        type: reviewDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.review.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/review');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: reviewDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: reviewDestroyActions.DESTROY_ALL_STARTED,
      });

      await ReviewService.destroyAll(ids);

      dispatch({
        type: reviewDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.review.destroyAll.success'),
      );

      getHistory().push('/review');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: reviewDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default reviewDestroyActions;
