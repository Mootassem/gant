import { createSelector } from 'reselect';

const selectRaw = (state) => state.newsCategory.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const newsCategoryDestroySelectors = {
  selectLoading,
};

export default newsCategoryDestroySelectors;
