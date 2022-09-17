import React from 'react';
import { useState } from "react";
import axios from "axios";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Signup = () => {

  const [formData, Setformdata] = useState({});
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  //closing success popup for signup
  const handleClose = () => {
    setOpen(false);
    window.location.href="./login";
  };
 
  //handling input changes
  const handleChange = (e)=>{
      let name = e.target.name;
      Setformdata({
      ...formData,
      [name]: e.target.value,
      [name]: e.target.value,
      [name]: e.target.value,
  });
  }

  //Sending form data to signup end point
  const handleSubmit = (e)=>{
      e.preventDefault();
      setOpen2(true);
      console.log(formData)
      axios.post(`https://e12b.herokuapp.com/user/signup`, formData, {
          headers: { "Content-Type": "application/json" },
        }).then((responce) => {
          setOpen2(false);
          const { data } = responce;
          console.log(data);
          setOpen(true);
        });
    };


  return (
   <>
    <div className='signupform'>
      <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="fname">Name</label>
      <input type="text" name="name" placeholder="Your name.." onChange={handleChange} required></input>
      <label htmlFor="lname">Email</label>
      <input type="text" name="email" placeholder="Your email.." onChange={handleChange} required></input>
      <label htmlFor="lname">Password</label>
      <input type="password"  name="password" placeholder="Your password.." onChange={handleChange} required></input>
      <input type="submit" value="SIGN-UP"></input>
      </form>
      </div>
    </div>

    {/* popup for signup success */}
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        <Alert severity="success">Registration success., now login</Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue</Button>
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

export default Signup