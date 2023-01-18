import React from 'react';
import { i18n } from 'src/i18n';
import SubcategoriesListFilter from 'src/view/subcategories/list/SubcategoriesListFilter';
import SubcategoriesListTable from 'src/view/subcategories/list/SubcategoriesListTable';
import SubcategoriesListToolbar from 'src/view/subcategories/list/SubcategoriesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function SubcategoriesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.subcategories.menu')],
        ]}
      />

      <ContentWrapper>
      <Container fluid={true}>
          <Row>
            <Col xs={9}>
        <PageTitle>
          {i18n('entities.subcategories.list.title')}
        </PageTitle>
        </Col>
            <Col md="auto">
        <SubcategoriesListToolbar />
        </Col>
          </Row>
        </Container>
        <SubcategoriesListFilter />
        <SubcategoriesListTable />
      </ContentWrapper>
    </>
  );
}

export default SubcategoriesListPage;
