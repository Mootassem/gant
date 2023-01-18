import { createSelector } from 'reselect';

const selectRaw = (state) => state.state.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const stateDestroySelectors = {
  selectLoading,
};

export default stateDestroySelectors;
