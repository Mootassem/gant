import { createSelector } from 'reselect';

const selectRaw = (state) => state.charge.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const chargeViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default chargeViewSelectors;
