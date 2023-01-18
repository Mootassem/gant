import React from 'react';
import { i18n } from 'src/i18n';
import CampaignItemsListFilter from 'src/view/campaignItems/list/CampaignItemsListFilter';
import CampaignItemsListTable from 'src/view/campaignItems/list/CampaignItemsListTable';
import CampaignItemsListToolbar from 'src/view/campaignItems/list/CampaignItemsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function CampaignItemsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.campaignItems.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.campaignItems.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <CampaignItemsListToolbar />
            </Col>
          </Row>
        </Container>
        <CampaignItemsListFilter />
        <CampaignItemsListTable />
      </ContentWrapper>
    </>
  );
}

export default CampaignItemsListPage;
