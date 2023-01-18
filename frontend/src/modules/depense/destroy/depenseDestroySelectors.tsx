import { createSelector } from 'reselect';

const selectRaw = (state) => state.depense.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const depenseDestroySelectors = {
  selectLoading,
};

export default depenseDestroySelectors;
