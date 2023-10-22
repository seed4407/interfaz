import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm2.png'
import LogoUDC from '../assets/udc.png'
import LogoUSACH from '../assets/usach.png'
import LogoUCDN from '../assets/ucdn.png'
import Accordion from 'react-bootstrap/Accordion';

export const Minas = () => {
  return (
    <div className='page'>
      <NavBar />
      <center>
      <h1 className='subtitle'>Ingeniera Civil en Minas</h1>
      <CardGroup style={{ width: '58rem', height: '16rem', alignItems: 'center', margin: 0}}>
      <Card className='card-career-1'>
        <Card.Img variant="top" src={LogoUSM} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad F. Santa Maria</Card.Title>
          <Card.Text>
          Puntaje corte 2022: 618{"\n"} Puntaje corte 2021: 600 {"\n"} Puntaje corte 2020: 620
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
            Puntaje corte 2022: 628{"\n"} Puntaje corte 2021: 625 {"\n"} Puntaje corte 2020: 610
          </Card.Text>
          <Button className='button button-secundarios' href="https://admision.udec.cl/ingenieria-civil-de-minas/">Ver Universidad</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Card className='card-career-2'>
        <Card.Img variant="top" src={LogoUSACH} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad de Santiago de Chile</Card.Title>
          <Card.Text>
            Puntaje corte 2022: 655{"\n"} Puntaje corte 2021: 646 {"\n"} Puntaje corte 2020: 643
          </Card.Text>
          <Button className='button button-secundarios' href="https://admision.usach.cl/ingenieria/ingenieria-civil-en-minas">Ver Universidad</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
      <Card className='card-career-2'>
        <Card.Img variant="top" src={LogoUCDN} style={{opacity: 0.1}}/>
        <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>Universidad Cato. del Norte</Card.Title>
          <Card.Text>
            Puntaje corte 2022: 504{"\n"} Puntaje corte 2021: 500 {"\n"} Puntaje corte 2020: 502{' '}
          </Card.Text>
          <Button className='button button-secundarios' href="https://admision.ucn.cl/carreras/mineria/ingenieria-civil-de-minas/">Ver Universidad</Button>
        </Card.Body>
        </Card.ImgOverlay>
      </Card>
    </CardGroup>
    <Accordion defaultActiveKey="0"  style={{width: '58rem'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Peril de Egreso</Accordion.Header>
        <Accordion.Body className='plaintext' style={{textAlign: 'left'}}>
        La carrera de Ingeniería Civil de Minas especializa en la interacción con la corteza terrestre para la extracción de recursos minerales no renovables. En esta labor se debe resolver los problemas técnicos y de gestión sustentable que conlleva el negocio minero.

Pueden desarrollar su carrera en diversas áreas: en el desarrollo de proyectos (exploración, estudios preliminares, factibilidad, desarrollo y cierre de yacimientos); en la operación de una faena minera (extracción, procesamiento y comercialización); en el suministro de tecnologías, productos y servicios especializados desde empresas proveedoras; como emprendedores en el mercado minero o en áreas académicas y de investigación para la innovación.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Campo laboral</Accordion.Header>
        <Accordion.Body className='plaintext' style={{textAlign: 'left'}}>
        Dentro del área laboral, un Ingeniero Civil dedicado al trabajo en minas, tiene como campo de acción las empresas mineras, empresas de ingeniería, proyectos mineros del sector privado, instituciones gubernamentales relacionadas y empresas dedicadas al desarrollo vial. En cualquiera de estas áreas, el trabajo le permitirá desarrollar su potencial académico y profesional.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </center>
    </div>
  )
}

export default Minas
