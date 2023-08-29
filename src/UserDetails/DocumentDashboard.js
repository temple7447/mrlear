import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

function DocumentDashboard() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const dbRef = firebase.database().ref(`user-documents/${firebase.auth().currentUser.uid}`);
        dbRef.on('value', (snapshot) => {
            const documentsData = snapshot.val();
            if (documentsData) {
                const documentsList = Object.keys(documentsData).map((key) => ({
                    id: key,
                    ...documentsData[key]
                }));
                setDocuments(documentsList);
            } else {
                setDocuments([]);
            }
        });
    }, []);

    return (
        <div>
            {documents.map((document) => (
                <div key={document.id}>
                    <a href={document.downloadURL} target="_blank" rel="noopener noreferrer">{document.fileName}</a>
                </div>
            ))}
        </div>
    );
}
export default DocumentDashboard