import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from 'react-bootstrap/Navbar';

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/internal' element={<InternalPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
