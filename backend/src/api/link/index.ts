export default (app) => {
  app.post(
    `/tenant/:tenantId/link`,
    require('./linkCreate').default,
  );
  app.put(
    `/tenant/:tenantId/link/:id`,
    require('./linkUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/link/import`,
    require('./linkImport').default,
  );
  app.delete(
    `/tenant/:tenantId/link`,
    require('./linkDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/link/autocomplete`,
    require('./linkAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/link`,
    require('./linkList').default,
  );
  app.get(
    `/tenant/:tenantId/link/:id`,
    require('./linkFind').default,
  );
};
