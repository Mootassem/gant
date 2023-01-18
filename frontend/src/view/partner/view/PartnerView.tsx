import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import GroupViewItem from 'src/view/group/view/GroupViewItem';

function PartnerView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.partner.fields.acronym')}
        value={record.acronym}
      />

      <TextViewItem
        label={i18n('entities.partner.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.partner.fields.email')}
        value={record.email}
      />

      <ImagesViewItem
        label={i18n('entities.partner.fields.logo')}
        value={record.logo}
      />

      <TextViewItem
        label={i18n('entities.partner.fields.postalAddress')}
        value={record.postalAddress}
      />

      <TextViewItem
        label={i18n('entities.partner.fields.postalCode')}
        value={record.postalCode}
      />

      <TextViewItem
        label={i18n('entities.partner.fields.city')}
        value={record.city}
      />

      <TextViewItem
        label={i18n('entities.partner.fields.country')}
        value={record.country}
      />

      <UserViewItem
        label={i18n('entities.partner.fields.members')}
        value={record.members}
      />

      <TextViewItem
        label={i18n('entities.partner.fields.type')}
        value={
          record.type &&
          i18n(
            `entities.partner.enumerators.type.${record.type}`,
          )
        }
      />

      <GroupViewItem
        label={i18n('entities.partner.fields.group')}
        value={record.group}
      />
    </ViewWrapper>
  );
}

export default PartnerView;
