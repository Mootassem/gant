import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import FormuleViewItem from 'src/view/formule/view/FormuleViewItem';
import CampaignViewItem from 'src/view/campaign/view/CampaignViewItem';

function MembershipView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.membership.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.membership.enumerators.status.${record.status}`,
          )
        }
      />

      <TextViewItem
        label={i18n(
          'entities.membership.fields.paymentMethod',
        )}
        value={
          record.paymentMethod &&
          i18n(
            `entities.membership.enumerators.paymentMethod.${record.paymentMethod}`,
          )
        }
      />

      <FormuleViewItem
        label={i18n('entities.membership.fields.formule')}
        value={record.formule}
      />

      <FilesViewItem
        label={i18n(
          'entities.membership.fields.attachements',
        )}
        value={record.attachements}
      />

      <UserViewItem
        label={i18n('entities.membership.fields.member')}
        value={record.user}
      />

      <CampaignViewItem
        label={i18n('entities.membership.fields.campaign')}
        value={record.campaign}
      />

      <TextViewItem
        label={i18n('entities.membership.fields.amount')}
        value={record.amount}
      />
    </ViewWrapper>
  );
}

export default MembershipView;
