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

export const Informatica = () => {
  return (
    <div className='page'>
      <NavBar />
      <h1 className='subtitle'>Ingeniera Civil Informatica</h1>
      <center>
      <CardGroup style={{ width: '58rem', height: '16rem', alignItems: 'center', margin: 0}}>
      <Card className='card-career-1'>
        <Card.Img variant="top" src={LogoUSM} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad F. Santa Maria</Card.Title>
          <Card.Text>
          Puntaje corte 2022: 642{"\n"} Puntaje corte 2021: 632 {"\n"} Puntaje corte 2020: 628
          </Card.Text>
          <Button variant="primary">Inscribirse</Button>
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
          <Button className='button button-secundarios' href="/">Ver Universidad</Button>
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
          <Button className='button button-secundarios' href="/">Ver Universidad</Button>
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
          <Button className='button button-secundarios' href="/">Ver Universidad</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </CardGroup>
    </center>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Peril de Egreso</Accordion.Header>
        <Accordion.Body>
        <p className='plaintext'>El Ingeniero Civil Informático de la UTFSM tiene un perfil de egreso que le permite:

• Aportar a la formulación de las estrategias organizacionales globales considerando a las Tecnologías de Información y las personas como actores relevantes.
• Formular, desarrollar, y gestionar proyectos informáticos orientados a la innovación y emprendimiento, demostrando habilidades de trabajo en equipo multidisciplinarios.
• Tomar decisiones bajo certeza, riesgo e incertidumbre, fundamentándolas con la aplicación de técnicas cuantitativas.
• Desarrollar, implantar y mantener sistemas de software, confiables, eficientes y factibles.
• Fundamentar y analizar el funcionamiento de los computadores al nivel del hardware, del sistema operativo, de las comunicaciones digitales, y de los sistemas distribuidos.
• Analizar problemas susceptibles de ser resueltos computacionalmente, diseñar algoritmos y programar las soluciones utilizando las herramientas adecuadas en cuanto a lenguaje de programación y estructuras de datos.
• Aplicar los fundamentos teóricos y algorítmicos para desarrollar maneras eficientes de resolver problemas computacionales. </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Malla Curricular</Accordion.Header>
        <Accordion.Body>
        El Ingeniero Civil Informático de la UTFSM cuenta con sólidos conocimientos científicos, tecnológicos y de gestión, entregados a través de un conjunto de asignaturas obligatorias que cubren el eje central de la disciplina; y asignaturas electivas y libres, que permiten adaptar el plan de estudio a los avances tecnológicos y a los intereses propios de nuestros estudiantes, incluido el aprendizaje del idioma inglés, facilitando su inserción en un mundo globalizado.
Asignaturas electivas como Análisis Inteligente de Datos, Máquinas de Aprendizaje, Proceso de Creación de Videojuegos, Aplicaciones Móviles, Programación Paralela, Computación Gráfica, Innovación Tecnológica, Taller de Herramientas de Modelado de Procesos, entre otras, junto a actividades libres que permiten fortalecer habilidades profesionales y humanas; generan una malla curricular  flexible para una profesión que requiere siempre estar adaptándose a los cambios tecnológicos.
Por otra parte, la competencia del idioma inglés es incorporada con una propuesta innovadora, que se adecúa a las capacidades iniciales del estudiante, quién luego de rendir un test de diagnóstico, conoce la cantidad de cursos de inglés que deberá tomar (convalidables por asignaturas libres y/o electivas), para antes de titularse lograr un determinado nivel de dominio (550 puntos en TOEIC).
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default Informatica
