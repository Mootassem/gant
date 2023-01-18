import React from 'react';
import { i18n } from 'src/i18n';
import NewsListFilter from 'src/view/news/list/NewsListFilter';
import NewsListTable from 'src/view/news/list/NewsListTable';
import NewsListToolbar from 'src/view/news/list/NewsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function NewsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.news.menu')],
        ]}
      />

      <ContentWrapper>
        
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.news.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <NewsListToolbar />
            </Col>
          </Row>
        </Container>
        <NewsListFilter />
        <NewsListTable />
      </ContentWrapper>
    </>
  );
}

export default NewsListPage;
