import { createSelector } from 'reselect';

const selectRaw = (state) => state.typeRevenue.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const typeRevenueDestroySelectors = {
  selectLoading,
};

export default typeRevenueDestroySelectors;
