import { SmallBox } from '@app/components';
import React, { useEffect, useState } from 'react';
import { ContentHeader } from '@components';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import axios from 'axios';

const Dashboard = () => {

  const navigate = useNavigate();
  useEffect(() => {

    var isLoggedin = sessionStorage.getItem('isLoggedin')

    if (!isLoggedin) {
      navigate('/login')
    }


  }, [])

  const [admission, setAdmission] = useState('')
  const [inquiry, setInquiry] = useState('');
  useEffect(() => {

    axios.get(`http://localhost:8000/get_student`)
      .then(function (response) {
        setAdmission(response.data)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

      axios.get(`http://localhost:8000/get_inquiry`)
      .then(function (response) {
        setInquiry(response.data)
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])


  return (
    <div>
      <ContentHeader title="Dashboard" />

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{inquiry.length}</h3>
                  <p>Total Inquiry</p>
                </div>
                <div className="icon">
                  <Icon icon="material-symbols:question-mark-rounded" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>
                    {admission.length}<sup style={{ fontSize: '20px' }}></sup>
                  </h3>

                  <p>Total Admissions</p>
                </div>
                <div className="icon">
                  <Icon icon="mdi:account-student" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>44</h3>

                  <p>User Registrations</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>65</h3>

                  <p>Unique Visitors</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
                </div>
                <a href="/" className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
