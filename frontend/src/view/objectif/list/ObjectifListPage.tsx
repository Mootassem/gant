import React from 'react';
import { i18n } from 'src/i18n';
import ObjectifListFilter from 'src/view/objectif/list/ObjectifListFilter';
import ObjectifListTable from 'src/view/objectif/list/ObjectifListTable';
import ObjectifListToolbar from 'src/view/objectif/list/ObjectifListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Container, Row, Col } from 'react-bootstrap';

function ObjectifListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.objectif.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.objectif.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <ObjectifListToolbar />
            </Col>
          </Row>
        </Container>

        <ObjectifListFilter />
        <ObjectifListTable />
      </ContentWrapper>
    </>
  );
}

export default ObjectifListPage;
