import React from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const NavBar = () => {
  return (
    <Container style={{margin: '0px', padding: '0px'}} >
    <Navbar bg="dark" data-bs-theme="dark" style={{borderRadius: '10px'}}>
      <Container>
        <Row>
          <Col md="auto">
            <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
              to='/'
            >
              Página de inicio
            </NavLink>
          </Col>
          <Col md="auto">
            <NavLink
              className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
              to='/internal'
            >
              Página Interna
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Navbar>
    </Container>
  )
}

export default NavBar
