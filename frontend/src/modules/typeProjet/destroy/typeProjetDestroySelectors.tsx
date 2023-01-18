import { createSelector } from 'reselect';

const selectRaw = (state) => state.typeProjet.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const typeProjetDestroySelectors = {
  selectLoading,
};

export default typeProjetDestroySelectors;
