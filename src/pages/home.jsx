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
      <p className='plaintext' style={{marginLeft: "70px"}}>Bienvenidos al portal de admision de la Universidad Tecnica Federico Santa Maria</p>
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
              <Container style={{paddingLeft:"0px"}}>
                <Row>
                  <Col>
                    <Card.Img style={{objectFit:"contain"}} src={admision} thumbnail />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title>Postula aqui</Card.Title>
                      <Card.Text>
                          Some quick example text to build on the card title and make up the
                          bulk of the card's content.
                          Some quick example text to build on the card title and make up the

                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
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
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>Repositorio</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className='card-home'>
                  <Card.Img variant="top" src="" />
                  <Card.Body>
                    <Card.Title>Carreras</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
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
