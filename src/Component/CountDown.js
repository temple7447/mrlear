import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ days, hours, minutes, seconds }) => {
  const [counting, setCounting] = useState(true)

  useEffect(() => {
    if (days === 0 && seconds === 0 && minutes === 0 && hours === 0) {
      setCounting(false)
    }
  }, [days, hours, minutes, seconds])





  return (
    <div>
      {counting ? (<div className="text-center my-5">
        <div className="row justify-content-center">
          <div className="col-sm-3 col-md-2">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">{days}</h5>
                <p className="card-text">Days</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-2">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">{hours}</h5>
                <p className="card-text">Hours</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-2">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">{minutes}</h5>
                <p className="card-text">Minutes</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-2">
            <div className="card bg-light">
              <div className="card-body">
                <h5 className="card-title">{seconds}</h5>
                <p className="card-text">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>) : null}
    </div>

  );
};

export default CountdownTimer;
