import { createSelector } from 'reselect';

const selectRaw = (state) => state.typeCharge.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const typeChargeViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default typeChargeViewSelectors;
