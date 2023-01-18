import { createSelector } from 'reselect';

const selectRaw = (state) => state.objectif.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const objectifDestroySelectors = {
  selectLoading,
};

export default objectifDestroySelectors;
