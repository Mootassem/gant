import { createSelector } from 'reselect';

const selectRaw = (state) => state.brands.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const brandsDestroySelectors = {
  selectLoading,
};

export default brandsDestroySelectors;
