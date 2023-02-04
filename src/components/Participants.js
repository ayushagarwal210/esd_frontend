import React from "react";
import { useParams } from "react-router-dom";
import studentService from "../services/participants";
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react'

function Participants(){
  const {uid}=useParams();
  const [ data, setData] = useState([])
    useEffect(() => {
      async function fetchData() {
        if (uid) {
          const studentData = await studentService.getStudent(uid)
          setData(studentData)
        }
      }
      fetchData()
    }, [])
  console.log(data)
   return (
    <>
      {data==null ? (
        <h3 className="warning">No class today</h3>
      ) : (
        <div className="container p-3 text-center">
          <h1>TimeTable</h1>
          <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Student Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Roll Number</th>
                  </tr>
                </thead>
                <tbody>
                {
                  // console.log(data[0].student.firstName)
                  data.map(d =>

                      <tr>
                        <td> {d.student.studentID}</td>
                        <td> {d.student.firstName}</td>
                        <td>{d.student.lastName}</td>
                        <td>{d.student.rollNumber}</td>
                      </tr>
                      
                    // )
                    )
                }
        </tbody>
          </Table>
        </div>
      )}
    </>
  )
}
export default Participants