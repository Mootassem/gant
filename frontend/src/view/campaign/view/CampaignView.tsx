import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import MembershipViewItem from 'src/view/membership/view/MembershipViewItem';
import {
  Tabs,
  Tab,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import MembershipListFilter from 'src/view/membership/list/MembershipListFilter';
import MembershipListTable from 'src/view/membership/list/MembershipListTable';

function CampaignView(props) {
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
              <Col xs={8}>
                <TextViewItem
                  label={i18n(
                    'entities.campaign.fields.name',
                  )}
                  value={record.name}
                />
              </Col>
              <Col>
                <TextViewItem
                  label={i18n(
                    'entities.campaign.fields.status',
                  )}
                  value={
                    record.status &&
                    i18n(
                      `entities.campaign.enumerators.status.${record.status}`,
                    )
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextViewItem
                  label={i18n(
                    'entities.campaign.fields.startDate',
                  )}
                  value={record.startDate}
                />
              </Col>
              <Col>
                <TextViewItem
                  label={i18n(
                    'entities.campaign.fields.endDate',
                  )}
                  value={record.endDate}
                />
              </Col>
              <Col>
                <TextViewItem
                  label={i18n(
                    'entities.campaign.fields.year',
                  )}
                  value={record.year}
                />
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab
          eventKey="membership"
          title={i18n('entities.membership.menu')}
        >
          <ContentWrapper>
            <MembershipListFilter />
            <MembershipListTable data={record.membership} />
          </ContentWrapper>
        </Tab>
      </Tabs>
    </ViewWrapper>
  );
}

export default CampaignView;
