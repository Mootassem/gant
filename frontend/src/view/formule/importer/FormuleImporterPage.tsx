import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/formule/importer/formuleImporterActions';
import fields from 'src/modules/formule/importer/formuleImporterFields';
import selectors from 'src/modules/formule/importer/formuleImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function FormuleImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.formule.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.formule.menu'), '/formule'],
          [i18n('entities.formule.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.formule.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default FormuleImportPage;
