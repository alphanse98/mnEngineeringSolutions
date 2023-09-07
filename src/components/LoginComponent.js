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
      <form onSubmit={handleUseLogin} className='loginContainer'>
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
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default LoginComponent;
