import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/campaign/importer/campaignImporterActions';
import fields from 'src/modules/campaign/importer/campaignImporterFields';
import selectors from 'src/modules/campaign/importer/campaignImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function CampaignImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.campaign.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.campaign.menu'), '/campaign'],
          [i18n('entities.campaign.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.campaign.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default CampaignImportPage;
