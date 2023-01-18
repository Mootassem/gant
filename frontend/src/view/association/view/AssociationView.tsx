import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import ElectionViewItem from 'src/view/election/view/ElectionViewItem';

function AssociationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.association.fields.name')}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n('entities.association.fields.logo')}
        value={record.logo}
      />

      <TextViewItem
        label={i18n('entities.association.fields.email')}
        value={record.email}
      />

      <TextViewItem
        label={i18n('entities.association.fields.phone')}
        value={record.phone}
      />

      <TextViewItem
        label={i18n('entities.association.fields.postalCode')}
        value={record.postalCode}
      />

      <TextViewItem
        label={i18n('entities.association.fields.city')}
        value={record.city}
      />

      <TextViewItem
        label={i18n('entities.association.fields.country')}
        value={record.country}
      />

      <UserViewItem
        label={i18n('entities.association.fields.admins')}
        value={record.admins}
      />

      <ElectionViewItem
        label={i18n('entities.association.fields.elections')}
        value={record.elections}
      />
    </ViewWrapper>
  );
}

export default AssociationView;
