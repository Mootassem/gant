import React from 'react';
import { i18n } from 'src/i18n';
import ProjetListFilter from 'src/view/projet/list/ProjetListFilter';
import ProjetListTable from 'src/view/projet/list/ProjetListTable';
import ProjetListToolbar from 'src/view/projet/list/ProjetListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function ProjetListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.projet.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.projet.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <ProjetListToolbar />
            </Col>
          </Row>
        </Container>
        <ProjetListFilter />
        <ProjetListTable />
      </ContentWrapper>
    </>
  );
}

export default ProjetListPage;
