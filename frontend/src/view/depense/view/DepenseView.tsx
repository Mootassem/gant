import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ChargeViewItem from 'src/view/charge/view/ChargeViewItem';
import {
  Tabs,
  Tab,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import moment from 'moment';

function DepenseView(props) {
  const { record, loading } = props;
  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Tabs
        defaultActiveKey="information"
        id="0"
        className="mb-3"
      >
        <Tab eventKey="information" title="Information">
          <Container fluid={true}>
            <Row>
              <Col>
                <TextViewItem
                  label={i18n(
                    'entities.depense.fields.facture',
                  )}
                  value={
                    record.facture
                      ? i18n('common.yes')
                      : i18n('common.no')
                  }
                />
              </Col>
              <Col>
                <TextViewItem
                  label={i18n(
                    'entities.depense.fields.amount',
                  )}
                  value={record.amount}
                />
              </Col>
              <Col>
                <TextViewItem
                  label={i18n(
                    'entities.depense.fields.type',
                  )}
                  value={
                    record.type &&
                    i18n(
                      `entities.depense.enumerators.type.${record.type}`,
                    )
                  }
                />
              </Col>
              <Col>
                <TextViewItem
                  label={i18n(
                    'entities.depense.fields.date',
                  )}
                  value={record.date}
                />
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab
          eventKey="charge"
          title={i18n('entities.charge.menu')}
        >
          {record.charge ? (
            <ContentWrapper>
              {record.charge.map((element) => (
                <Container fluid={true}>
                  <Row>
                    <Col>
                      <TextViewItem
                        label={i18n(
                          'entities.charge.fields.amount',
                        )}
                        value={element.amount}
                      />
                    </Col>
                    <Col>
                      <TextViewItem
                        label={i18n(
                          'entities.charge.fields.type',
                        )}
                        value={
                          element.type &&
                          i18n(
                            `entities.charge.enumerators.type.${element.type}`,
                          )
                        }
                      />
                    </Col>
                    <Col>
                      <TextViewItem
                        label={i18n(
                          'entities.depense.fields.date',
                        )}
                        value={moment(
                          element.createdAt,
                        ).format('YYYY-MM-DD')}
                      />
                    </Col>
                  </Row>
                </Container>
              ))}
            </ContentWrapper>
          ) : null}
        </Tab>
      </Tabs>
    </ViewWrapper>
  );
}

export default DepenseView;
