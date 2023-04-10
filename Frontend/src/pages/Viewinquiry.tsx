import { ContentHeader } from "@app/components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Viewinquiry = () => {
    const cell = {
        textAlign: 'center'
      }
    
      const [data, setData] = useState('')
      useEffect(() => {
    
        axios.get(`http://localhost:8000/get_inquiry`)
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
                      <th>Education</th>
                      <th>Fees</th>
                      <th>Reference</th>
                      <th>Inquiry By</th>
                      <th>Extra Note</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((item,index) => {
                        return (
                          <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.course}</td>
                            <td>{item.mobile1}{' '}/{' '}{item.mobile2}</td>
                            <td>{item.education}</td>
                            <td>{item.fees}</td>
                            <td>{item.reference}</td>
                            <td>{item.inquiry}</td>
                            <td>{item.note}</td>
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
}

export default Viewinquiry