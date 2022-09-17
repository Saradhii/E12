import React from 'react';
import { useState,useEffect } from "react";
import axios from "axios";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Login = () => {

    const [formData, Setformdata] = useState({});
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

     // closing for success popup
     const handleClose = () => {
      setOpen(false);
      window.location.href="/profile";
    };

    // closing for failed popup
    const handleClose1 = () => {
      setOpen1(false);
    };

    // Handling changes on input-fields
    const handleChange = (e)=>{
      let name = e.target.name;
      Setformdata({
      ...formData,
      [name]: e.target.value,
      [name]: e.target.value,
  });
  }

  //Sending form-data to login end-point
  const handleSubmit = (e)=>{
    e.preventDefault();
    setOpen2(true);
    axios.post(`https://doctor-patient-mock.herokuapp.com/user/signin`, formData, {
    headers: { "Content-Type": "application/json" },
    }).then((responce) => {
    const { data } = responce;
    console.log(data);
    setOpen2(false);
    if (data.message == "Logged in") {
      localStorage.setItem("DoctorLogintoken", data.token);
      localStorage.setItem("DoctorLoginid", data.user._id);
      localStorage.setItem("DoctorName",data.user.name);
      setOpen(true);
    } else {
      setOpen1(true);
    }
  });
};

  return (
    <>
    <div className='loginform'>
      <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="fname">EMAIL</label>
      <input type="text" name="email" placeholder="Your email.." onChange={handleChange} required></input>
      <label htmlFor="lname">PASSWORD</label>
      <input type="password" name="password" placeholder="Your password.." onChange={handleChange} required></input>
      <input type="submit" value="LOGIN"></input>
      </form>
      </div>
    </div>

    {/* Alert popup for successfull login */}
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        <Alert severity="success">Login succeess</Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
    </Dialog>

    {/* Alert popup for login failed */}
    <Dialog open={open1} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        <Alert severity="error">Login Failed ( Invalid credentials )</Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Continue</Button>
        </DialogActions>
    </Dialog>

    {/* Loader */}
    <Dialog open={open2} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        <div class="spinner-1"></div>
        </DialogTitle>
    </Dialog>
    </>
  )
}

export default Login