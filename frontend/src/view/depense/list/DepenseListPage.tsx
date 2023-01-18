import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { i18n } from 'src/i18n';
import DepenseListFilter from 'src/view/depense/list/DepenseListFilter';
import DepenseListTable from 'src/view/depense/list/DepenseListTable';
import DepenseListToolbar from 'src/view/depense/list/DepenseListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DepenseListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.depense.menu')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.depense.list.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <DepenseListToolbar />
            </Col>
          </Row>
        </Container>

        <DepenseListFilter />
        <DepenseListTable />
      </ContentWrapper>
    </>
  );
}

export default DepenseListPage;
