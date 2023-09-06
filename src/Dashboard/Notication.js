import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Notification() {
  const [notificationData, setNotificationData] = useState([]);
  const [error, setError] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://gold-bunny-garb.cyclic.app/AssigmentSchema')
      .then((response) => {
        console.log(response.data);
        setNotificationData(response.data);
      })
      .catch((err) => {
        setError('Error trying to fetch the assignment Notification');
      });
  }, []);

  const handleDelete = (_id) => {
    const newNotificationData = notificationData.filter((ele) => ele._id !== _id);
    setNotificationData(newNotificationData);
    axios
      .post(`https://gold-bunny-garb.cyclic.app/AssigmentSchema/Delete`, {
        _id
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleEdit = (ele) => {
  //   navigate('/Admin/Dashboard/Notification', { state: ele });
  // };

  const tableRows = notificationData?.map((ele, index) => {
    const { messageA, DepartmentA, levelA, programmA, timeA, _id } = ele;
    return (<>
      <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{DepartmentA}</td>
        <td>{levelA}</td>
        <td>{programmA}</td>
        <td>{timeA}</td>
        <td>
          {/* <button type="button" className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(ele)}>
            Edit
          </button> */}
          <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(_id)}>
            Delete
          </button>
        </td>
      </tr>
      <tr>
        <th scope="row">Description</th>
        <td colSpan="5">{messageA}</td> {/* Use colSpan to span the entire row */}
      </tr>
      </>
    );
  });

  return (
    <div className="container-fluid">
      <h1 className="display-4 text-center my-5">Notifications</h1>
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-12">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Department</th>
                <th scope="col">Level</th>
                <th scope="col">programm</th>
                <th scope="col">Time-Submited</th>
                <th scope="col">Order</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Notification;
