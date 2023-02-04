import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import courseService from '../services/timetable'

function Timetable() {
  const {uid}=useParams()
    const goregister = (id) => {
        window.location.replace(`/participants/${id}`)
    }

  const [course,setCourse]=useState()
    useEffect(() => {
      async function fetchData() {
        if (uid) {
          const course = await courseService.getFacultyCourse(uid)
          setCourse(course)
        }
      }
      fetchData()
    }, [uid])
    
  console.log(course)
  return (
    <>
      {course==null ? (
        <h3 className="warning">No class today</h3>
      ) : (
        <div className="container p-3 text-center">
          <h1>TimeTable</h1>
          <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Course Id</th>
                    <th>Course Code</th>
                    <th>Building</th>
                    <th>Day</th>
                    <th>Room</th>
                    <th>Strength</th>
                    <th>Timings</th>
                    <th>Specialization</th>
                    <th>Show Participants</th>
                  </tr>
                </thead>
                <tbody>
                {
                  course.map(d =>
                    d.courseSchedules.map( cs =>
                      <tr>
                        <td> {d.courseID}</td>
                        <td>{d.courseCode}</td>
                        <td>{cs.building}</td>
                        <td>{cs.day}</td>
                        <td>{cs.room}</td>
                        <td>{d.capacity}</td>
                        <td>{cs.time}</td>
                        <td>{d.specializationList[0].code}</td>
                        <td><Button variant="outline-success" onClick={goregister.bind(this,d.courseID)}>Students List</Button></td>
                      </tr>
                      )
                    )
                }
        </tbody>
          </Table>
        </div>
      )}
    </>
  )
}

export default Timetable
