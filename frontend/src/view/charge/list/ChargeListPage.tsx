import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { i18n } from 'src/i18n';
import ChargeListFilter from 'src/view/charge/list/ChargeListFilter';
import ChargeListTable from 'src/view/charge/list/ChargeListTable';
import ChargeListToolbar from 'src/view/charge/list/ChargeListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ChargeListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.charge.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.charge.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <ChargeListToolbar />
            </Col>
          </Row>
          {/* <Row>
            <Col xs={8}>
            </Col>
            <Col>
            </Col>
          </Row> */}
          <ChargeListFilter />
          <ChargeListTable />
        </Container>
      </ContentWrapper>
    </>
  );
}

export default ChargeListPage;
