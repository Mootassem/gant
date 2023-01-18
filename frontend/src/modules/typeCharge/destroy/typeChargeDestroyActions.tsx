import listActions from 'src/modules/typeCharge/list/typeChargeListActions';
import TypeChargeService from 'src/modules/typeCharge/typeChargeService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TYPECHARGE_DESTROY';

const typeChargeDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: typeChargeDestroyActions.DESTROY_STARTED,
      });

      await TypeChargeService.destroyAll([id]);

      dispatch({
        type: typeChargeDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.typeCharge.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/type-charge');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: typeChargeDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: typeChargeDestroyActions.DESTROY_ALL_STARTED,
      });

      await TypeChargeService.destroyAll(ids);

      dispatch({
        type: typeChargeDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.typeCharge.destroyAll.success'),
      );

      getHistory().push('/type-charge');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: typeChargeDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default typeChargeDestroyActions;
