import { createSelector } from 'reselect';

const selectRaw = (state) => state.entree.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const entreeViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default entreeViewSelectors;
