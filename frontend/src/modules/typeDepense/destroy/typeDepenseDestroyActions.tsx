import listActions from 'src/modules/typeDepense/list/typeDepenseListActions';
import TypeDepenseService from 'src/modules/typeDepense/typeDepenseService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TYPEDEPENSE_DESTROY';

const typeDepenseDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: typeDepenseDestroyActions.DESTROY_STARTED,
      });

      await TypeDepenseService.destroyAll([id]);

      dispatch({
        type: typeDepenseDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.typeDepense.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/type-depense');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: typeDepenseDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: typeDepenseDestroyActions.DESTROY_ALL_STARTED,
      });

      await TypeDepenseService.destroyAll(ids);

      dispatch({
        type: typeDepenseDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.typeDepense.destroyAll.success'),
      );

      getHistory().push('/type-depense');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: typeDepenseDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default typeDepenseDestroyActions;
