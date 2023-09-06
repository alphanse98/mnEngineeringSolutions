import React, { useState } from 'react';

const LoginComponent = ({ setAuthenticate }) => {
  const [userData, setUserData] = useState({ userName: '', password: '' });

  const handleUseData = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUseLogin = ()=> {
    if(userData?.userName === "arun" && userData?.password === "arun"){
      setAuthenticate(true)
    }else{
      alert("Wrong username and password")
    }
  }

  return (
    <div className='loginCom'>
      <div className='loginContainer'>
        <p>Login</p>
        <input
          onChange={handleUseData}
          value={userData?.userName}
          name='userName' 
          placeholder='User Name'
          type='text'
        />
        <input
          onChange={handleUseData}
          value={userData?.password}
          name='password'
          placeholder='Password'
          type='password'
        />
        <button onClick={handleUseLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginComponent;
