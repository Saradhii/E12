import React from 'react'
import "./styles.css";
const Header = () => {
  return (
    <>
     <div className='header'>
     <div className='hlogo'>
        <img src="https://www.svgrepo.com/show/9733/triangle.svg" alt="logo" />
      </div>
      <div className='hbuttons'>
         <button>LOGIN</button>
         <button>SIGN UP</button>
      </div>
     </div>
    </>
  )
}

export default Header;