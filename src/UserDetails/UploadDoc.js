import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/database';

function DocumentUploadForm() {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
    };

    const handleFileUpload = async (event) => {
        event.preventDefault();
        try {
            // Upload document to Firebase Storage
            const storageRef = firebase.storage().ref(`user-documents/${firebase.auth().currentUser.uid}/${fileName}`);
            const snapshot = await storageRef.put(file);

            // Save document metadata to Firebase Realtime Database
            const dbRef = firebase.database().ref(`user-documents/${firebase.auth().currentUser.uid}`);
            await dbRef.push({
                fileName: fileName,
                downloadURL: await snapshot.ref.getDownloadURL()
            });

            console.log('Document uploaded successfully');
        } catch (error) {
            console.error('Error uploading document', error);
        }
    };

    return (
        <form onSubmit={handleFileUpload}>
            <label>
                Select document to upload:
                <input type="file" onChange={handleFileChange} />
            </label>
            <button type="submit">Upload document</button>
        </form>
    );
}


export default DocumentUploadForm;