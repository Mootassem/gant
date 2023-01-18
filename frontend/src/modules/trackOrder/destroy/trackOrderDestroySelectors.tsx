import { createSelector } from 'reselect';

const selectRaw = (state) => state.trackOrder.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const trackOrderDestroySelectors = {
  selectLoading,
};

export default trackOrderDestroySelectors;
