import { ContentHeader } from "@app/components"
import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';


const Addinquiry = () => {

    const [name, setName] = useState('');
    const [education, setEducation] = useState('');
    const [address, setAddress] = useState('');
    const [mobile1, setMobile1] = useState('');
    const [mobile2, setMobile2] = useState('');
    const [course, setCourse] = useState('');
    const [reference, setReference] = useState('');
    const [inquiry, setInquiry] = useState('');
    const [status, setStatus] = useState('running')
    const [fees, setFees] = useState('');
    const [note, setNote] = useState('');


    const add_inquiry = (e) => {
        e.preventDefault();
        // console.log(name, education, address, mobile1, mobile2, course, reference, inquiry, status, fees, note);
        axios.post('http://localhost:8000/add_inquiry', {
        name: name,
        education:education,
        address: address,
        mobile1: mobile1,
        mobile2: mobile2,
        course: course,
        reference: reference,
        inquiry: inquiry,
        status:status,
        fees: fees,
        note:note
      })
        .then((response) => {
          console.log(response.data);
          toast.success("Inquiry Added Successfully")
          setName('');
          setEducation('');
          setAddress('');
          setMobile1('');
          setMobile2('');
          setCourse('');
          setReference('');
          setInquiry('');
          setFees('');
          setNote('');
        })
        .catch((error) => {
          console.log(error);
        });

    }

    return (
        <>
            <ContentHeader title="Add Inquiry" />
            <section className="content">
                <div className="container-fluid">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Enter Inquiry Details</h3>
                        </div>
                        <form>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="name">Student Name</label>
                                    <input
                                        type="text"
                                        onChange={(e) => { setName(e.target.value) }}
                                        className="form-control"
                                        id="student_name"
                                        value={name}
                                        placeholder="Enter Student Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="education">Education</label>
                                    <input
                                        type="text"
                                        onChange={(e) => { setEducation(e.target.value) }}
                                        className="form-control"
                                        value={education}
                                        id="qualification"
                                        placeholder="Enter Education"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => { setAddress(e.target.value) }}
                                        className="form-control"
                                        id="address"
                                        placeholder="Enter Address"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Contact Number 1">Contact Number 1</label>
                                    <input
                                        type="text"
                                        onChange={(e) => { setMobile1(e.target.value) }}
                                        className="form-control"
                                        value={mobile1}
                                        id="contactnumber1"
                                        placeholder="Enter Contact Number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Contact Number 2">Contact Number 2</label>
                                    <input
                                        type="text"
                                        onChange={(e) => { setMobile2(e.target.value) }}
                                        className="form-control"
                                        value={mobile2}
                                        id="contactnumber2"
                                        placeholder="Enter Contact Number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="course">Course</label>
                                    <input
                                        type="text"
                                        onChange={(e) => { setCourse(e.target.value) }}
                                        className="form-control"
                                        value={course}
                                        id="course"
                                        placeholder="Enter Address"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="refrence">Reference</label>
                                    <input
                                        type="text"
                                        onChange={(e) => { setReference(e.target.value) }}
                                        className="form-control"
                                        value={reference}
                                        id="reference"
                                        placeholder="Enter Reference"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="status">Inquiry By</label>
                                    <select name="inquiry_by" id="inquiry_by" value={inquiry} onChange={(e) => { setInquiry(e.target.value) }} className='form-control'>
                                        <option value="" disabled selected>Select Faculty</option>
                                        <option value="abhi">Abhishek Sir</option>
                                        <option value="dharmik">Dharmik Sir</option>
                                        <option value="akshay">Akshay Sir</option>
                                        <option value="bhavin">Bhavin Sir</option>
                                        <option value="bhumi">Bhumi Mam</option>
                                        <option value="trusha">Trusha Mam</option>
                                        <option value="ruchi">Ruchita Mam</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fees">Fees</label>
                                    <input
                                        type="text"
                                        onChange={(e) => { setFees(e.target.value) }}
                                        className="form-control"
                                        value={fees}
                                        id="fees"
                                        placeholder="Enter Fees"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="note">Extra Note</label>
                                    <input
                                        type="text"
                                        onChange={(e) => { setNote(e.target.value) }}
                                        className="form-control"
                                        value={note}
                                        id="note"
                                        placeholder="Enter Extra Note"
                                    />
                                </div>

                            </div>
                            <div className="card-footer">
                                <button type="submit" onClick={add_inquiry} className="btn btn-primary">
                                    Add Inquiry
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Addinquiry;