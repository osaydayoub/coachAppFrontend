import React, { useState } from 'react'
import './LoginPage.css'
import Login from '../../components/Login/Login';


function LoginPage() {
  const [login, signUp] = ['login', 'signUp']
  const [selectedComponent, setSelectedComponent] = useState(login);
  function handleComponentChange() {
    if (selectedComponent === login) {
      setSelectedComponent(signUp);
    }else{
      setSelectedComponent(login);

    }
  }
  return (
    <div className='LoginPage'>
      {selectedComponent === login && <Login handle={handleComponentChange} />}
    </div>
  )
}

export default LoginPage