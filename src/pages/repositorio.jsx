import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import NavBar from '../components/nav_bar'
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


export const Repositorio = () => {
    return (
      <div className='page'>
        <NavBar />
        <p className='subtitle' style={{marginLeft: "70px"}}>Recopilacion de toda la informacion importante de la Universidad</p>
        <Container>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><b>Vías de Admisión</b></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                    <li><h1 className='plaintext'><b>Admisión vía Prueba de Acceso a la Educación Superior - PAES</b></h1>
                        <p className='plaintext'>El ingreso tradicional a primer año de las carreras ofrecidas por la Universidad Técnica Federico Santa María se realiza anualmente a través del Proceso Nacional de Admisión a las Universidades adscritas al Consejo de Rectores.</p></li>
                        <li><h1 className='plaintext'><b>Admisión Ingreso Directo a Carreras Técnicas Universitarias</b></h1>
                        <p className='plaintext'>La Universidad Técnica Federico Santa María, cuenta con la vía de ingreso directo para sus carreras técnicas universitarias, cuyo objetivo es fomentar el acceso y la articulación hacia la educación superior.</p></li>
                        <li><h1 className='plaintext'><b>Ingreso a través de Admisión Especial</b></h1>
                        <p className='plaintext'>En la USM reconocemos la diversidad de talentos y mérito de sus postulantes, por ello habilitamos el ingreso vía Admisión Especial, que permite acceder a una carrera sin la necesidad de obtener puntaje en la Prueba de Acceso a la Educación Superior (PAES). Cabe destacar que como Institución siempre recomendaremos la rendición de la prueba de acceso, ya que algunos beneficios ministeriales están vinculados a ésta.</p></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><b>Arancel</b></Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Row>
                                <Col>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>Carrera</th>
                                                <th>Aranceles Anuales Admisión 2023 (CLP)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Arquitectura</td>
                                                <td>5.380.000</td>
                                            </tr>
                                            <tr>
                                                <td>Construcción Civil</td>
                                                <td>4.950.000</td>
                                            </tr>
                                            <tr>
                                                <td>Ingeniería Civil</td>
                                                <td>5.870.000</td>
                                            </tr>
                                            <tr>
                                                <td>Ingeniería Civil Ambiental</td>
                                                <td>5.870.000</td>
                                            </tr>
                                            <tr>
                                                <td>Ingeniería Civil de Minas</td>
                                                <td>5.870.000</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>Carrera</th>
                                                <th>Aranceles Anuales Admisión 2023 (CLP)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Ingeniería Civil Eléctrica</td>
                                                <td>5.870.000</td>
                                            </tr>
                                            <tr>
                                                <td>Ingeniería Civil Electrónica</td>
                                                <td>5.870.000</td>
                                            </tr>
                                            <tr>
                                                <td>Ingeniería Civil Física</td>
                                                <td>5.870.000</td>
                                            </tr>
                                            <tr>
                                                <td>Ingeniería Civil Industrial</td>
                                                <td>5.870.000</td>
                                            </tr>
                                            <tr>
                                                <td>Ingeniería Civil Informática</td>
                                                <td>5.870.000</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><b>Becas y Beneficios</b></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                    <li><h1 className='plaintext'><b>Premio Puntaje Máximo PAES</b></h1>
                        <p className='plaintext'>Beca de arancel y matrícula por la duración nominal de la carrera.</p></li>
                        <li><h1 className='plaintext'><b>Premio a la Excelencia para Primer Año</b></h1>
                        <p className='plaintext'>Los postulantes que obtengan puntajes de excelencia en las Pruebas de Acceso a la Educación Superior (PAES) se harán merecedores del Premio a la Excelencia para Primer Año, consistente en la liberación total o parcial de pago del arancel sólo por el primer año, de acuerdo al puntaje obtenido</p></li>
                        <li><h1 className='plaintext'><b>Beca de Primer año al Mérito Académico para Estudiantes Nuevos Vía Admisión Centralizada</b></h1>
                        <p className='plaintext'>Esta beca beneficia a postulantes matriculados que obtengan el mayor puntaje de postulación vía Centralizada en cada una de las carreras impartidas en los diferentes Campus o Sedes de la Universidad. El beneficio consiste en la liberación total del pago del arancel sólo por el primer año, sin ser posible su extensión.</p></li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><b>Preguntas Frecuentes</b></Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
      </div>
    )
  }
  
  export default Repositorio