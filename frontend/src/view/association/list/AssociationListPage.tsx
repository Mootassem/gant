import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { i18n } from 'src/i18n';
import AssociationListFilter from 'src/view/association/list/AssociationListFilter';
import AssociationListTable from 'src/view/association/list/AssociationListTable';
import AssociationListToolbar from 'src/view/association/list/AssociationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function AssociationListPage(props) {
  const getAssociation = () => {
    const associationASString =
      localStorage.getItem('association') || null;

    if (associationASString) {
      return JSON.parse(associationASString);
    }

    return null;
  };
  const association = getAssociation();
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.association.menu')],
        ]}
      />

      {association === null || association.count === 0 ? (
        <ContentWrapper>
          <Container fluid={true}>
            <Row>
              <Col xs={9}>
                <PageTitle>
                  {i18n('entities.association.list.title')}
                </PageTitle>
              </Col>
              <Col md="auto">
                <AssociationListToolbar />
              </Col>
            </Row>
          </Container>

          <AssociationListFilter />
          <AssociationListTable />
        </ContentWrapper>
      ) : (
        <ContentWrapper>
          <PageTitle>
            {i18n('entities.association.list.title')}
          </PageTitle>
          <div style={{ display: 'none' }}>
            <AssociationListFilter />
          </div>
          <AssociationListTable />
        </ContentWrapper>
      )}
    </>
  );
}

export default AssociationListPage;
