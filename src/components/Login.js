import { Button } from '@material-ui/core'
import React from 'react'
import  { auth, provider } from './firebase'

import "./Login.css"
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
import { signInWithPopup } from 'firebase/auth'


const Login = () => {

  const[{user}, dispatch]=useStateValue();

  const signin=()=>{
signInWithPopup(auth,provider).then(result=>dispatch({

type: actionTypes.SET_USER,
  user: result.user,

}
  
)).catch((err)=> alert(err.message))


  }
  return (
    <div className='login'>
      <h1>Welcome to our Blog App</h1>
      
      <Button variant="contained" color="primary" onClick={signin}>
        Sign in with Google
      </Button>
      
      </div>
  )
}

export default Login