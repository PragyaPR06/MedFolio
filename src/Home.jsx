// import React, { useState } from "react";
// import * as XLSX from 'xlsx'; // Import xlsx library
import styles from '../src/Components/AIBot.module.scss'
import AIBot from "./Components/AIBot"; // Adjust the import path as needed

const Home = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileInput = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleFileUpload = () => {
//     if (!selectedFile) {
//       alert('Please select a file first.');
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const data = e.target.result;
//       const workbook = XLSX.read(data, { type: 'binary' });
//       const sheetName = workbook.SheetNames[0]; // Assuming you want the first sheet
//       const worksheet = workbook.Sheets[sheetName];
//       const json = XLSX.utils.sheet_to_json(worksheet);
//       console.log('Parsed Contacts:', json);

//       // Here, you can iterate over json to process each contact
//       // For example, initiate calls to each contact in the json array
//     };
//     reader.readAsBinaryString(selectedFile);
//   };

  return (
    <div className="container" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        zIndex: 2
      }}>
        <div style={{ fontSize: 'clamp(2rem, 8vw, 5rem)', textAlign: 'center', marginBottom: '2rem', width: '50%' }}>
          <span className={styles['typing-animation']}>Your AI Calling Buddy</span>
        </div>
        <AIBot />
      </div>
      <div className="video-background">
        <video autoPlay loop muted style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: 1
        }}>
          <source src="https://cdn.pixabay.com/vimeo/720504774/dots-120172.mp4?width=640&hash=0c76114832d9d253a6f2ec7dd1af87b2f980e5ae" type="video/mp4" />
        </video>
      </div>
      {/* <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
        <input type="file" onChange={handleFileInput} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
        <button onClick={handleFileUpload}>Upload and Call</button>
      </div> */}
    </div>
  );
};

export default Home;
