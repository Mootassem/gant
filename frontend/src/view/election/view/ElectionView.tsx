import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import AssociationViewItem from 'src/view/association/view/AssociationViewItem';
import ObjectifViewItem from 'src/view/objectif/view/ObjectifViewItem';

function ElectionView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <TextViewItem
        label={i18n('entities.election.fields.name')}
        value={record.name}
      />

      <UserViewItem
        label={i18n('entities.election.fields.members')}
        value={record.members}
      />

      <TextViewItem
        label={i18n('entities.election.fields.startDate')}
        value={record.startDate}
      />

      <TextViewItem
        label={i18n('entities.election.fields.endDate')}
        value={record.endDate}
      />

      <FilesViewItem
        label={i18n('entities.election.fields.pv')}
        value={record.pv}
      />

      {/* <AssociationViewItem
        label={i18n('entities.election.fields.association')}
        value={record.association}
      />

      <ObjectifViewItem
        label={i18n('entities.election.fields.objectifs')}
        value={record.objetifs}
      /> */}
    </ViewWrapper>
  );
}

export default ElectionView;
