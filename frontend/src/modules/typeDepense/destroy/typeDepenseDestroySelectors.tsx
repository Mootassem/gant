import { createSelector } from 'reselect';

const selectRaw = (state) => state.typeDepense.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const typeDepenseDestroySelectors = {
  selectLoading,
};

export default typeDepenseDestroySelectors;
