import React from 'react'
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import LogoUSM from '../assets/usm.png'

export const NavBar = () => {
  return (
    <Container style={{margin: '0px', padding: '0px'}} >
      <Row md={4}>
        <Col md={4}>
          <Image style={{width:"20%",marginLeft:"65px" }}src={LogoUSM} />
        </Col>
        <Col md={4}>
          <h1 className='title'>Admision USM</h1>
        </Col>
      </Row>
      <Row>
        <Navbar className="nav-bar" >
          <Container>
            <Row>
              <Col md="auto">
                <Button  className='button size-nav-bar button-inicio' href="/">Inicio</Button>
              </Col>
              <Col md="auto">
                <Button className='button button-secundarios' href="/inscripcion">Inscripcion</Button>
              </Col>
              <Col md="auto">
                <Button className='button button-secundarios' href="/">Repositorio</Button>
              </Col>
              <Col md="auto">
                  <Dropdown>
                    <Dropdown.Toggle className="button button-secundarios" id="dropdown-basic">
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
      </Row>
    </Container>
  )
}

export default NavBar
