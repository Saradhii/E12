import React from 'react'

const Signup = () => {
  return (
   <>
    <div className='signupform'>
      <div>
      <form>
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
      <input type="submit" value="Submit"></input>
      </form>
      </div>
    </div>
   </>
  )
}

export default Signup