import React from 'react';
import { i18n } from 'src/i18n';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import { Link } from 'react-router-dom';
const ChooseForm = () => {
  let physical = 'physical';
  let digital = 'digitale';

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('auth.profile.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>{i18n('add Product')}</PageTitle>

        <div className="row">
          <div className="col-sm-6 col-md-6">
            <Link to={`/product/new/${physical}`}>
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="text-center py-3">
                    <div className="d-inline-block">
                      <div className="icon-big text-center icon-primary bubble-shadow-small  px-3">
                        <i className="fab fa-product-hunt" />
                      </div>
                    </div>
                    <div className="d-block mt-3">
                      <div className="numbers">
                        <h2 className="card-title">
                          <b>Add Physical Product</b>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6">
            <Link to={`/product/new/${digital}`}>
              <div className="card card-stats card-round">
                <div className="card-body">
                  <div className="text-center py-3">
                    <div className="d-inline-block">
                      <div className="icon-big text-center icon-primary bubble-shadow-small  px-3">
                        <i className="fab fa-digital-ocean" />
                      </div>
                    </div>
                    <div className="d-block mt-3">
                      <div className="numbers">
                        <h2 className="card-title">
                          <b>Add Digital Product</b>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default ChooseForm;
