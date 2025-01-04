 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 import {getFirestore, collection, addDoc,getDocs,doc,updateDoc,deleteDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js"; 
 const firebaseConfig = {
   apiKey: "AIzaSyCWCx9kz9bXeCDZcZtmFAViL4Tc6-YKs8Y",
   authDomain: "project1-e26f9.firebaseapp.com",
   projectId: "project1-e26f9",
   storageBucket: "project1-e26f9.firebasestorage.app",
   messagingSenderId: "1010065865608",
   appId: "1:1010065865608:web:bf41359a38c26229c2983d",
   measurementId: "G-WY87T8PXDW"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 export{
    app,
    db,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc


 }