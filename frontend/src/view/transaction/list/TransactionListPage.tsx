import React from 'react';
import { i18n } from 'src/i18n';
import TransactionListFilter from 'src/view/transaction/list/TransactionListFilter';
import TransactionListTable from 'src/view/transaction/list/TransactionListTable';
import TransactionListToolbar from 'src/view/transaction/list/TransactionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function TransactionListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.transaction.menu')],
        ]}
      />

      <ContentWrapper>
      <Container fluid={true}>
          <Row>
            <Col xs={9}>
        <PageTitle>
          {i18n('entities.transaction.list.title')}
        </PageTitle>
        </Col>
            <Col md="auto">
        <TransactionListToolbar />
        </Col>
          </Row>
        </Container>
        <TransactionListFilter />
        <TransactionListTable />
      </ContentWrapper>
    </>
  );
}

export default TransactionListPage;
