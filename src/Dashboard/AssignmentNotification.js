import React, { useState, useEffect } from 'react'
import './style.css'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
function AssignmentNotification() {

  const [messageA, setMessageA] = useState(' ')
  const [DepartmentA, setDepartmentA] = useState('ELECTRICAL AND ELECTRONIC ENGINEERING')
  const [programmA, setprogrammA] = useState('MORNING')
  const [levelA, setlevelA] = useState(' ')
  const [timeA, settimeA] = useState(' ')


  const location = useLocation();
  const state = location.state;



  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(messageA, DepartmentA, programmA, levelA, timeA)
    if (!messageA || !DepartmentA || !programmA || !levelA || !timeA) return alert("please enter all the field")
    else {
      axios.post('https://gold-bunny-garb.cyclic.app/AssigmentSchema', {
        messageA, DepartmentA, levelA, programmA, timeA
      }).then((res) => {
    
    setMessageA("")
        setlevelA(" ")
        settimeA(" ")
        alert("it was successfully sent")

      })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <main>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li><i className='bx bx-chevron-right' ></i></li>
            <li>
              <Link className="active" to='/Admin/Dashboard/Notification'>Assignment Notification</Link>
            </li>
          </ul>
        </div>
        <a href="#" className="btn-download">
          <i className='bx bxs-cloud-download' ></i>
          <span className="text">Download PDF</span>
        </a>
      </div>

      <section className="container">
        <div >
          {state ? (
            <form className="form  my-4 " onSubmit={HandleSubmit} >

              <div>
                <label htmlFor="name">Edit ASSIGNMENT</label>
                <textarea type="text" className="form-control" onChange={(e) => setMessageA(e.target.value)} value={messageA} placeholder="enter your message" name="message"></textarea>
              </div>
              <div>
                <label htmlFor="department">DEPARTMENT</label>
                <input className="form-control department" name="department" id="cars" value={state?.DepartmentA} onChange={(e) => setDepartmentA(e.target.value)} />
              </div>

              <div>
                <label htmlFor="mat">PROGRAM</label>
                <input className="form-control morneven" name="morneven" id="cars" value={state?.programmA} onChange={(e) => setprogrammA(e.target.value)} />

              </div>
              <div>
                <label htmlFor="mat">LEVEL</label>
                <input className="form-control level" name="level" id="cars" value={levelA} placeholder='Enter the Level' onChange={(e) => setlevelA(e.target.value)} />

              </div>
              <div>
                <label htmlFor="date">TIME OF SUBMITION</label>
                <input type="date" name="time" className="form-control " value={timeA} onChange={(e) => settimeA(e.target.value)} />
              </div>
              <button type="submit" className="form-control btn-primary btn btns  my-4">Click To Submit</button>
            </form>
          ) : (
            <form className="form  my-4 " onSubmit={HandleSubmit} >

              <div>
                <label htmlFor="name">ASSIGNMENT</label>
                <textarea type="text" className="form-control" onChange={(e) => setMessageA(e.target.value)} placeholder="enter your message" name="message"></textarea>
              </div>
              <div>
                <label htmlFor="department">DEPARTMENT</label>
                <input className="form-control department" name="department" id="cars" value={DepartmentA} onChange={(e) => setDepartmentA(e.target.value)} />
              </div>

              <div>
                <label htmlFor="mat">PROGRAM</label>
                <input className="form-control morneven" name="morneven" id="cars" value={programmA} onChange={(e) => setprogrammA(e.target.value)} />

              </div>
              <div>
                <label htmlFor="mat">LEVEL</label>
                <input className="form-control level" name="level" id="cars" value={levelA} placeholder='Enter the Level' onChange={(e) => setlevelA(e.target.value)} />

              </div>
              <div>
                <label htmlFor="date">TIME OF SUBMITION</label>
                <input type="date" name="time" className="form-control " onChange={(e) => settimeA(e.target.value)} />
              </div>
              <button type="submit" className="form-control btn-primary btn btns  my-4">Click To Submit</button>
            </form>
          )}
        </div>
      </section>
    </main>

  )
}

export default AssignmentNotification




