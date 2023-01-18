import { createSelector } from 'reselect';

const selectRaw = (state) => state.typeRevenue.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const typeRevenueViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default typeRevenueViewSelectors;
