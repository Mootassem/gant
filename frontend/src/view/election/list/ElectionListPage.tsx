import React from 'react';
import { i18n } from 'src/i18n';
import ElectionListFilter from 'src/view/election/list/ElectionListFilter';
import ElectionListTable from 'src/view/election/list/ElectionListTable';
import ElectionListToolbar from 'src/view/election/list/ElectionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function ElectionListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.election.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.election.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <ElectionListToolbar />
            </Col>
          </Row>
        </Container>
        <ElectionListFilter />
        <ElectionListTable />
      </ContentWrapper>
    </>
  );
}

export default ElectionListPage;
