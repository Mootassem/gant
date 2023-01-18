import NewsCategoryService from 'src/modules/newsCategory/newsCategoryService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'NEWSCATEGORY_FORM';

const newsCategoryFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: newsCategoryFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await NewsCategoryService.find(id);
      }

      dispatch({
        type: newsCategoryFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newsCategoryFormActions.INIT_ERROR,
      });

      getHistory().push('/news-category');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: newsCategoryFormActions.CREATE_STARTED,
      });

      await NewsCategoryService.create(values);

      dispatch({
        type: newsCategoryFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.newsCategory.create.success'),
      );

      getHistory().push('/news-category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newsCategoryFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: newsCategoryFormActions.UPDATE_STARTED,
      });

      await NewsCategoryService.update(id, values);

      dispatch({
        type: newsCategoryFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.newsCategory.update.success'),
      );

      getHistory().push('/news-category');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: newsCategoryFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default newsCategoryFormActions;
