/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { ContentHeader } from '@components';
import axios from 'axios';

const Blank = () => {

  const cell = {
    textAlign: 'center'
  }

  const [data, setData] = useState('')
  useEffect(() => {

    axios.get(`http://localhost:8000/get_student`)
      .then(function (response) {
        setData(response.data)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  if (data) {
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
              <tbody>
                {
                  data.map((item) => {
                    return (
                      <tr>
                        <td>{item.r_no}</td>
                        <td>{item.student_name}</td>
                        <td>{item.course}</td>
                        <td>{item.mobile1}{' '}/{' '}{item.mobile2}</td>
                        <td>{item.batch}</td>
                        <td>{item.laptop}</td>
                        <td>{item.fees}</td>
                        <td>{item.reference}</td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
};

export default Blank;
