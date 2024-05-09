/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";

import Section from "../components/Section";
import SectionBox from '../components/SectionBox'
import Title from "../components/Title_Section";
//import TitleEffect from "../components/Title_Effect";

//import styles from '../components/Title_Section.module.css'
import stylesSection from '../components/Section.module.css'
//import ReadMore from "../components/ReadMore";

// import ImgWelder1 from '../../public/images/carousel/solda-robo.jpg'
// import ImgWelder2 from '../../public/images/carousel/trabalhador-soldagem.jpg'
import Img from '../../public/images/logos/logo-blue.png'
import Title_Effect from "../components/TitleEffect";
import { Link } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";




const About = () => {

  return (

    <Section classes={`about ${stylesSection.section} py-5`}>
      <Container>
        <Row>
          <Col sm={6} className='p-0 mt-5'>

            <Title
              classes='text-start'
              title="Sobre Mim"
              subtitle="Alguma coisa de subtitulo"
              effect={<Title_Effect />}
            />
            <SectionBox
              text="Com 15 anos de experiência como soldador e formação técnica sólida, sou Aldomar Assolin. Mergulhei na arte da soldagem, 
                                        agora trago minha paixão pela precisão e qualidade para o mundo da tecnologia. Conheça minha."
              classes={` d-flex flex-column align-items-start justify-content-center`}
            >


              <Link to="/about" className='links_pages'>
                <BsArrowBarRight size={16} className="mx-2"/>
                 Saiba Mais
              </Link>


            </SectionBox>

          </Col>


          <Col sm={6} className=" d-flex align-items-center justify-content-end">
            <SectionBox
              classes={`${stylesSection.Section_Box_Right}`}
            >
              <Figure>
                <Figure.Image
                  width={400}
                  alt="Logo AA Tecnology"
                  src={Img}
                />
                {/* <Figure.Caption>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption> */}
              </Figure>

            </SectionBox>
          </Col>
        </Row>
      </Container>
    </Section>

  )
}

export default About