import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/nav_bar'
import { Col, Container, Row } from 'react-bootstrap';
import admision from '../assets/usm-admision-1.jpeg'
import informacion from '../assets/imagen-info.png'
import carrera from '../assets/imagen-carrera.png'
import Dropdown from 'react-bootstrap/Dropdown';

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <p className='subtitle' style={{marginLeft: "70px"}}>Bienvenidos al portal de admision de la Universidad Tecnica Federico Santa Maria</p>
      <Container>
        <Row>
          <Col xs={4}>
            <Card body className='card-fecha'><b>Inicio periodo postulacion: 10/07/2023</b></Card>
          </Col>
          <Col xs={4}>
            <Card body className='card-fecha'><b>Fin periodo postulacion: 10/12/2023</b></Card>
          </Col>
          <Col xs={4}>
            <Card body className='card-fecha'><b>Resultados: 10/12/2024</b></Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className='card-home' style={{height: "100%"}}>
              <Container className='container-card'>
                <Row>
                  <Col>
                    <Card.Img style={{objectFit:"scale-down"}} src={admision} />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title><h1 className='title'>Postula aqui</h1></Card.Title>
                      <Card.Text>
                        <p className='plaintext'>La Universidad Tecnica Federico Santa Maria a iniciado su periodo de postulacion para sus carrera, si estas interesado en inscribirte, apreta el boton inscripcion que se encuentra en la parte inferior</p>
                      </Card.Text>
                      <Button className='button' href="/inscripcion">Inscribirse</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
          <Col>
            <Row>
              <Col>
                <Card className='card-home' style={{marginBottom: "10px"}}>
                  <Container className='container-card'>
                    <Row>
                      <Col>
                        <Card.Img style={{objectFit:"fill"}} src={informacion} thumbnail />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title><h1 className='subtitle'>Información general</h1></Card.Title>
                          <Card.Text>
                            <p className='plaintext'>Si deseas buscar informacion general de la Universidad, se cuenta con un repositorio donde se encuentra toda la informacion reunida por secciones</p>
                          </Card.Text>
                          <Button className='button' href="/repositorio">Ver mas</Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Container>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className='card-home'>
                  <Container className='container-card'>
                    <Row>
                      <Col>
                        <Card.Img style={{objectFit:"fill"}} src={carrera} thumbnail />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title><h1 className='subtitle'>Carreras</h1></Card.Title>
                          <Card.Text>
                          <p className='plaintext'>Si deseas buscar informacion sobre una carrera en especifico impartida por la Universidad, se tiene un apartado dedicado a cada una</p>
                          </Card.Text>
                          <Dropdown>
                            <Dropdown.Toggle className="button button-secundarios" id="dropdown-basic">
                              Ver mas
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item href="/informatica">Ingenieria Civil Informatica</Dropdown.Item>
                                <Dropdown.Item href="/matematicas">Ingenieria Civil Matematicas</Dropdown.Item>
                                <Dropdown.Item href="/minas">Ingenieria Civil en Minas</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Container>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
