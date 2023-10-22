import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/nav_bar'
import { Col, Container, Row } from 'react-bootstrap';
import admision from '../assets/usm-admision-1.jpeg'

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
                    <Card.Img style={{objectFit:"fill"}} src={admision} thumbnail />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title><h1 className='title'>Postula aqui</h1></Card.Title>
                      <Card.Text>
                        <p className='plaintext'>La Universidad Tecnica Federico Santa Maria a iniciado su periodo de postulacion para sus carrera, si estas interesado en inscribirte, apreta el boton inscripcion que se encuentra en la parte inferior</p>
                      </Card.Text>
                      <Button className='button' href="/inscripcion">Inscripcion</Button>
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
                        <Card.Img style={{objectFit:"fill"}} src={admision} thumbnail />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>Repositorio</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
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
                        <Card.Img style={{objectFit:"fill"}} src={admision} thumbnail />
                      </Col>
                      <Col>
                        <Card.Body>
                          <Card.Title>Carreras</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
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
