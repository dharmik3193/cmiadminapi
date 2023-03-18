/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {ContentHeader} from '@components';

const Blank = () => {

  const cell={
    textAlign:'center'
  }

  return (
    <div>
      <ContentHeader title="Student Data" />
      <section className="content">
        <div className="container-fluid">
          {/* <div className="card">
            <div className="card-header">
              <h3 className="card-title">Title</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-widget="collapse"
                  data-toggle="tooltip"
                  title="Collapse"
                >
                  <i className="fa fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-widget="remove"
                  data-toggle="tooltip"
                  title="Remove"
                >
                  <i className="fa fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              Start creating your amazing application!
            </div>
            <div className="card-footer">Footer</div>
          </div> */}
          <table cellPadding={10} cellSpacing={0} border={2} width={'100%'} style={cell}>
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Course</th>
                <th>Mobile</th>
                <th>Batch</th>
                <th>Laptop</th>
                <th>Fees</th>
                <th>Reference</th>
              </tr>
            </thead>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Blank;
