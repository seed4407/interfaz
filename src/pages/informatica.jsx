import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm2.png'
import LogoUDC from '../assets/udc.png'
import LogoUSACH from '../assets/usach.png'
import LogoUACH from '../assets/uach.png'
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';

export const Informatica = () => {
  return (
    <div className='page'>
      <NavBar />
      <center>
      <h1 className='subtitle'>Ingeniera Civil Informatica</h1>
      <CardGroup style={{ width: '58rem', height: '16rem', alignItems: 'center', margin: 0}}>
      <Card className='card-career-1'>
        <Card.Img variant="top" src={LogoUSM} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad F. Santa Maria</Card.Title>
          <Card.Text>
          Puntaje corte 2022: 642{"\n"} Puntaje corte 2021: 632 {"\n"} Puntaje corte 2020: 628
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
            Puntaje corte 2022: 687{"\n"} Puntaje corte 2021: 665 {"\n"} Puntaje corte 2020: 637
          </Card.Text>
          <Button className='button button-secundarios' href="https://admision.udec.cl/ingenieria-civil-informatica/">Ver Universidad</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Card className='card-career-2'>
        <Card.Img variant="top" src={LogoUSACH} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad de Santiago de Chile</Card.Title>
          <Card.Text>
            Puntaje corte 2022: 688{"\n"} Puntaje corte 2021: 676 {"\n"} Puntaje corte 2020: 673
          </Card.Text>
          <Button className='button button-secundarios' href="https://admision.usach.cl/ingenieria/ingenieria-civil-en-informatica">Ver Universidad</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Card className='card-career-2'>
        <Card.Img variant="top" src={LogoUACH} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad Austral de Chile</Card.Title>
          <Card.Text>
            Puntaje corte 2022: 580{"\n"} Puntaje corte 2021: 568 {"\n"} Puntaje corte 2020: 563{' '}
          </Card.Text>
          <Button className='button button-secundarios' href="https://www.uach.cl/admision/valdivia/ingenieria-civil-en-informatica">Ver Universidad</Button>
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
          El Ingeniero Civil Informático de la UTFSM tiene un perfil de egreso que le permite:
          <ul>
          <li>Aportar a la formulación de las estrategias organizacionales globales considerando a las Tecnologías de Información y las personas como actores relevantes.</li>
          <li>Formular, desarrollar, y gestionar proyectos informáticos orientados a la innovación y emprendimiento, demostrando habilidades de trabajo en equipo multidisciplinarios.</li>
          <li>Tomar decisiones bajo certeza, riesgo e incertidumbre, fundamentándolas con la aplicación de técnicas cuantitativas.</li>
          <li>Desarrollar, implantar y mantener sistemas de software, confiables, eficientes y factibles.</li>
          <li>Fundamentar y analizar el funcionamiento de los computadores al nivel del hardware, del sistema operativo, de las comunicaciones digitales, y de los sistemas distribuidos.</li>
          <li>Analizar problemas susceptibles de ser resueltos computacionalmente, diseñar algoritmos y programar las soluciones utilizando las herramientas adecuadas en cuanto a lenguaje de programación y estructuras de datos.</li>
          <li>Aplicar los fundamentos teóricos y algorítmicos para desarrollar maneras eficientes de resolver problemas computacionales.  </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Malla Curricular</Accordion.Header>
        <Accordion.Body className='plaintext' style={{textAlign: 'left'}}>
        El Ingeniero Civil Informático de la UTFSM cuenta con sólidos conocimientos científicos, tecnológicos y de gestión, entregados a través de un conjunto de asignaturas obligatorias que cubren el eje central de la disciplina; y asignaturas electivas y libres, que permiten adaptar el plan de estudio a los avances tecnológicos y a los intereses propios de nuestros estudiantes, incluido el aprendizaje del idioma inglés, facilitando su inserción en un mundo globalizado.
Asignaturas electivas como Análisis Inteligente de Datos, Máquinas de Aprendizaje, Proceso de Creación de Videojuegos, Aplicaciones Móviles, Programación Paralela, Computación Gráfica, Innovación Tecnológica, Taller de Herramientas de Modelado de Procesos, entre otras, junto a actividades libres que permiten fortalecer habilidades profesionales y humanas; generan una malla curricular  flexible para una profesión que requiere siempre estar adaptándose a los cambios tecnológicos.
Por otra parte, la competencia del idioma inglés es incorporada con una propuesta innovadora, que se adecúa a las capacidades iniciales del estudiante, quién luego de rendir un test de diagnóstico, conoce la cantidad de cursos de inglés que deberá tomar (convalidables por asignaturas libres y/o electivas), para antes de titularse lograr un determinado nivel de dominio (550 puntos en TOEIC).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Campo laboral</Accordion.Header>
        <Accordion.Body className='plaintext' style={{textAlign: 'left'}}>
        Nuestros exalumnos están presentes en todo tipo de empresas y organizaciones nacionales y extranjeras del sector tecnológico, financiero, minería, industria de servicios y productiva, gobierno,entre otras.

Tenemos presencia en empresas como: Google, Amazon, Microsoft, Codelco, LATAM, Telefónica, ALMA, Banco de Chile, Banco Central, Mego, IguanaBee, Clínica Las Condes, Clínica Alemana, Ministerio de Transporte y Telecomunicaciones y más.

Un Ingeniero Civil Informático de la UTFSM se puede desempeñar por ejemplo, en áreas de Gestión de Proyectos, Desarrollo y Gestión de Infraestructura TIC, Desarrollo de Software, Automatización de Procesos de Negocios, Administrador de Sistemas, Diseño y Gestión de Data Centers, Seguridad, Análisis Inteligente de Datos. También puede ser consultor en TIC, emprendedor digital, investigador o trabajar en la enseñanza de la misma disciplina en instituciones de educación superior.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </center>
    </div>
  )
}

export default Informatica
