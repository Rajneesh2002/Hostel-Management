/* eslint-disable no-unused-vars */
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

import { NavLink,useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Pic1 from '../../images/Pic1.png';
import "./Contact.css"
import {complaint} from "./Complaints.js"
import { collection, FieldValue } from "firebase/firestore";
import React,{ useState, useEffect } from "react";
import { db } from './firebaseConfig'
import { getDocs, addDoc, doc, deleteDoc} from "firebase/firestore"
import { async } from "@firebase/util";
import Announcement from "./Announcement";

const AdminLogin = () => {
    

return (
    <>
    <h1>hii manit</h1>
    <Button
              component={NavLink}
              to="Announcement"
              style={({ isActive }) => {
                return { backgroundColor:"#6d1b7b" };
              }}
              sx={{ color: "white" }}
            >
              Home
            </Button>
    
 {/*
    <div className="d-flex" id="wrapper">

        
        <div className="bg-white" id="sidebar-wrapper">
            <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                    className="fas fa-user-secret me-2"></i>MANITVERSE</div>
            <div className="list-group list-group-flush my-3">
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text active"><i
                        className="fas fa-tachometer-alt me-2"></i>Home</a>
                        
                        
       
                <NavLink to="/Announcement" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                         ANNOUNCEMENT
                </NavLink>

                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                <i class="fa-solid fa-address-book"></i>STUDENTS LIST</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
                <i class="fa-solid fa-address-book"></i>MESS MENU</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                        className="fas fa-shopping-cart me-2"></i>INVENTORY</a>
                <a href="/" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                        className="fas fa-power-off me-2"></i>Logout</a>
            </div>
        </div>
       
       <div id="page-content-wrapper">
      
        </div>
</div>

*/}
    </>
);
  };
  export default AdminLogin;
  