import { ContentHeader } from "@app/components"

const Addinquiry = () => {
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
                                        className="form-control"
                                        id="student_name"
                                        placeholder="Enter Student Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="education">Education</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="qualification"
                                        placeholder="Enter Education"
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
                                    <label htmlFor="course">Course</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="course"
                                        placeholder="Enter Address"
                                    />
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
                                    <label htmlFor="status">Inquiry By</label>
                                    <select name="inquiry_by" id="inquiry_by" className='form-control'>
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
                                    <label htmlFor="status">Status</label>
                                    <select name="status" id="status" className='form-control'>
                                        <option value="" disabled selected>Select Status</option>
                                        <option value="running">Running</option>
                                        <option value="success">Success</option>
                                        <option value="closed">Closed</option>
                                    </select>
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
        </>
    )
}

export default Addinquiry;