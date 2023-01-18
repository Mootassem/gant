import React from 'react';
import { i18n } from 'src/i18n';
import ShippingserviceListFilter from 'src/view/shippingservice/list/ShippingserviceListFilter';
import ShippingserviceListTable from 'src/view/shippingservice/list/ShippingserviceListTable';
import ShippingserviceListToolbar from 'src/view/shippingservice/list/ShippingserviceListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function ShippingserviceListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.shippingservice.menu')],
        ]}
      />

      <ContentWrapper>
      <Container fluid={true}>
          <Row>
            <Col xs={9}>
        <PageTitle>
          {i18n('entities.shippingservice.list.title')}
        </PageTitle>
     </Col>
            <Col md="auto">
        <ShippingserviceListToolbar />
        </Col>
          </Row>
        </Container>
        <ShippingserviceListFilter />
        <ShippingserviceListTable />
      </ContentWrapper>
    </>
  );
}

export default ShippingserviceListPage;
