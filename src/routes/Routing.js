import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../pages/HomePage';
import UserPage from '../pages/UserPage';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/user" element={<UserPage />}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default Routing