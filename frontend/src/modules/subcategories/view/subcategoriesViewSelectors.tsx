import { createSelector } from 'reselect';

const selectRaw = (state) => state.subcategories.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const subcategoriesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default subcategoriesViewSelectors;
