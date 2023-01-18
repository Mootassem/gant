import React from 'react';
import { i18n } from 'src/i18n';
import TagListFilter from 'src/view/tag/list/TagListFilter';
import TagListTable from 'src/view/tag/list/TagListTable';
import TagListToolbar from 'src/view/tag/list/TagListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Col, Container, Row } from 'react-bootstrap';

function TagListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tag.menu')],
        ]}
      />

      <ContentWrapper>
      <Container fluid={true}>
          <Row>
            <Col xs={9}>
        <PageTitle>
          {i18n('entities.tag.list.title')}
        </PageTitle>
        </Col>
            <Col md="auto">
        <TagListToolbar />
        </Col>
          </Row>
        </Container>
        <TagListFilter />
        <TagListTable />
      </ContentWrapper>
    </>
  );
}

export default TagListPage;
