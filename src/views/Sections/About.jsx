/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Col, Container, Figure, Row } from "react-bootstrap";

import Section from "../components/Section";
import SectionBox from '../components/SectionBox'
import Title from "../components/Title_Section";

import Img from '../../public/images/logos/logo-blue.png'
import Title_Effect from "../components/TitleEffect";
import { Link } from "react-router-dom";
import { BsArrowBarRight } from "react-icons/bs";




const About = () => {

  return (

    <Section classes="pt-5">
      <Container>
        <Row>
          <Col sm={6} className='p-0 mt-3 mt-sm-5'>

            <Title
              classes='text-start'
              title="Sobre Mim"
              subtitle="15 anos de atuação na área de soldagem"
              effect={<Title_Effect />}
            />
            <SectionBox
              text="Especializado em soldagem GMAW
                    convencional e GMAWP pulsada, com
                    amplo conhecimento em operação de
                    células de soldagem. Possuo habilidades
                    adicionais em montagem, corte com
                    maçarico, corte com plasma e usinagem.
                  "
              classes={`mb-3 d-flex flex-column align-items-start justify-content-center`}
            >


              <Link to="/about" className='links_pages mt-4 mt-sm-1'>
                <BsArrowBarRight size={16} className="mx-2" />
                Saiba Mais
              </Link>


            </SectionBox>

          </Col>


          <Col sm={6} className="d-flex align-items-center justify-content-center justify-content-md-end">
            <SectionBox
              classes="mb-0"
            >
              <Figure>
                <Figure.Image
                  width={400}
                  alt="Logo AA Tecnology"
                  src={Img}
                />
              </Figure>

            </SectionBox>
          </Col>
        </Row>
      </Container>
    </Section>

  )
}

export default About