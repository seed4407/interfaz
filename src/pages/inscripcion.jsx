import React, { useState } from 'react'
import NavBar from '../components/nav_bar'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import RUT from 'rut.js';
import Modal from 'react-bootstrap/Modal';

export const Inscripcion = () => {
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nombreColegio, setNombreColegio] = useState('');
  const [regionColegio, setRegionColegio] = useState('');
  const [comunaColegio, setComunaColegio] = useState('');
  const [egreso, setEgreso] = useState('');
  const [prom1, setProm1] = useState('');
  const [prom2, setProm2] = useState('');
  const [prom3, setProm3] = useState('');
  const [prom4, setProm4] = useState('');
  const [file, setFile] = useState(0);
  const [carrera, setCarrera] = useState('');
  const [rut, setRut] = useState('');
  const [rutError, setRutError] = useState('');
  const [botonClicado, setBotonClicado] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Verificar si todos los campos están completos
    if (nombre && apellido1 && apellido2 && birthdate && region && comuna && direccion && email && telefono && nombreColegio && 
      regionColegio && comunaColegio && egreso && prom1 && prom2 && prom3 && prom4 && file && rut) {
        setShowModal(true);
    } else {
      // Mostrar un mensaje de error en color rojo
      setBotonClicado(true);
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
            <Form.Control value={nombre} onInput={e => setNombre(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="PrimerApellido">
            <Form.Label>Primer apellido</Form.Label>
            <Form.Control value={apellido1} onInput={e => setApellido1(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="SegundoApellido">
            <Form.Label>Segundo apellido</Form.Label>
            <Form.Control value={apellido2} onInput={e => setApellido2(e.target.value)} />
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
            <Form.Control type="date" value={birthdate} onInput={e => setBirthdate(e.target.value)} />
          </Form.Group>
        </Row>

        <Row className="mb-3" style={{ paddingTop: '25px' }}>
          <Form.Group as={Col} controlId="Region">
            <Form.Label>Región</Form.Label>
            <Form.Select value={region} onChange={(e) => setRegion(e.target.value)}>
              <option defaultValue=""></option>
              <option value="Arica">Región de Arica y Parinacota</option>
              <option value="Tarapaca">Región de Tarapacá</option>
              <option value="Antofagasta">Región de Antofagasta</option>
              <option value="Atacama">Región de Atacama</option>
              <option value="Coquimbo">Región de Coquimbo</option>
              <option value="Valparaiso">Región de Valparaíso</option>
              <option value="Santiago">Región Metropolitana de Santiago</option>
              <option value="OHiggins">Región del Libertador General Bernardo O'Higgins</option>
              <option value="Maule">Región del Maule</option>
              <option value="Nuble">Región del Ñuble</option>
              <option value="Biobio">Región del Biobío</option>
              <option value="Araucania">Región de La Araucanía</option>
              <option value="Rios">Región de Los Ríos</option>
              <option value="Lagos">Región de Los Lagos</option>
              <option value="Aysen">Región de Aysén del General Carlos Ibáñez del Campo</option>
              <option value="Magallanes">Región de Magallanes y de la Antártica Chilena</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="Comuna">
            <Form.Label>Comuna</Form.Label>
            <Form.Control value={comuna} onInput={e => setComuna(e.target.value)} />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="Direccion">
          <Form.Label>Dirección</Form.Label>
          <Form.Control value={direccion} onInput={e => setDireccion(e.target.value)} />
        </Form.Group>

        <Row className="mb-3" style={{ paddingTop: '25px' }}>
          <Form.Group as={Col} xs={7} controlId="CorreoElectronico">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control placeholder="example@email.com" type="email" value={email} onInput={e => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group as={Col} controlId="Telefono">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="tel" value={telefono} onInput={e => setTelefono(e.target.value)} />
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
            <Form.Select value={regionColegio} onChange={(e) => setRegionColegio(e.target.value)}>
              <option defaultValue=""></option>
              <option value="Arica">Región de Arica y Parinacota</option>
              <option value="Tarapaca">Región de Tarapacá</option>
              <option value="Antofagasta">Región de Antofagasta</option>
              <option value="Atacama">Región de Atacama</option>
              <option value="Coquimbo">Región de Coquimbo</option>
              <option value="Valparaiso">Región de Valparaíso</option>
              <option value="Santiago">Región Metropolitana de Santiago</option>
              <option value="OHiggins">Región del Libertador General Bernardo O'Higgins</option>
              <option value="Maule">Región del Maule</option>
              <option value="Nuble">Región del Ñuble</option>
              <option value="Biobio">Región del Biobío</option>
              <option value="Araucania">Región de La Araucanía</option>
              <option value="Rios">Región de Los Ríos</option>
              <option value="Lagos">Región de Los Lagos</option>
              <option value="Aysen">Región de Aysén del General Carlos Ibáñez del Campo</option>
              <option value="Magallanes">Región de Magallanes y de la Antártica Chilena</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="ColegioComuna">
              <Form.Label>Comuna de tu colegio</Form.Label>
              <Form.Control value={comunaColegio} onInput={e => setComunaColegio(e.target.value)} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={9} controlId="ColegioNombre">
              <Form.Label>Nombre de tu colegio</Form.Label>
              <Form.Control value={nombreColegio} onInput={e => setNombreColegio(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="EgresoYear">
              <Form.Label>Año de egreso</Form.Label>
              <Form.Control value={egreso} onInput={e => setEgreso(e.target.value)} />
            </Form.Group>
          </Row>

          <h6>Promedios (Ejemplo: 6,3)</h6>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="Prom1">
              <Form.Control style={{ fontSize: '13px' }} placeholder="Primero Medio" value={prom1} onInput={e => setProm1(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="Prom2">
              <Form.Control style={{ fontSize: '13px' }} placeholder="Segundo Medio" value={prom2} onInput={e => setProm2(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="Prom3">
              <Form.Control style={{ fontSize: '13px' }} placeholder="Tercero Medio" value={prom3} onInput={e => setProm3(e.target.value)} />
            </Form.Group>
            <Form.Group as={Col} controlId="Prom4">
              <Form.Control style={{ fontSize: '13px' }} placeholder="Cuarto Medio" value={prom4} onInput={e => setProm4(e.target.value)} />
            </Form.Group>
          </Row>

        </Form>

        <Form style={{ border: '0.5px solid #0463a2', padding: '15px', borderRadius: '10px', backgroundColor: '#fff', marginTop: '5px'}}>
        <h6>Adjunta una imagen de tu cédula de identidad por ambos lados en formato PDF, la cédula debe estar vigente.</h6>
          <Form.Group controlId="pdf">
            <Form.Control type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files.length)} />
          </Form.Group>
        </Form>

        <Form style={{ border: '0.5px solid #0463a2', padding: '15px', paddingBottom: '27px', borderRadius: '10px', backgroundColor: '#fff', marginTop: '5px'}}>
          <Form.Group controlId="EgresoYear">
            <Form.Label>Escoge la carrera a la que quieres postular</Form.Label>
              <Form.Select value={carrera} onChange={(e) => setCarrera(e.target.value)}>
                <option defaultValue=""></option>
                <option value="Informatica">Ingeniería Civil Informática</option>
                <option value="Matematicas">Ingeniería Civil Matemáticas</option>
                <option value="Minas">Ingeniería Civil en Minas</option>
              </Form.Select>
            </Form.Group>
          </Form>

      </Col>
      </Row>
    </Container>
    {botonClicado && (
        <center>
          <p style={{ color: 'red', marginBottom: '-20px', marginTop: '20px' }}>
            ¡Completa todos los campos antes de enviar!
          </p>
        </center>
      )}
    <center>
      <Button style={{ marginTop: '25px'}} variant="primary" type="submit" size="lg" onClick={handleFormSubmit}>
          Postular
        </Button>
        
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario enviado exitosamente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡Tu formulario ha sido enviado exitosamente!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </center>

    </div>
  )
}

export default Inscripcion
