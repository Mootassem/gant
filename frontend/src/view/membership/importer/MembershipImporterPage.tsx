import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/membership/importer/membershipImporterActions';
import fields from 'src/modules/membership/importer/membershipImporterFields';
import selectors from 'src/modules/membership/importer/membershipImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MembershipImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.membership.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.membership.menu'), '/membership'],
          [i18n('entities.membership.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.membership.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MembershipImportPage;
