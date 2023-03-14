/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { ContentHeader } from '@components';
import axios from 'axios';

const SubMenu = () => {

  const [course,setCourse] = useState();

  useEffect(() => {
  
    axios.get('http://localhost:8000/course')
    .then(function (response) {
      // handle success
      console.log(response);
      setCourse(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  }, [])
  
  const getSinglecourse = (id) => {
    axios.get(`http://localhost:8000/course/${id}`)
    .then(function (response) {
      // handle success
      console.log(response);
      setCourse(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  if(course)
  {
    return (
      <div>
        <ContentHeader title="Add Students" />
        <section className="content">
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Enter Student Details</h3>
              </div>
              <form>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="RegNo">Registration Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Reg_no"
                      placeholder="Enter Registration Number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Student Name">Student Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="student_name"
                      placeholder="Enter Student Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Student Name">Select Course</label>
                    <select name="course" id="course" className='form-control'>
                      <option value="" disabled selected onChange={()=>{getSinglecourse(e.target.value)}}>Select Course</option>
                      {
                        course.map((item)=>{
                          return(
                            <option value={item._id}>{item.course_name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Birth Date">Birth Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date_of_birth"
                      onChange={(e)=>{console.log(e.target.value)}}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Qualification">Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      id="qualification"
                      placeholder="Enter Qualification"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Contact Number 1">Contact Number 1</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactnumber1"
                      placeholder="Enter Contact Number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Contact Number 2">Contact Number 2</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactnumber2"
                      placeholder="Enter Contact Number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="BatchTime">Select Time</label>
                    <select name="batchtime" id="batchtime" className='form-control'>
                      <option value="" disabled selected>Select Batch</option>
                      <option value="8 to 10">8 to 10</option>
                      <option value="10 to 12">10 to 12</option>
                      <option value="12 to 2">12 to 2</option>
                      <option value="2 to 4">2 to 4</option>
                      <option value="4 to 6">4 to 6</option>
                      <option value="6 to 8">6 to 8</option>
                      <option value="9 to 11 ( Night )">8 to 10 ( Night )</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="Joining Date">Joining Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="joining_date"
                      onChange={(e)=>{console.log(e.target.value)}}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Ending Date">Ending Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="ending_date"
                      onChange={(e)=>{console.log(e.target.value)}}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="laptop">Laptop Compulsory</label>
                    <select name="laptop" id="laptop" className='form-control'>
                      <option value="" disabled selected>Laptop Compulsory</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="job">Job Responsibility</label>
                    <select name="job" id="job" className='form-control'>
                      <option value="" disabled selected>Job Responsibility</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="refrence">Reference</label>
                    <input
                      type="text"
                      className="form-control"
                      id="reference"
                      placeholder="Enter Reference"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fees">Fees</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fees"
                      placeholder="Enter Fees"
                    />
                  </div>
  
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
  
          </div>
        </section>
      </div>
    );
  }
};

export default SubMenu;
