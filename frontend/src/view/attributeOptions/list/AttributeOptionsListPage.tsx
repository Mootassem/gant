import React from 'react';
import { i18n } from 'src/i18n';
import AttributeOptionsListFilter from 'src/view/attributeOptions/list/AttributeOptionsListFilter';
import AttributeOptionsListTable from 'src/view/attributeOptions/list/AttributeOptionsListTable';
import AttributeOptionsListToolbar from 'src/view/attributeOptions/list/AttributeOptionsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { useRouteMatch } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

function AttributeOptionsListPage(props) {
  const match = useRouteMatch();
  const nameProduct = match.params.name;

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.attributeOptions.menu')],
        ]}
      />

      <ContentWrapper>
      <Container fluid={true}>
          <Row>
            <Col xs={9}>
        <PageTitle>
          {i18n('entities.attributeOptions.list.title')}
        </PageTitle>
        </Col>
            <Col md="auto">
        <AttributeOptionsListToolbar
          ProductId={nameProduct}
        />
           </Col>
          </Row>
        </Container>
        <AttributeOptionsListFilter
          productName={nameProduct}
        />
        <AttributeOptionsListTable />
      </ContentWrapper>
    </>
  );
}

export default AttributeOptionsListPage;
