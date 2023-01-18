import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/partner/importer/partnerImporterActions';
import fields from 'src/modules/partner/importer/partnerImporterFields';
import selectors from 'src/modules/partner/importer/partnerImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PartnerImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.partner.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.partner.menu'), '/partner'],
          [i18n('entities.partner.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.partner.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PartnerImportPage;
