import { createSelector } from 'reselect';

const selectRaw = (state) => state.formule.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const formuleDestroySelectors = {
  selectLoading,
};

export default formuleDestroySelectors;
