import React from 'react';
import { Link } from 'react-router-dom';
import { FaWpforms, FaUsers } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { TiUserAdd } from 'react-icons/ti';
import { CgLogOff } from 'react-icons/cg';
import { AiOutlineDashboard } from 'react-icons/ai';
import { GiFoodChain } from 'react-icons/gi';
import "./Contact.css"
/* eslint-disable no-unused-vars */
import  { useState } from "react";
import Pic1 from '../../images/Pic1.png';
import "./Contact.css"

import { collection, FieldValue } from "firebase/firestore"

import { db } from './firebaseConfig'
import { getDocs, addDoc, doc, deleteDoc} from "firebase/firestore"
import { async } from "@firebase/util";

const Contact = () => {


    const [newFname,setNewFname]=useState("");
    const [newLname,setNewLname]=useState("");
    const [newPhone,setNewPhone]=useState("");
    const [newEmail,setNewEmail]=useState("");
    const [newAddress,setNewAddress]=useState("");
    const [newMessage,setNewMessage]=useState("");

    
    //const [users,setUsers]=useState([]);

    const usersCollectionRef=collection(db,"DontTouch");


    const createUser= async ()=>{
        await addDoc(usersCollectionRef,{fname:newFname,lname:newLname,phone:newPhone,email:newEmail,address:newAddress,message:newMessage});
        if (newFname && newLname && newPhone && newEmail && newAddress && newMessage) {
          alert("Data stored");
        }
      };



    return (
        <div className="container-fluid" style={{ padding: 30 }}>
          <h1 >Contact Us</h1>
          <br/>

          <h5 >"Want to reach out to us? Drop your details here!"</h5>
          <br/>
          
          <form style={{ marginBottom: 40 }}>
            <div class="form-group">
              <label for="name" class="form-label">First Name:</label>
              <input id="typeName" class="form-control form-control-lg" type="text" onChange={(event) => {setNewFname(event.target.value)}}/>
              
              <label for="name" class="form-label">Last Name:</label>
              <input id="typeName" class="form-control form-control-lg" type="text" onChange={(event) => {setNewLname(event.target.value)}}/>
              
              <label for="name" class="form-label">Phone:</label>
              <input id="typeName" class="form-control form-control-lg" type="text" onChange={(event) => {setNewPhone(event.target.value)}}/>
              
              <label for="name" class="form-label">Email:</label>
              <input id="typeName" class="form-control form-control-lg" type="text" onChange={(event) => {setNewEmail(event.target.value)}}/>
              
              <label for="name" class="form-label">Address:</label>
              <input id="typeName" class="form-control form-control-lg" type="text" onChange={(event) => {setNewAddress(event.target.value)}}/>
              
              <label for="name" class="form-label">Message:</label>
              <input id="typeName" class="form-control form-control-lg" type="text" onChange={(event) => {setNewMessage(event.target.value)}}/>
              
              <br/>

            </div>
            <button type="button" class="btn btn-success" onClick={ createUser } style={{ marginTop: 20 }}>
              Send
            </button>
    
          </form>
        </div>
      );
}

export default Contact
