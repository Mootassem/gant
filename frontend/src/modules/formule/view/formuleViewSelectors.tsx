import { createSelector } from 'reselect';

const selectRaw = (state) => state.formule.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const formuleViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default formuleViewSelectors;
