import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from 'react-bootstrap/Navbar';

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import Informatica from '../pages/informatica'
import Matematica from '../pages/matematica'
import Minas from '../pages/minas'
import Repositorio from '../pages/repositorio';
import Inscripcion from '../pages/inscripcion';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/internal' element={<InternalPage />} />
          <Route path='/repositorio' element={<Repositorio />} />
          <Route path='/informatica' element={<Informatica />} />
          <Route path='/matematicas' element={<Matematica />} />
          <Route path='/minas' element={<Minas />} />
          <Route path='/inscripcion' element={<Inscripcion />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
