import React from 'react';
import { i18n } from 'src/i18n';
import NewsCategoryListFilter from 'src/view/newsCategory/list/NewsCategoryListFilter';
import NewsCategoryListTable from 'src/view/newsCategory/list/NewsCategoryListTable';
import NewsCategoryListToolbar from 'src/view/newsCategory/list/NewsCategoryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function NewsCategoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.newsCategory.menu')],
        ]}
      />

      <ContentWrapper>
      <Container fluid={true}>
      <Row>
            <Col xs={9}>
        <PageTitle>
          {i18n('entities.newsCategory.list.title')}
        </PageTitle>
        </Col>
            <Col md="auto">
        <NewsCategoryListToolbar />
        </Col>
          </Row>
        </Container>
        <NewsCategoryListFilter />
        <NewsCategoryListTable />
      </ContentWrapper>
    </>
  );
}

export default NewsCategoryListPage;
