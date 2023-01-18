import React from 'react';
import { i18n } from 'src/i18n';
import PartnerListFilter from 'src/view/partner/list/PartnerListFilter';
import PartnerListTable from 'src/view/partner/list/PartnerListTable';
import PartnerListToolbar from 'src/view/partner/list/PartnerListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Container, Row, Col } from 'react-bootstrap';

function PartnerListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.partner.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.partner.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <PartnerListToolbar />
            </Col>
          </Row>
        </Container>

        <PartnerListFilter />
        <PartnerListTable />
      </ContentWrapper>
    </>
  );
}

export default PartnerListPage;
