import { createSelector } from 'reselect';

const selectRaw = (state) => state.gallery.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const galleryDestroySelectors = {
  selectLoading,
};

export default galleryDestroySelectors;
