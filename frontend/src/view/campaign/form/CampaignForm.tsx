import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ButtonIcon from 'src/view/shared/ButtonIcon';
import FormWrapper from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import campaignEnumerators from 'src/modules/campaign/campaignEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import MembershipAutocompleteFormItem from 'src/view/membership/autocomplete/MembershipAutocompleteFormItem';
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
import MembershipListToolbar from 'src/view/membership/list/MembershipListToolbar';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.campaign.fields.name'),
    {},
  ),

  status: yupFormSchemas.enumerator(
    i18n('entities.campaign.fields.status'),
    {
      options: campaignEnumerators.status,
    },
  ),
  year: yupFormSchemas.integer(
    i18n('entities.campaign.fields.year'),
    {},
  ),
  startDate: yupFormSchemas.date(
    i18n('entities.campaign.fields.startDate'),
    {},
  ),
  endDate: yupFormSchemas.date(
    i18n('entities.campaign.fields.endDate'),
    {},
  ),
});

function CampaignForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      status: record.status,
      year: record.year,
      startDate: record.startDate
        ? moment(record.startDate, 'YYYY-MM-DD').toDate()
        : null,
      endDate: record.endDate
        ? moment(record.endDate, 'YYYY-MM-DD').toDate()
        : null,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const data = {
      membership: props.record?.membership,
      ...values,
    };
    props.onSubmit(props.record?.id, data);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Tabs
            defaultActiveKey="information"
            id="0"
            className="mb-3"
          >
            <Tab eventKey="information" title="Information">
              <Container fluid={true}>
                <Row>
                  <Col xs={8}>
                    <InputFormItem
                      name="name"
                      label={i18n(
                        'entities.campaign.fields.name',
                      )}
                      required={false}
                      autoFocus
                    />
                  </Col>
                  <Col>
                    <SelectFormItem
                      name="status"
                      label={i18n(
                        'entities.campaign.fields.status',
                      )}
                      options={campaignEnumerators.status.map(
                        (value) => ({
                          value,
                          label: i18n(
                            `entities.campaign.enumerators.status.${value}`,
                          ),
                        }),
                      )}
                      required={false}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <DatePickerFormItem
                      name="startDate"
                      label={i18n(
                        'entities.campaign.fields.startDate',
                      )}
                      required={false}
                    />
                  </Col>
                  <Col>
                    <DatePickerFormItem
                      name="endDate"
                      label={i18n(
                        'entities.campaign.fields.endDate',
                      )}
                      required={false}
                    />
                  </Col>
                  <Col>
                    <InputNumberFormItem
                      name="year"
                      label={i18n(
                        'entities.campaign.fields.year',
                      )}
                      required={false}
                    />
                  </Col>
                </Row>
              </Container>
            </Tab>
            {props.record?.id && (
              <Tab
                eventKey="membership"
                title={i18n('entities.membership.menu')}
              >
                <ContentWrapper>
                  <MembershipListToolbar
                    campaign={props.record.id}
                  />
                  <MembershipListFilter
                    campaign={props.record.id}
                  />
                  <MembershipListTable
                    data={props.record.membership}
                  />
                </ContentWrapper>
              </Tab>
            )}
          </Tabs>

          <div className="form-buttons">
            <button
              className="btn btn-primary"
              disabled={props.saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              <ButtonIcon
                loading={props.saveLoading}
                iconClass="far fa-save"
              />
              {i18n('common.save')}
            </button>

            <button
              className="btn btn-light"
              type="button"
              disabled={props.saveLoading}
              onClick={onReset}
            >
              <i className="fas fa-undo"></i>
              {i18n('common.reset')}
            </button>

            {props.onCancel ? (
              <button
                className="btn btn-light"
                type="button"
                disabled={props.saveLoading}
                onClick={() => props.onCancel()}
              >
                <i className="fas fa-times"></i>
                {i18n('common.cancel')}
              </button>
            ) : null}
          </div>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default CampaignForm;
