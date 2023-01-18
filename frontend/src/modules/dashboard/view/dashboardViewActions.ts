import DashboardService from 'src/modules/dashboard/DashboardService';

const prefix = 'DASHBOARD_VIEW';

const dashboardViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFindStatus: () => async (dispatch) => {
    try {
      dispatch({ type: dashboardViewActions.FIND_STARTED });
      const record = await DashboardService.ProjetStatus();
      dispatch({
        type: dashboardViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      dispatch({ type: dashboardViewActions.FIND_ERROR });
    }
  },

  doFindType: () => async (dispatch) => {
    try {
      dispatch({ type: dashboardViewActions.FIND_STARTED });
      const record = await DashboardService.ProjetStatus();
      dispatch({
        type: dashboardViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      dispatch({ type: dashboardViewActions.FIND_ERROR });
    }
  },
};

export default dashboardViewActions;
