import listActions from 'src/modules/newsCategory/list/newsCategoryListActions';
import NewsCategoryService from 'src/modules/newsCategory/newsCategoryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'NEWSCATEGORY_DESTROY';

const newsCategoryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: newsCategoryDestroyActions.DESTROY_STARTED,
      });

      await NewsCategoryService.destroyAll([id]);

      dispatch({
        type: newsCategoryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.newsCategory.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/news-category');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: newsCategoryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: newsCategoryDestroyActions.DESTROY_ALL_STARTED,
      });

      await NewsCategoryService.destroyAll(ids);

      dispatch({
        type: newsCategoryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.newsCategory.destroyAll.success'),
      );

      getHistory().push('/news-category');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: newsCategoryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default newsCategoryDestroyActions;
