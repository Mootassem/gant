import React from 'react';
import { i18n } from 'src/i18n';
import TaxesListFilter from 'src/view/taxes/list/TaxesListFilter';
import TaxesListTable from 'src/view/taxes/list/TaxesListTable';
import TaxesListToolbar from 'src/view/taxes/list/TaxesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function TaxesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.taxes.menu')],
        ]}
      />

      <ContentWrapper>
      <Container fluid={true}>
          <Row>
            <Col xs={9}>
        <PageTitle>
          {i18n('entities.taxes.list.title')}
        </PageTitle>
        </Col>
            <Col md="auto">
        <TaxesListToolbar />
        </Col>
          </Row>
        </Container>
        <TaxesListFilter />
        <TaxesListTable />
      </ContentWrapper>
    </>
  );
}

export default TaxesListPage;
