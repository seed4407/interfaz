import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavBar from '../components/nav_bar'
import { Col, Container, Row } from 'react-bootstrap';
import admision from '../assets/usm-admision-1.jpeg'
import informacion from '../assets/imagen-info.png'
import carrera from '../assets/imagen-carrera.png'
import valparaiso from '../assets/imagen-valpo.jpg'
import Dropdown from 'react-bootstrap/Dropdown';

export const HomePage = () => {
  return (
    <div className='page'>
      <NavBar />
      <p className='subtitle' style={{marginLeft: "70px"}}>Bienvenidos al portal de admisión de la Universidad Técnica Federico Santa Maria</p>
      <Container>
        <Row>
          <Col xs={4}>
            <Card body className='card-fecha'><b>Inicio periodo postulación: 02/01/2024</b></Card>
          </Col>
          <Col xs={4}>
            <Card body className='card-fecha'><b>Fin periodo postulación: 05/01/2024</b></Card>
          </Col>
          <Col xs={4}>
            <Card body className='card-fecha'><b>Resultados: 16/01/2024 </b></Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className='card-home'>
              <Container className='container-card'>
                <Row>
                  <Col xs={6}>
                    <Card.Img style={{objectFit:"scale-down", width:"46%",height:"100%", paddingLeft:"20px",paddingRight:"3px",paddingBottom:"4px"}} src={admision} />
                    <Card.Img style={{objectFit:"scale-down",width:"50%",paddingBottom:"6px"}} src={valparaiso} />
                  </Col>
                  <Col xs={6}>
                    <Card.Body>
                      <Card.Title><h1 className='title'>Postula aquí</h1></Card.Title>
                      <Card.Text>
                        <p className='plaintext'>La Universidad Técnica Federico Santa Maria ha iniciado su periodo de postulación para sus carreras, si estás interesado en inscribirte, apretá el botón inscripción que se encuentra en la parte inferior</p>
                      </Card.Text>
                      <Button className='button' href="/inscripcion">Inscribirse</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className='card-home' style={{marginTop: "10px"}}>
              <Container className='container-card'>
                  <Row>
                    <Col>
                      <Card.Img style={{objectFit:"scale-down", paddingTop:"30px",paddingLeft:"20px"}} src={informacion}/>
                    </Col>
                    <Col>
                      <Card.Body>
                        <Card.Title><h1 className='subtitle'>Información general</h1></Card.Title>
                        <Card.Text>
                          <p className='plaintext'>Si deseas buscar información general de la Universidad, se cuenta con un repositorio donde se encuentra toda la información reunida por secciones</p>
                        </Card.Text>
                        <Button className='button' href="/repositorio">Ver más</Button>
                      </Card.Body>
                    </Col>
                  </Row>
              </Container>
            </Card>
          </Col>
          <Col>
            <Card className='card-home' style={{marginTop: "10px"}}>
              <Container className='container-card'>
                <Row>
                  <Col>
                    <Card.Img style={{objectFit:"fill", paddingTop:"25px",paddingLeft:"20px"}} src={carrera} />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Title><h1 className='subtitle'>Carreras</h1></Card.Title>
                      <Card.Text>
                        <p className='plaintext'>Si deseas buscar información sobre una carrera en específico impartida por la Universidad, se tiene un apartado dedicado a cada una</p>
                      </Card.Text>
                        <Dropdown>
                          <Dropdown.Toggle className="button button-secundarios" id="dropdown-basic">
                            Ver más
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                              <Dropdown.Item href="/informatica">Ingeniería Civil Informática</Dropdown.Item>
                              <Dropdown.Item href="/matematicas">Ingeniería Civil Matemáticas</Dropdown.Item>
                               <Dropdown.Item href="/minas">Ingeniería Civil en Minas</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                    </Card.Body>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
