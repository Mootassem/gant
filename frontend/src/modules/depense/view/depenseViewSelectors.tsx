import { createSelector } from 'reselect';

const selectRaw = (state) => state.depense.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const depenseViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default depenseViewSelectors;
