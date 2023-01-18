import { createSelector } from 'reselect';

const selectRaw = (state) => state.subcategories.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const subcategoriesDestroySelectors = {
  selectLoading,
};

export default subcategoriesDestroySelectors;
