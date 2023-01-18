import { createSelector } from 'reselect';

const selectRaw = (state) => state.partner.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const partnerDestroySelectors = {
  selectLoading,
};

export default partnerDestroySelectors;
