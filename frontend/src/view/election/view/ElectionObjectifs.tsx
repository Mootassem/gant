import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import AssociationViewItem from 'src/view/association/view/AssociationViewItem';
import ObjectifViewItem from 'src/view/objectif/view/ObjectifViewItem';

function ElectionObjectifs(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <ObjectifViewItem
        label={i18n('entities.election.fields.objectifs')}
        value={record.objetifs}
      />
    </ViewWrapper>
  );
}

export default ElectionObjectifs;
