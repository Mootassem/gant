import listActions from 'src/modules/campaignItems/list/campaignItemsListActions';
import CampaignItemsService from 'src/modules/campaignItems/campaignItemsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'CAMPAIGNITEMS_DESTROY';

const campaignItemsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: campaignItemsDestroyActions.DESTROY_STARTED,
      });

      await CampaignItemsService.destroyAll([id]);

      dispatch({
        type: campaignItemsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.campaignItems.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/campaign-items');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: campaignItemsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: campaignItemsDestroyActions.DESTROY_ALL_STARTED,
      });

      await CampaignItemsService.destroyAll(ids);

      dispatch({
        type: campaignItemsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.campaignItems.destroyAll.success'),
      );

      getHistory().push('/campaign-items');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: campaignItemsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default campaignItemsDestroyActions;
