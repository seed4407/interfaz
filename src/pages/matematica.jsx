import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm2.png'
import LogoUDC from '../assets/udc.png'
import LogoUSACH from '../assets/usach.png'
import LogoUDV from '../assets/udv.png'
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

export const Matematica = () => {
  return (
    <div className='page'>
      <NavBar />
      <center>
      <h1 className='subtitle'>Ingeniera Civil Matematica</h1>
      <CardGroup style={{ width: '58rem', height: '16rem', alignItems: 'center', margin: 0}}>
      <Card className='card-career-1'>
        <Card.Img variant="top" src={LogoUSM} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad F. Santa Maria</Card.Title>
          <Card.Text>
          Puntaje corte 2022: 603{"\n"} Puntaje corte 2021: 602 {"\n"} Puntaje corte 2020: 685
          </Card.Text>
          <Button variant="primary" href="/inscripcion">Inscribirse</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Card className='card-career-2'>
        <Card.Img variant="top" src={LogoUDC} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad de Concepcion</Card.Title>
          <Card.Text>
            Puntaje corte 2022: 511{"\n"} Puntaje corte 2021: 644 {"\n"} Puntaje corte 2020: 610
          </Card.Text>
          <Button className='button button-secundarios' href="https://admision.udec.cl/ingenieria-civil-matematica/">Ver Universidad</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Card className='card-career-2'>
        <Card.Img variant="top" src={LogoUSACH} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad de Santiago de Chile</Card.Title>
          <Card.Text>
            Puntaje corte 2022: 600{"\n"} Puntaje corte 2021: 602 {"\n"} Puntaje corte 2020: 615
          </Card.Text>
          <Button className='button button-secundarios' href="https://admision.usach.cl/ciencia/ingenieria-matematica">Ver Universidad</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Card className='card-career-2'>
        <Card.Img variant="top" src={LogoUDV} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad de Valparaiso</Card.Title>
          <Card.Text>
            Puntaje corte 2022: 525{"\n"} Puntaje corte 2021: 521 {"\n"} Puntaje corte 2020: 500{' '}
          </Card.Text>
          <Button className='button button-secundarios' href="https://2024.uv.cl/carreras/ingenieria-civil-matematica">Ver Universidad</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </CardGroup>
    <Table striped bordered hover size="sm" className="careerTable" style={{width: '58rem'}}>
      <thead>
          <tr>
              <th>NEM</th>
              <th>RANKING</th>
              <th>C. LECT</th>
              <th>M1</th>
              <th>Historia y CS</th>
              <th>CIENCIAS</th>
              <th>M2</th>
              <th>PUNTAJE PONDERADO MINIMO</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td>15</td>
              <td>20</td>
              <td>10</td>
              <td>35</td>
              <td>10</td>
              <td>Ó 10 </td>
              <td>10</td>
              <td>600</td>
          </tr>
      </tbody>
    </Table>
    <Accordion defaultActiveKey="0"  style={{width: '58rem'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Peril de Egreso</Accordion.Header>
        <Accordion.Body className='plaintext' style={{textAlign: 'left'}}>
        El Ingeniero Civil Matemático de la USM es un profesional con una formación de carácter general e integral, con amplios conocimientos en matemática, ingeniería y ciencias básicas, los que le permiten enfrentar con éxito, bajo el uso de un enfoque sistémico, la resolución de problemas de ingeniería y de matemática, que requieran de capacidad analítica y de pensamiento lógico. Su formación lo capacita para desarrollar aplicaciones y soluciones innovadoras en su especialidad y áreas afines. 

La formación de un Ingeniero Civil Matemático se basa en sólidas herramientas matemáticas que entregan al estudiante una amplia gama de opciones laborales, tanto en empresas como en industrias. Así mismo, la formación de carácter científica que entrega la carrera de Ingeniería Civil Matemática en la USM, permite a los estudiantes continuar sus estudios con miras obtener un postgrado en Ingeniería, Matemáticas o Economía.  

La carrera de Ingeniería Civil Matemática en la USM tiene una duración de 6 años (12 semestres) y está acreditada hasta Julio 2022 (Acredita CI). El plan de estudios se puede cursar tanto en Casa Central (Valparaíso) como en Campus San Joaquín (Santiago). Los alumnos al egresar obtienen el título profesional de Ingeniero Civil Matemático y el grado académico de Bachiller en Ciencias de la Ingeniería y Licenciado en Ciencias de la Ingeniería Matemática. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Malla Curricular</Accordion.Header>
        <Accordion.Body className='plaintext' style={{textAlign: 'left'}}>
        La malla curricular de Ingeniería Civil Matemática en la USM consta de tres etapas:
        <ul>
        <li>Ciclo Básico, el cual consta esencialmente de ramos de ciencias básicas, que buscan entregar la base teórica y práctica para la siguiente etapa.</li>
        <li>Ciclo Avanzado, donde se estudian diversos ramos especializados en Matemáticas, que se orientan a que el alumno desarrolle pensamiento reflexivo y analítico.  </li>
        <li>Electivos, que complementan y especializan la formación profesional del estudiante según sus áreas afinidades e intereses profesionales.</li>  
        </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </center>
    </div>
  )
}

export default Matematica
