export default (app) => {
  app.post(
    `/tenant/:tenantId/membership`,
    require('./membershipCreate').default,
  );
  app.put(
    `/tenant/:tenantId/membership/:id`,
    require('./membershipUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/membership/import`,
    require('./membershipImport').default,
  );
  app.delete(
    `/tenant/:tenantId/membership`,
    require('./membershipDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/membership/autocomplete`,
    require('./membershipAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/membership`,
    require('./membershipList').default,
  );
  app.get(
    `/tenant/:tenantId/membership/:id`,
    require('./membershipFind').default,
  );
};
