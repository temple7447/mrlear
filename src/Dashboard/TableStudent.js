import React, { useState, useEffect } from 'react'
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import {  database} from "../firebase";
import { NavLink } from 'react-router-dom';

function TableStudent() {
    const collectionRef = collection(database, 'Students')
    const [students, setStudents] = useState([])

    useEffect(() => {
        getDocs(collectionRef)
            .then((response) => {
                setStudents(response.docs)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(database, 'Students', id))
            const updatedStudents = students.filter(student => student.id !== id)
            setStudents(updatedStudents)
        } catch (error) {
            console.log(error)
        }
    }

    const info = students?.map((student) => {
        const { fullname, matriculation, program, level, downloadURL } = student.data()
        console.log(downloadURL)
        const id = student.id
        return (
            <tr key={id}>
                <td>
                    <p>{fullname}</p>
                </td>
                <td>{matriculation}</td>
                <td><span className="">{program}</span></td>
                <td><span className="">{level}</span></td>
                <td><NavLink href={downloadURL} target="_blank" download>
                    <button className='text-light'>Download</button>
                </NavLink></td>
                <td>
                    <button className='bg-danger' onClick={() => handleDelete(id)}>Delete</button>
                </td>
            </tr>
        )
    })

    return (
        <div className="table-data">
            <div className="order">
                <div className="head">
                    <h3>Recent Orders</h3>
                    <i className='bx bx-search'></i>
                    <i className='bx bx-filter'></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Matriculation</th>
                            <th>Level</th>
                            <th>Program</th>
                            <th>Files</th>
                            <th>Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TableStudent
