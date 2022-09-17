import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Header = () => {
  const token = localStorage.getItem("e12token");
  const name = localStorage.getItem("e12name");
  const [open, setOpen] = React.useState(false);
  const handleLogout = ()=>{
    localStorage.removeItem("e12token");
    localStorage.removeItem("e12name");
    localStorage.removeItem("e12id");
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
    window.location.href="/";
  };
  return (
    <>
     {token ? <>
      <div className='header'>
     <div className='hlogo'>
     <Link to="/"><img src="https://www.svgrepo.com/show/9733/triangle.svg" alt="logo" /></Link>
      </div>
      <div className='hbuttons'>
         <h3>{name}</h3>
         <button onClick={handleLogout}>LOGOUT</button>
      </div>
     </div>
     
     </>:<>
     <div className='header'>
     <div className='hlogo'>
     <Link to="/"><img src="https://www.svgrepo.com/show/9733/triangle.svg" alt="logo" /></Link>
      </div>
      <div className='hbuttons'>
         <button><Link to="/login">LOGIN</Link></button>
         <button><Link to="/signup">SIGN UP</Link></button>
      </div>
     </div>
     </>}
     <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        <Alert severity="success">Logged out</Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default Header;