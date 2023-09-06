import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import LoginPage from '../pages/LoginPage';

const Routing = () => {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {authenticate ? (
          <>
            <Route path="/*" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
          </>
        ) : (
          <Route path="/*" element={<LoginPage setAuthenticate={setAuthenticate} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;