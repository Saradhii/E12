import React from 'react'
import "./styles.css";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
     <div className='header'>
     <div className='hlogo'>
     <Link to="/"><img src="https://www.svgrepo.com/show/9733/triangle.svg" alt="logo" /></Link>
      </div>
      <div className='hbuttons'>
         <button><Link to="/login">LOGIN</Link></button>
         <button><Link to="/signup">SIGN UP</Link></button>
      </div>
     </div>
    </>
  )
}

export default Header;