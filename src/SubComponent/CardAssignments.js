import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
// import moment from "moment";

const CardGroup = () => {
  const [data, setData] = useState([]);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-CA');
  useEffect(() => {
    axios
      .get("http://localhost:3005/AssigmentSchema/home")
      .then((response) => {
        setData(response.data);
        
        console.log(response.data)
      });
  }, []);



   
  

  // const getTimeDifference = (time) => {
  //   const diff = moment.duration(moment().diff(moment(time)));
  //   return `${diff.days()} days, ${diff.hours()} hours, ${diff.minutes()} minutes, ${diff.seconds()} seconds`;
  // };

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((ele, index) => {
          const {
            _id,
            messageA,
            DepartmentA,
            levelA,
            programmA,
            timeA,
          } = ele;
          
  if(formattedDate ===  timeA){
    console.log(_id)
    axios
      .post(`http://localhost:3005/AssigmentSchema/Delete/home`, {
        _id
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  
  
  }
          return (
            <div key={index} className="col">
              <div className="card h-100 shadow">
                <div className="card-header bg-primary text-white fw-bold">
                  {DepartmentA} Notification
                </div>
                <div className="card-body">
                  <h5 className="card-title">{messageA}</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                      <i className="fas fa-graduation-cap me-2 text-primary"></i>
                      <span>{levelA} | {programmA}</span>
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <i className="far fa-clock me-2 text-primary"></i>
                      <span>To be submitted 11.59pm before {timeA} </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardGroup;
