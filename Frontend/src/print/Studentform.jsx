import axios from "axios"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
// import { date } from "yup"

const Studentform = (props) => {
    const cell = {
        fontSize: 14
    }
    const navigate = useNavigate();
    const current = new Date();
    const curTime = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const [data, setData] = useState('')
    useEffect(() => {

        axios.get(`http://localhost:8000/get_student/${props.id}`)
            .then(function (response) {
                setData(response.data)
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])

    const Print = () => {
        //console.log('print');  
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;

        // navigate('/');
    }


    if (data) {
        return (


            <div className="page" id="printablediv">
                {/* <button onClick={()=>{ Print()}}> */}
                    <div className="d-flex justify-content-center">
                        <img className="img_form" src="/img/Codesign.png" alt="" />
                    </div>
                {/* </button> */}

                <div>
                    <Table bordered width={'100%'} style={cell} cellPadding={20}>

                        <tbody>
                            <tr>
                                <th colSpan={7}>{data.name}</th>
                                <th colSpan={3}>REG. No. : {data.r_no}</th>
                            </tr>
                            <tr>
                                <th colSpan={3}>Course</th>
                                <td colSpan={4}>: {data.course.course_name}</td>
                                <td colSpan={3} rowSpan={4}></td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Course Content</th>
                                <td colSpan={4}>: {data.course.course_content.join(',')}</td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Contact No</th>
                                <td colSpan={4}>: {data.mobile1} / {data.mobile2}</td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Address</th>
                                <td colSpan={4}>: {data.address}</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Date Of Birth</th>
                                <td colSpan={2}>: {data.dob}</td>
                                <th colSpan={3}>Qualification</th>
                                <td colSpan={2}>: {data.qualification}</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Course Duration</th>
                                <td colSpan={2}>: {data.course.course_duration}</td>
                                <th colSpan={3}>Batch Time</th>
                                <td colSpan={2}>: {data.batch}</td>
                            </tr>
                            <tr>
                                <th colSpan={2}>Join Date</th>
                                <td colSpan={2}>: {data.start_date}</td>
                                <th colSpan={3}>End Date</th>
                                <td colSpan={2}>: {data.end_date}</td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Job Responsibility</th>
                                <td colSpan={7}>: {data.job}</td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Laptop Compulsory</th>
                                <td colSpan={7}>: {data.laptop}</td>
                            </tr>
                            <tr>
                                <th colSpan={3}>Reference</th>
                                <td colSpan={7}>: {data.reference}</td>
                            </tr>
                            <tr>
                                <th colSpan={10}>Fees Details : {data.fees} /-</th>
                            </tr>
                            <tr>
                                <td colSpan={10}>
                                    <table border={2} width={'100%'} cellSpacing={1} style={{ textAlign: "center" }} className='emi'>
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
                                            {data.emi.map((emi, index) => {
                                                if (index % 2 === 0) {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{emi.amount}</td>
                                                            <td>{emi.emidate}</td>
                                                            {data.emi[index + 1] ? (
                                                                <>
                                                                    <td>{index + 2}</td>
                                                                    <td>{data.emi[index + 1].amount}</td>
                                                                    <td>{data.emi[index + 1].emidate}</td>
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
                                </td>
                            </tr>
                            <tr>
                                <th colSpan={10}>
                                    **All the details above mentioned are provided by me is correct and I have signed after confirming.
                                </th>
                            </tr>
                        </tbody>
                    </Table>

                </div>
                <button onClick={() => { Print() }} className="printbutton">{date}{' '}{curTime}</button>

            </div>
        );
    }
}

export default Studentform;