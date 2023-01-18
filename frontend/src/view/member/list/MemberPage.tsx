import React from 'react';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import MemberFilter from 'src/view/member/list/MemberFilter';
import MemberTable from 'src/view/member/list/MemberTable';

function MemberPage() {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('user.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{i18n('user.title')}</PageTitle>

        <MemberFilter />
        <MemberTable />
      </ContentWrapper>
    </>
  );
}

export default MemberPage;
