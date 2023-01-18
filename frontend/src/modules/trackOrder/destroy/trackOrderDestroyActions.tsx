import listActions from 'src/modules/trackOrder/list/trackOrderListActions';
import TrackOrderService from 'src/modules/trackOrder/trackOrderService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TRACKORDER_DESTROY';

const trackOrderDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: trackOrderDestroyActions.DESTROY_STARTED,
      });

      await TrackOrderService.destroyAll([id]);

      dispatch({
        type: trackOrderDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.trackOrder.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/track-order');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: trackOrderDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: trackOrderDestroyActions.DESTROY_ALL_STARTED,
      });

      await TrackOrderService.destroyAll(ids);

      dispatch({
        type: trackOrderDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.trackOrder.destroyAll.success'),
      );

      getHistory().push('/track-order');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: trackOrderDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default trackOrderDestroyActions;
