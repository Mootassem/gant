import listActions from 'src/modules/membership/list/membershipListActions';
import MembershipService from 'src/modules/membership/membershipService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MEMBERSHIP_DESTROY';

const membershipDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: membershipDestroyActions.DESTROY_STARTED,
      });

      await MembershipService.destroyAll([id]);

      dispatch({
        type: membershipDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.membership.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().go(0);
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: membershipDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: membershipDestroyActions.DESTROY_ALL_STARTED,
      });

      await MembershipService.destroyAll(ids);

      dispatch({
        type: membershipDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.membership.destroyAll.success'),
      );

      getHistory().go(0);
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: membershipDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default membershipDestroyActions;
