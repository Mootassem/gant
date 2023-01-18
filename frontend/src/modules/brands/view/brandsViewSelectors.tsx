import { createSelector } from 'reselect';

const selectRaw = (state) => state.brands.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const brandsViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default brandsViewSelectors;
