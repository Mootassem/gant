import listActions from 'src/modules/charge/list/chargeListActions';
import ChargeService from 'src/modules/charge/chargeService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CHARGE_DESTROY';

const chargeDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: chargeDestroyActions.DESTROY_STARTED,
      });

      await ChargeService.destroyAll([id]);

      dispatch({
        type: chargeDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.charge.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/charge');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: chargeDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: chargeDestroyActions.DESTROY_ALL_STARTED,
      });

      await ChargeService.destroyAll(ids);

      dispatch({
        type: chargeDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.charge.destroyAll.success'),
      );

      getHistory().push('/charge');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: chargeDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default chargeDestroyActions;
