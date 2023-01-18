import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { i18n } from 'src/i18n';
import GroupListFilter from 'src/view/group/list/GroupListFilter';
import GroupListTable from 'src/view/group/list/GroupListTable';
import GroupListToolbar from 'src/view/group/list/GroupListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function GroupListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.group.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.group.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <GroupListToolbar />
            </Col>
          </Row>
        </Container>

        <GroupListFilter />
        <GroupListTable />
      </ContentWrapper>
    </>
  );
}

export default GroupListPage;
