import React, { useState } from 'react'
import NavBar from '../components/nav_bar'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import RUT from 'rut.js';

export const Inscripcion = () => {
  const [rut, setRut] = useState('');
  const [rutError, setRutError] = useState('');
  const handleRutChange = (event) => {
    const inputValue = event.target.value;
    setRut(inputValue);

    if (inputValue.trim() === '') {
      setRutError('');
    } else {
      const isValid = RUT.validate(inputValue);
      if (!isValid) {
        setRutError('RUT inválido');
      } else {
        setRutError('');
      }
    }
  };

  return (
    <div className='page'>
      <NavBar />
      <Container style={{marginTop: '10px'}}>
        <Row>
        <Col>
        <h1 className='subtitle'>Datos Personales</h1>
        <Form style={{ width: '40rem', border: '0.5px solid #0463a2', padding: '15px', borderRadius: '10px', backgroundColor: '#fff', marginRight: '20px'}}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="Nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group as={Col} controlId="PrimerApellido">
            <Form.Label>Primer apellido</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group as={Col} controlId="SegundoApellido">
            <Form.Label>Segundo apellido</Form.Label>
            <Form.Control/>
          </Form.Group>
        </Row>

        <Row style={{ paddingTop: '25px' }}>
          <Form.Group as={Col} controlId="Rut">
            <Form.Label>Rut</Form.Label>
            <Form.Control
            type="text"
            placeholder="12345678-9"
            value={rut}
            onChange={handleRutChange}
            isInvalid={rutError !== ''}
            />
            <Form.Control.Feedback type="invalid">
              {rutError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="Fecha de nacimiento">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Row>

        <Row className="mb-3" style={{ paddingTop: '25px' }}>
          <Form.Group as={Col} controlId="Region">
            <Form.Label>Región</Form.Label>
            <Form.Select defaultValue="Elegir">
              <option></option>
              <option>Región de Arica y Parinacota</option>
              <option>Región de Tarapacá</option>
              <option>Región de Antofagasta</option>
              <option>Región de Atacama</option>
              <option>Región de Coquimbo</option>
              <option>Región de Valparaíso</option>
              <option>Región Metropolitana de Santiago</option>
              <option>Región del Libertador General Bernardo O'Higgins</option>
              <option>Región del Maule</option>
              <option>Región del Ñuble</option>
              <option>Región del Biobío</option>
              <option>Región de La Araucanía</option>
              <option>Región de Los Ríos</option>
              <option>Región de Los Lagos</option>
              <option>Región de Aysén del General Carlos Ibáñez del Campo</option>
              <option>Región de Magallanes y de la Antártica Chilena</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="Comuna">
            <Form.Label>Comuna</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="Direccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control/>
        </Form.Group>

        <Row className="mb-3" style={{ paddingTop: '25px' }}>
          <Form.Group as={Col} xs={7} controlId="CorreoElectronico">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control placeholder="example@email.com" type="email"/>
          </Form.Group>

          <Form.Group as={Col} controlId="Telefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="tel"/>
          </Form.Group>
        </Row>

      </Form>
      </Col>

      <Col>
      <h1 className='subtitle'>Datos Académicos</h1>
        <Form style={{ border: '0.5px solid #0463a2', padding: '15px', borderRadius: '10px', backgroundColor: '#fff'}}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="ColegioRegión">
            <Form.Label>Región de tu colegio</Form.Label>
            <Form.Select defaultValue="Elegir">
              <option></option>
              <option>Región de Arica y Parinacota</option>
              <option>Región de Tarapacá</option>
              <option>Región de Antofagasta</option>
              <option>Región de Atacama</option>
              <option>Región de Coquimbo</option>
              <option>Región de Valparaíso</option>
              <option>Región Metropolitana de Santiago</option>
              <option>Región del Libertador General Bernardo O'Higgins</option>
              <option>Región del Maule</option>
              <option>Región del Ñuble</option>
              <option>Región del Biobío</option>
              <option>Región de La Araucanía</option>
              <option>Región de Los Ríos</option>
              <option>Región de Los Lagos</option>
              <option>Región de Aysén del General Carlos Ibáñez del Campo</option>
              <option>Región de Magallanes y de la Antártica Chilena</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="ColegioComuna">
              <Form.Label>Comuna de tu colegio</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={9} controlId="ColegioNombre">
              <Form.Label>Nombre de tu colegio</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="EgresoYear">
              <Form.Label>Año de egreso</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <h6>Promedios (Ejemplo: 6,3)</h6>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="Prom1">
              <Form.Control style={{ fontSize: '13px' }} placeholder="Primero Medio" />
            </Form.Group>
            <Form.Group as={Col} controlId="Prom2">
              <Form.Control style={{ fontSize: '13px' }} placeholder="Segundo Medio" />
            </Form.Group>
            <Form.Group as={Col} controlId="Prom3">
              <Form.Control style={{ fontSize: '13px' }} placeholder="Tercero Medio" />
            </Form.Group>
            <Form.Group as={Col} controlId="Prom4">
              <Form.Control style={{ fontSize: '13px' }} placeholder="Cuarto Medio" />
            </Form.Group>
          </Row>

        </Form>

        <Form style={{ border: '0.5px solid #0463a2', padding: '15px', borderRadius: '10px', backgroundColor: '#fff', marginTop: '5px'}}>
        <h6>Adjunta una imagen de tu cédula de identidad por ambos lados en formato PDF, la cédula debe estar vigente.</h6>
          <Form.Group controlId="pdf">
            <Form.Control type="file" accept="application/pdf"/>
          </Form.Group>
        </Form>

        <Form style={{ border: '0.5px solid #0463a2', padding: '15px', paddingBottom: '27px', borderRadius: '10px', backgroundColor: '#fff', marginTop: '5px'}}>
          <Form.Group controlId="EgresoYear">
            <Form.Label>Escoge la carrera a la que quieres postular</Form.Label>
              <Form.Select defaultValue="Elegir">
                <option></option>
                <option>Ingeniería Civil Informática</option>
                <option>Ingeniería Civil Matemáticas</option>
                <option>Ingeniería Civil en Minas</option>
              </Form.Select>
            </Form.Group>
          </Form>

      </Col>
      </Row>
    </Container>
    <center>
      <Button style={{ marginTop: '25px'}} variant="primary" type="submit" size="lg">
          Postular
        </Button>
    </center>

    </div>
  )
}

export default Inscripcion
