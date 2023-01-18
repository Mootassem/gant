import BrandsService from 'src/modules/brands/brandsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'BRANDS_VIEW';

const brandsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: brandsViewActions.FIND_STARTED,
      });

      const record = await BrandsService.find(id);

      dispatch({
        type: brandsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: brandsViewActions.FIND_ERROR,
      });

      getHistory().push('/brands');
    }
  },
};

export default brandsViewActions;
