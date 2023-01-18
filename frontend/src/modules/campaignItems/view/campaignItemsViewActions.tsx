import CampaignItemsService from 'src/modules/campaignItems/campaignItemsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'CAMPAIGNITEMS_VIEW';

const campaignItemsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: campaignItemsViewActions.FIND_STARTED,
      });

      const record = await CampaignItemsService.find(id);

      dispatch({
        type: campaignItemsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: campaignItemsViewActions.FIND_ERROR,
      });

      getHistory().push('/campaign-items');
    }
  },
};

export default campaignItemsViewActions;
