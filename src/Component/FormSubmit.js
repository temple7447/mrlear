/* eslint-disable default-case */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app, database, storage } from "../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll } from 'firebase/storage'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SubmitAssignment = ({ mute }) => {


  const [fullname, setFullName] = useState("");
  const [matriculation, setMatriculation] = useState("");
  const [program, setProgram] = useState("");
  const [level, setLevel] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [files, setFileds] = useState(null)
  const [mutebtn, setMutebtn] = useState(false)
  const [downloadedfile, setDownloadedFile] = useState('')
  const [counting, setcounting]= useState(0)

  // const collectionRef = collection(database, "StudentFile")
  const storage = getStorage();

  useEffect(() => {
    if (files) {
      setMutebtn(true)
      const storageRef = ref(storage, 'images/' + files.name);
      const uploadTask = uploadBytesResumable(storageRef, files);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setcounting(progress)
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          alert(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setDownloadedFile(downloadURL)
            setMutebtn(false)

          });
        }
      )
    }
  }, [files])











  const handleSubmit = (e) => {
    setMutebtn(true)
    const collectionRef = collection(database, 'Students')
    e.preventDefault();
    if (!files) {
      console.error("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", files);
    axios.post('http://localhost:3000/Submittion', {
      fullname,
      matriculation,
      program,
      level,

    }, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log("it was sent successfully...", response);
      })
      .catch((error) => {
        console.log(error);
      });


    //firebase send of data
    addDoc(collectionRef, {
      fullname,
      matriculation,
      program,
      level,
      downloadURL: downloadedfile,
    })
      .then((response) => {
        console.log(response)
        setMutebtn(false)
        setDownloadedFile(null)
        setFileds(null)
        setFullName(' ')
        setLevel(' ')
        setProgram(' ')
        setMatriculation(' ')
        // setHid(true);
        alert('it was successfully sent')
      })
      .catch((error) => {
        console.log(error.message)
      })



  };



  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card shadow">
              <div className="card-header text-center">
                <h2>Submit Assignment</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={fullname}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      disabled={mute}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="matriculation">Matriculation</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your matriculation number"
                      value={matriculation}
                      onChange={(e) => setMatriculation(e.target.value)}
                      required
                      disabled={mute}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="program">Program</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your program"
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      required
                      disabled={mute}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="level">Level</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your level"
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      required
                      disabled={mute}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Document">Document Upload</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Enter your Document which could be in the following format. pdf, doc"
                      // value={files}
                      onChange={(e) => setFileds(e.target.files[0])}
                      required
                      disabled={mute}
                    />
                  </div>
                  {
                    files && <div style={{ width: 100, height: 100, alignSelf: 'center', justifyContent: 'center' }}>

                      <CircularProgressbar value={counting} text={`${counting}%`} />;
                    </div>
                  }


                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="form-group text-center"
                  >
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg mt-3"
                      disabled={mutebtn}
                    >
                      Submit Assignment
                    </button>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default SubmitAssignment;
