import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/charge/view/chargeViewActions';
import selectors from 'src/modules/charge/view/chargeViewSelectors';
import ChargeView from 'src/view/charge/view/ChargeView';
import ChargeViewToolbar from 'src/view/charge/view/ChargeViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function ChargePage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.charge.menu'), '/charge'],
          [i18n('entities.charge.view.title')],
        ]}
      />

      <ContentWrapper>
        <Container fluid={true}>
          <Row>
            <Col xs={9}>
              <PageTitle>
                {i18n('entities.charge.view.title')}
              </PageTitle>
            </Col>
            <Col md="auto">
              <ChargeViewToolbar match={match} />
            </Col>
          </Row>
        </Container>

        <ChargeView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default ChargePage;
