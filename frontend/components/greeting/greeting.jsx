import React from 'react';
import {link} from 'react-router-dom'



const Greeting = (props) => {

  const sessionLinks = () => (
    <Link to="/login">LogIn</Link>
    <Link to="/signup">SignUp</Link>
  )

  if(currentUser){

    return {
      <h1>Hello {props.currentUser.username}</h1>
      <button onClick={logout(props.currentUser)}>Log Out</button>
    }
  } else
  {

    return {

    }
  }
}
