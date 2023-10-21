import React from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

export const NavBar = () => {
  return (
    <Container style={{margin: '0px', padding: '0px'}} >
    <Navbar className="nav-bar">
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
          <Col md="auto">
              <Dropdown>
                <Dropdown.Toggle className="button" id="dropdown-basic">
                  Carreras
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/informatica">Ingenieria Civil Informatica</Dropdown.Item>
                  <Dropdown.Item href="/matematicas">Ingenieria Civil Matematicas</Dropdown.Item>
                  <Dropdown.Item href="/minas">Ingenieria Civil en Minas</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </Col>
        </Row>
      </Container>
    </Navbar>
    </Container>
  )
}

export default NavBar
