import React from 'react';
import { i18n } from 'src/i18n';
import ProductListFilter from 'src/view/product/list/ProductListFilter';
import ProductListTable from 'src/view/product/list/ProductListTable';
import ProductListToolbar from 'src/view/product/list/ProductListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function ProductListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.product.menu')],
        ]}
      />

      <ContentWrapper>
      <Container fluid={true}>
          <Row>
            <Col xs={9}>
        <PageTitle>
          {i18n('entities.product.list.title')}
        </PageTitle>
        </Col>
            <Col md="auto">
        <ProductListToolbar />
        </Col>
          </Row>
        </Container>
        <ProductListFilter />
        <ProductListTable />
      </ContentWrapper>
    </>
  );
}

export default ProductListPage;
