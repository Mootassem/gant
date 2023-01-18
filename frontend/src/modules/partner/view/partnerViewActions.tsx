import PartnerService from 'src/modules/partner/partnerService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PARTNER_VIEW';

const partnerViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: partnerViewActions.FIND_STARTED,
      });

      const record = await PartnerService.find(id);

      dispatch({
        type: partnerViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: partnerViewActions.FIND_ERROR,
      });

      getHistory().push('/partner');
    }
  },
};

export default partnerViewActions;
