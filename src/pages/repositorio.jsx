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
                    <Accordion.Header><b>Informacion Adicional</b></Accordion.Header>
                    <Accordion.Body>
                    <ul>
                    <li><h1 className='plaintext'><b>¿Donde se localiza?</b></h1>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>Campus/Sede</th>
                                                <th>Ubicacion</th>
                                                <th>Contacto</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Campus Casa Central Valparaíso</td>
                                                <td>Avenida España 1680, Valparaíso</td>
                                                <td>+56 32 265 4000</td>
                                            </tr>
                                            <tr>
                                                <td>Campus San Joaquín</td>
                                                <td>Avenida Vicuña Mackenna 3939, San Joaquín, Santiago</td>
                                                <td>+56 2 2303 7000</td>
                                            </tr>
                                            <tr>
                                                <td>Campus Vitacura</td>
                                                <td>Avenida Santa María 6400, Vitacura, Santiago</td>
                                                <td>+56 2 3202 8000</td>
                                            </tr>
                                            <tr>
                                                <td>Sede Viña del Mar</td>
                                                <td>Avenida Federico Santa María 6090, Viña del Mar</td>
                                                <td>+56 32 2277 700</td>
                                            </tr>
                                            <tr>
                                                <td>Sede Concepción</td>
                                                <td>Arteaga Alemparte 943, Hualpén, Concepción</td>
                                                <td>+56 41 2407 500</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                    </li>
                    <li><h1 className='plaintext'><b>Si tengo una duda, ¿a quien puedo consultar?</b></h1>
                                    <Table striped bordered hover size="sm">
                                        <thead>
                                            <tr>
                                                <th>Contacto</th>
                                                <th>Correo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Dirección de Admisión</td>
                                                <td>admision@usm.cl</td>
                                            </tr>
                                            <tr>
                                                <td>Dirección de Relaciones Estudiantiles</td>
                                                <td>info.rree@usm.cl</td>
                                            </tr>
                                            <tr>
                                                <td>Directora de Emprendimiento</td>
                                                <td>dir.emprendimiento@usm.cl</td>
                                            </tr>
                                            <tr>
                                                <td>Dirección de Recursos Humanos</td>
                                                <td>informaciones.rrhh@usm.cl</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                    </li>

                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
      </div>
    )
  }
  
  export default Repositorio