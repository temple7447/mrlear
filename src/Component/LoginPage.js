import React, { useState} from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from 'firebase/auth'
import { app} from '../firebase'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';




const LoginPage = () => {


  const [email, SetEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  let auth = getAuth();



  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/Admin/Dashboard')
        console.log(user)

      })
      .catch((error) => {
        console.log(error.message)
        alert(`please enter the correct informations:  ${error.message}   `)
      })

  }

  const HangleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });

  }


  return (
    <div className="container my-5">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-header text-center">
                <h2>DashBoard Login</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your program"
                      value={email}
                      onChange={(e) => SetEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                    
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="form-group text-center"
                  >
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg mt-3"
                  
                    >
                      DashBoard Login
                    </button>

                  </motion.div>
                </form>
              </div>
              {/* <button onClick={HangleSignUp} className='mx-3 my-2 bg-success'>signup</button> */}
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage