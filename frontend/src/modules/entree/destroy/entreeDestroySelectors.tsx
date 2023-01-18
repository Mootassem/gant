import { createSelector } from 'reselect';

const selectRaw = (state) => state.entree.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const entreeDestroySelectors = {
  selectLoading,
};

export default entreeDestroySelectors;
