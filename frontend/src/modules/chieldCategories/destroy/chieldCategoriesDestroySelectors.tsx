import { createSelector } from 'reselect';

const selectRaw = (state) => state.chieldCategories.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const chieldCategoriesDestroySelectors = {
  selectLoading,
};

export default chieldCategoriesDestroySelectors;
