import React, { useState, useEffect } from 'react';
import FormSubmit from './FormSubmit';
import showcase from '../assets/professor.jpeg';
import CardGroup from '../SubComponent/CardAssignments';
// import Receipt from '../Whatsapp';
import axios from 'axios';
import CountdownTimer from './CountDown';
// import DocumentDashboard from '../UserDetails/DocumentDashboard';
// import DocumentUploadForm from '../UserDetails/UploadDoc';
// import LoginForm from '../UserDetails/Login';
// import SignUpForm from '../UserDetails/SignUp';





function Home({ targetDate = '2023-04-24' }) {
  const [countdownTime, setCountdownTime] = useState((new Date(targetDate) - new Date()) / 1000);
  const [mute, setMute] = useState(false)
  const [assign,setAssign] = useState([])
  const [data, setData] = useState([]);

  const [count, setCount]= useState(0)
  const formatCountdownTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / (24 * 60 * 60));
    const hours = Math.floor((timeInSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return { days, hours, minutes, seconds };
  };
  const { days, hours, minutes, seconds } = formatCountdownTime(countdownTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownTime((prevTime) => {
        const timeRemaining = prevTime - 1;
        if (timeRemaining <= 0) {
          clearInterval(interval);
          setMute(true);
          return 0;
        }
        return timeRemaining;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    axios
      .get("http://localhost:3005/AssigmentSchema/home")
      .then((response) => {
        setData(response.data);
        
        console.log(response.data)
      });
if( data.length > 0 ){
  setMute(false);
}else{
  setMute(true);
}   
  }, [data]);

  useEffect(() => {
    if (days === 0 && seconds === 0 && minutes === 0 && hours === 0) {
      setMute(true);
    }
    if (seconds < 0) {
      setMute(true);
    }
    else (
      setMute(false)
    )
  }, [days, seconds]);


  return (
    <div className='container-fluid px-0'>
      <div className='row no-gutters'>
      <div className='col-md-12'>
          <img src={showcase} alt="Showcase" className='w-100' style={{ height: '70vh', objectFit: 'cover', objectPosition: 'center' }} />
        </div>
  
      </div>
      { false  &&  <CountdownTimer days={days} hours={hours} minutes={minutes} seconds={seconds} />}

     
      <div className='row no-gutters'>
        <div className='col-md-6 py-3 px-5 d-flex align-items-center'>
          <div className='w-100'>
            <h1 className='display-4 mb-4'>NEED'S COMPUTER HELP?</h1>
            <h2 className='mb-4'>Engr. Mr. USMAN ABDUL-RASHEED </h2>
            <p className='lead mb-4'>"Hello everyone, my name Engr. Mr. RASHEED and I am Lecturer of Computer Engineering here at Auchi Polytechnic. I  have been teaching and researching in this field for over 6 years.</p>
            <button className='btn btn-primary btn-lg'>CONTACT NOW</button>
          </div>
        </div>
        <div className='col-md-6'>
        <CardGroup  setAssign={setAssign}/>
        <FormSubmit mute={mute} />
        </div>
      </div>
    


    </div>
  )
}

export default Home;
