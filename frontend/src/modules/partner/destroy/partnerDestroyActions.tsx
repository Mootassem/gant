import listActions from 'src/modules/partner/list/partnerListActions';
import PartnerService from 'src/modules/partner/partnerService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PARTNER_DESTROY';

const partnerDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: partnerDestroyActions.DESTROY_STARTED,
      });

      await PartnerService.destroyAll([id]);

      dispatch({
        type: partnerDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.partner.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/partner');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: partnerDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: partnerDestroyActions.DESTROY_ALL_STARTED,
      });

      await PartnerService.destroyAll(ids);

      dispatch({
        type: partnerDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.partner.destroyAll.success'),
      );

      getHistory().push('/partner');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: partnerDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default partnerDestroyActions;
