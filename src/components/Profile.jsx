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
import Login from './Login';

const Profile = () => {

      const [openpop, setOpenpop] = React.useState(false);
      const [open1, setOpen1] = React.useState(false);
      const [data, setData] = useState({});
      const [nfts,setNfts] = useState([]);
      const inputDoc = useRef();
      const token = localStorage.getItem("e12token");

      const handleClose1 = () => {
        setOpen1(false);
        setOpenpop(false);
      };

      const handleChange = (e)=>{
        let name = e.target.name;
        setData({
        ...data,
        [name]: e.target.value,
        [name]: e.target.value,
       });
       }

       useEffect(()=>{
        axios.get(`https://e12b.herokuapp.com/nft/getnfts`)
        .then(({data})=>{
             setNfts(data);
        });
       },[])

       const handleSubmit = (e)=>{
      e.preventDefault();
       const formData = new FormData();
       formData.append("name",data.name);
       formData.append("nft",inputDoc.current.files[0]);
        axios.post(`https://e12b.herokuapp.com/nft/newnft`,formData,{
             headers:{"Content-type":"multipart/formdata"},
        })
        console.log(formData.name);
        setOpen1(true);
        };

  console.log(nfts);
  return (
    <>
     {token ? <>
      <div className='profile'>
        <div className='profilecont0'>
          <button>Latest nft's</button>
          <button onClick={()=>setOpenpop(true)}>Upload nft</button>
        </div>
        <div className='profilecont1'>
            {nfts && nfts.map((e)=>{
              return(
                <div className='nftcard'>
                   <img src={`https://e12b.herokuapp.com/static/${e.nft}`} alt="nft" />
                   <p>{e.name}</p>
                </div>
              )
            })}
        </div>
    </div>
     </>:<Login/>}
    
    <Dialog open={openpop} onClose={handleClose1} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        <div className='popup'>
        <form onSubmit={handleSubmit}>
                    <label>Upload new file: </label><br></br>
                    <input type="text" name="name" placeholder='Enter name for your document' onChange={handleChange}/>
                    <div className='doty'>
                    <input type="file" ref={inputDoc} name="document" accept=".jpg" onChange={handleChange}/>
                    </div>
                    <input type="submit" value="Save"/>
        </form>
        </div>
        </DialogTitle>
    </Dialog>

    <Dialog open={open1} onClose={handleClose1} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
        <Alert severity="success">Nft published</Alert>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1}>Continue</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default Profile