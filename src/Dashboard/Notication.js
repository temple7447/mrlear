import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Notification() {
  const [notificationData, setNotificationData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/Admin/Dashboard/Notification')
      .then(response => {
        console.log(response.data);
        setNotificationData(response.data);
      })
      .catch(err => {
        setError('Error trying to fetch the assignment Notification');
      });
  }, []);

  const handleDelete = (_id) => {
    const newNotificationData = notificationData.filter(ele => ele._id !== _id);
    setNotificationData(newNotificationData);
    axios
      .post(`http://localhost:3000/Admin/Dashboard/delete`, {
        _id
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleEdit = (ele) => {
    navigate('/Admin/Dashboard/Notification', { state: ele });
  }

  const info = notificationData?.map((ele, index) => {
    const { messageA, DepartmentA, levelA, programmA, timeA, _id } = ele;
    return (
      <li key={index} className="list-group-item notification-item d-flex justify-content-between align-items-center">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{DepartmentA}</div>
          <div>{messageA}</div>
          <div className="text-muted">{levelA} - {programmA}</div>
        </div>
        <div className="notification-buttons">
          <button type="button" className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(ele)}>Edit</button>
          <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(_id)}>Delete</button>
        </div>
        <span className="badge bg-primary rounded-pill notification-time">{timeA}</span>
      </li>
    );
  });

  return (
    <div className="container-fluid">
      <h1 className="display-4 text-center my-5">Notifications</h1>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <ul className="list-group">
            {info}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notification;
