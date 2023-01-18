import listActions from 'src/modules/group/list/groupListActions';
import GroupService from 'src/modules/group/groupService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'GROUP_DESTROY';

const groupDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: groupDestroyActions.DESTROY_STARTED,
      });

      await GroupService.destroyAll([id]);

      dispatch({
        type: groupDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.group.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/group');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: groupDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: groupDestroyActions.DESTROY_ALL_STARTED,
      });

      await GroupService.destroyAll(ids);

      dispatch({
        type: groupDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.group.destroyAll.success'),
      );

      getHistory().push('/group');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: groupDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default groupDestroyActions;
