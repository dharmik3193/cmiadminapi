/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { ContentHeader } from '@components';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                  <th>Actions</th>
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
                        <td><Link to={`/student/${item._id}`}><Button variant="primary"><i className='fas fa-eye nav-icon'/></Button></Link></td>
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
