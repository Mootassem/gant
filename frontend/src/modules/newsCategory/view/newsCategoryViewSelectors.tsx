import { createSelector } from 'reselect';

const selectRaw = (state) => state.newsCategory.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const newsCategoryViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default newsCategoryViewSelectors;
