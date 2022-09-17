import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
     <div className='header'>
     <div className='hlogo'>
        <img src="https://www.svgrepo.com/show/9733/triangle.svg" alt="logo" />
      </div>
      <div className='hbuttons'>
         <button><Link to="/signup">LOGIN</Link></button>
         <button><Link to="/login">SIGN UP</Link></button>
      </div>
     </div>
    </>
  )
}

export default Header;