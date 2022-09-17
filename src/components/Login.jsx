import React from 'react'

const Login = () => {
  return (
    <>
    <div className='loginform'>
      <div>
      <form>
      <label for="fname">EMAIL</label>
      <input type="text" name="email" placeholder="Your email.."></input>
      <label for="lname">PASSWORD</label>
      <input type="password" name="password" placeholder="Your password.."></input>
      <input type="submit" value="LOGIN"></input>
      </form>
      </div>
    </div>
    </>
  )
}

export default Login