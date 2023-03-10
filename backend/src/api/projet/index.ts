export default (app) => {
  app.post(
    `/tenant/:tenantId/projet`,
    require('./projetCreate').default,
  );
  app.put(
    `/tenant/:tenantId/projet/:id`,
    require('./projetUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/projet/import`,
    require('./projetImport').default,
  );
  app.delete(
    `/tenant/:tenantId/projet`,
    require('./projetDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/projet/autocomplete`,
    require('./projetAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/projet`,
    require('./projetList').default,
  );
  app.get(
    `/tenant/:tenantId/projet/:id`,
    require('./projetFind').default,
  );
  app.get(
    `/tenant/:tenantId/project/count`,
    require('./Count').default,
  );

  app.get(
    `/tenant/:tenantId/project/status`,
    require('./ProjetStatus').default,
  );

  app.get(
    `/tenant/:tenantId/project/type`,
    require('./ProjetType').default,
  );
};
