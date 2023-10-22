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
    <center>
    <Container>
      <Row >
        <Navbar className="nav-bar" style={{width: "85%"}}>
          <Container>
            <Row>
              <Col md="1">
                <Image style={{width:"100%"}}src={LogoUSM} />
              </Col>
              <Col md="auto">
                <h1 className='title' style={{color: "white", paddingTop: "3px"}}> <b>Admision USM</b></h1>
              </Col>
              <Col md="auto">
                <Button  className='button button-secundarios' href="/">Inicio</Button>
              </Col>
              <Col md="auto">
                <Button className='button button-secundarios' href="/inscripcion">Inscripcion</Button>
              </Col>
              <Col md="auto">
                <Button className='button button-secundarios' href="/repositorio">Repositorio</Button>
              </Col>
              <Col md="auto">
                <Button className='button button-secundarios' href="https://usm.cl">Universidad</Button>
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
    </center>
  )
}

export default NavBar
