import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import PartnerViewItem from 'src/view/partner/view/PartnerViewItem';

function GroupView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.group.fields.name')}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n('entities.group.fields.logo')}
        value={record.logo}
      />

      <UserViewItem
        label={i18n('entities.group.fields.admin')}
        value={record.admin}
      />

      <UserViewItem
        label={i18n('entities.group.fields.members')}
        value={record.members}
      />

      <PartnerViewItem
        label={i18n('entities.group.fields.partners')}
        value={record.partners}
      />

      <TextViewItem
        label={i18n('entities.group.fields.type')}
        value={
          record.type &&
          i18n(
            `entities.group.enumerators.type.${record.type}`,
          )
        }
      />
    </ViewWrapper>
  );
}

export default GroupView;
