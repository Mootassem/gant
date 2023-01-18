import listActions from 'src/modules/edit/list/editListActions';
import EditService from 'src/modules/edit/editService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'EDIT_DESTROY';

const editDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: editDestroyActions.DESTROY_STARTED,
      });

      await EditService.destroyAll([id]);

      dispatch({
        type: editDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.edit.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/edit');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: editDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: editDestroyActions.DESTROY_ALL_STARTED,
      });

      await EditService.destroyAll(ids);

      dispatch({
        type: editDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.edit.destroyAll.success'),
      );

      getHistory().push('/edit');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: editDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default editDestroyActions;
