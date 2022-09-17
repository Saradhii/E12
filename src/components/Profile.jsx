import React, { useRef } from 'react';
import "./styles.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Profile = () => {

      const [formData, Setformdata] = useState({});
      const [open, setOpen] = React.useState(false);
      const [open1, setOpen1] = React.useState(false);
      const [data, setData] = useState({});
      const inputDoc = useRef();

      const handleClose = () => {
        setOpen(false);
      };

      const handleChange = (e)=>{
        let name = e.target.name;
        setData({
        ...data,
        [name]: e.target.value,
        [name]: e.target.value,
       });
       } 

       const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name);
        formData.append("nft",inputDoc.current.files[0]);
        // axios.post(`https://assignment91mobiles.herokuapp.com/user/${userid}/docs`,formData,{
        //      headers:{"Content-type":"multipart/formdata"},
        // })
        console.log(formData.name);
        // setOpen1(true);
        };


  return (
    <>
    <div className='profile'>
        <div className='profilecont0'>
          <button>Latest nft's</button>
          <button onClick={()=>setOpen(true)}>Upload nft</button>
        </div>
        <div className='profilecont1'>
            
        </div>
    </div>
    
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        <form onSubmit={handleSubmit}>
        <label htmlFor="fname">NAME</label>
        <input type="text" name="name" placeholder="Name of your nft.." onChange={handleChange} required></input>
        <label htmlFor="lname">PASSWORD</label><br></br>
        <input type="file" ref={inputDoc} name="nft" accept=".jpg" onChange={handleChange} required></input>
        <input type="submit" value="UPLOAD"></input>
        </form>
        </DialogTitle>
    </Dialog>
    </>
  )
}

export default Profile