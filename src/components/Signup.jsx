import React from 'react'

const Signup = () => {
  return (
   <>
    <div className='signupform'>
      <div>
      <form>
      <label for="fname">Name</label>
      <input type="text" name="name" placeholder="Your name.."></input>
      <label for="lname">Email</label>
      <input type="text" name="email" placeholder="Your email.."></input>
      <label for="lname">Password</label>
      <input type="password"  name="lastname" placeholder="Your password.."></input>
      <input type="submit" value="SIGN-UP"></input>
      </form>
      </div>
    </div>
   </>
  )
}

export default Signup