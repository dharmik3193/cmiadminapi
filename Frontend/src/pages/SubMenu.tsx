/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { ContentHeader } from '@components';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Button, Modal } from 'react-bootstrap';
import Studentform from '../print/Studentform';

const SubMenu = () => {

  const [courses, setCourses] = useState();
  const [registrationNo, setRegistrationNo] = useState('');
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');
  const [dob, setDob] = useState('');
  const [qualification, setQualification] = useState('');
  const [mobile1, setMobile1] = useState('');
  const [mobile2, setMobile2] = useState('');
  const [address, setAddress] = useState('');
  const [batch_time, setBatch_time] = useState('');
  const [join_date, setJoin_date] = useState('');
  const [end_date, setEnd_date] = useState('');
  const [laptop, setLaptop] = useState(false);
  const [job, setJob] = useState(false);
  const [reference, setReference] = useState('');
  const [fees, setFees] = useState(0);
  const [tempfees, setTempfees] = useState(0);
  const [emi, setEmi] = useState(0);
  const [emidate, setEmidate] = useState('');
  const [emidata, setemidata] = useState([])
  const [show, setShow] = useState(false);
  const [student_id, setstudent_id] = useState();


  const handleClose = () => {
    console.log("close");
    
    setShow(false)
  };
  const handleShow = () => setShow(true);

  useEffect(() => {

    axios.get('http://localhost:8000/course')
      .then(function (response) {
        // handle success
        console.log(response);
        setCourses(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])


  const add_data = (e) => {
    e.preventDefault();

    if (emi!=[] && tempfees==0) {
      axios.post('http://localhost:8000/add_student', {
        r_no: registrationNo,
        student_name: studentName,
        course: course,
        dob: dob,
        qualification: qualification,
        mobile1: mobile1,
        mobile2: mobile2,
        address: address,
        batch: batch_time,
        start_date: join_date,
        end_date: end_date,
        laptop: laptop,
        job: job,
        reference: reference,
        fees: fees,
        emi: emidata
      })
        .then((response) => {
          // console.log(response.data);
          // student_id =  response.data._id;
          setstudent_id(response.data._id)
          handleShow();
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      alert("Please Fill Up Form Correctly")
    }

  }

  const add_emi = (e) => {
    e.preventDefault();
    let emiobj = {
      amount: emi,
      emidate: emidate
    }
    if (tempfees > 0 && emi <= tempfees) {
      emidata.push(emiobj)
      setTempfees(tempfees - emi)
    } else {
      toast.error("Please Enter Valid EMI")
    }
    console.log(emidata);

  }

  const setfees = (fee) => {
    setFees(fee);
    setTempfees(fee);
  }


  if (courses) {
    return (
      <div>

        {/* ========================= Model Start ============================== */}

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Student Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {console.log(student_id)}
            <Studentform id={student_id}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={()=>{Print()}}>Understood</Button> */}
          </Modal.Footer>
        </Modal>

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
                      onChange={(e) => { setRegistrationNo(e.target.value) }}
                      placeholder="Enter Registration Number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Student Name">Student Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="student_name"
                      onChange={(e) => { setStudentName(e.target.value) }}
                      placeholder="Enter Student Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Student Name">Select Course</label>
                    <select name="course" id="course" onChange={(e) => { setCourse(e.target.value) }} className='form-control'>
                      <option value="" disabled selected>Select Course</option>
                      {
                        courses.map((item) => {
                          return (
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
                      onChange={(e) => { setDob(e.target.value) }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Qualification">Qualification</label>
                    <input
                      type="text"
                      className="form-control"
                      id="qualification"
                      placeholder="Enter Qualification"
                      onChange={(e) => { setQualification(e.target.value) }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Contact Number 1">Contact Number 1</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactnumber1"
                      placeholder="Enter Contact Number"
                      onChange={(e) => { setMobile1(e.target.value) }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Contact Number 2">Contact Number 2</label>
                    <input
                      type="text"
                      className="form-control"
                      id="contactnumber2"
                      placeholder="Enter Contact Number"
                      onChange={(e) => { setMobile2(e.target.value) }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      onChange={(e) => { setAddress(e.target.value) }}
                      placeholder="Enter Address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="BatchTime">Select Time</label>
                    <select name="batchtime" id="batchtime" onChange={(e) => { setBatch_time(e.target.value) }} className='form-control'>
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
                      onChange={(e) => { setJoin_date(e.target.value) }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Ending Date">Ending Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="ending_date"
                      onChange={(e) => { setEnd_date(e.target.value) }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="laptop">Laptop Compulsory</label>
                    <select name="laptop" id="laptop" onChange={(e) => { setLaptop(e.target.value) }} className='form-control'>
                      <option value="" disabled selected>Laptop Compulsory</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="job">Job Responsibility</label>
                    <select name="job" id="job" onChange={(e) => { setJob(e.target.value) }} className='form-control'>
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
                      onChange={(e) => { setReference(e.target.value) }}
                      placeholder="Enter Reference"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fees">Fees</label>
                    <input
                      type="text"
                      className="form-control"
                      id="fees"
                      onChange={(e) => { setfees(e.target.value) }}
                      placeholder="Enter Fees"
                    />
                  </div>
                  <div className='row'>
                    <div className="form-group col-xl-3 col-sm-4">
                      <label htmlFor="fees">EMI Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fees"
                        onChange={(e) => { setEmi(e.target.value) }}
                        placeholder="Enter Amount"
                      />
                    </div>
                    <div className="form-group col-xl-3 col-sm-4">
                      <label htmlFor="fees">EMI Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="fees"
                        onChange={(e) => { setEmidate(e.target.value) }}
                        placeholder="Enter Date"
                      />
                    </div>
                    <div className="form-group col-xl-3 col-sm-4">
                      <label htmlFor="fees">Remaining Amount</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fees"
                        disabled
                        value={tempfees}
                        placeholder="Enter Date"
                      />
                    </div>

                    <div className="form-group col-xl-3 col-sm-4">
                      <label htmlFor="fees"></label>
                      <div className="my-2">
                        <button type="submit" onClick={(e) => { add_emi(e) }} className="btn btn-primary">
                          Add EMI
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <table border={2} width={'100%'} cellSpacing={0} style={{ textAlign: "center" }}>
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Amount</th>
                          <th>Date</th>
                          <th>No.</th>
                          <th>Amount</th>
                          <th>Date</th>
                        </tr>
                      </thead>

                      <tbody>
                        {emidata.map((emi, index) => {
                          if (index % 2 === 0) {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{emi.amount}</td>
                                <td>{emi.emidate}</td>
                                {emidata[index + 1] ? (
                                  <>
                                    <td>{index + 2}</td>
                                    <td>{emidata[index + 1].amount}</td>
                                    <td>{emidata[index + 1].emidate}</td>
                                  </>
                                ) : (
                                  <td colSpan="3"></td>
                                )}
                              </tr>
                            );
                          }
                        })}
                      </tbody>

                    </table>
                  </div>

                </div>
                <div className="card-footer">
                  <button type="submit" onClick={(e) => { add_data(e) }} className="btn btn-primary">
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
