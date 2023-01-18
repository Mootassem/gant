import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { i18n } from 'src/i18n';
import EntreeListFilter from 'src/view/entree/list/EntreeListFilter';
import EntreeListTable from 'src/view/entree/list/EntreeListTable';
import EntreeListToolbar from 'src/view/entree/list/EntreeListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function EntreeListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.entree.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.entree.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <EntreeListToolbar />
            </Col>
          </Row>
        </Container>

        <EntreeListFilter />
        <EntreeListTable />
      </ContentWrapper>
    </>
  );
}

export default EntreeListPage;
