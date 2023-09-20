import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";

import Section from "../components/Section";
import SectionBox from '../components/Section_Box'
import Title from "../components/Title_Section";
import TitleEffect from "../components/Title_Effect";

import styles from '../components/Title_Section.module.css'
import stylesSection from '../components/Section.module.css'
import ReadMore from "../components/ReadMore";

import ImgWelder1 from '../../public/images/carousel/solda-robo.jpg'
import ImgWelder2 from '../../public/images/carousel/trabalhador-soldagem.jpg'
import ImgWelder3 from '../../public/images/carousel/badWelde2.jpg'




const About = () => {

    return (
    
        <Section className='about'>
        {/* <Title classes={styles.Title_Section} title="Quem Sou?" subtitle="Soldador, Técnico em Soldagem, Operador de Soldagem" />
        <SectionBox
          classes={`${stylesSection.justifyText}`}
          text="Ao longo de muitos anos atuando no setor metalúrgico, me identifiquei com a soldagem, determinado a desenvolver 
              minhas habilidades e conhecimentos acerca deste tópico me dediquei a aprender tudo que pude na área. Desenvolvi habilidades desde a 
              montagem de estruturas gerais à soldagem de tubulções. Com o desenvolvimento acelerado de novas tecnologias, vieram novos desafios
              e com isso equipamentos e processos mais modernos, significando a necessidade de atualizações periódicas. Além da automação dos processos, 
              temos corrente pulsada nos processos MAG e TIG, nos trazendo mais complexidade no procedimento de soldagem e operação desses equipamentos. 
              No curso Técnico em Soldagem, cursado no Colégio Técnico Industrial de Santa Maria, RS, tive a portunidade de conhecer, estudar e entender 
              diversas dessas tecnologias, com os quais desenvolvo meu trabalho e compartilho esse conhecimento com demais colegas."
        /> */}
        <Section classes={stylesSection.Section}>
          <Row>
            <Col sm={6} className='p-0 mb-5'>
              <SectionBox
                titles={
                  <Title
                    classes={`${styles.Title_box}`}
                    title="Soldador"
                    subtitle="De estruturas metálicas à tubulações"
                    effect={<TitleEffect />}
                  />
                }
                text="Soldagem nos processos GMAW, GMAWP, FCAW, SMAW, GTAW, SAW. Soldagem automatizada, fontes eletrônicas, com corrente 
                          pulsada."
                classes={`${stylesSection.Section_Box_Left} ${stylesSection.justify} px-3`}
              >
                <ReadMore linkClass='links' to='/About' textLink='Saiba mais...' />
              </SectionBox>
            </Col>
            <Col sm={6}>
              <SectionBox
                classes={stylesSection.Section_Box_Right}
              >
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100  rounded-3"
                      src={ImgWelder1}
                      alt="First slide"
                    />
                    <Carousel.Caption className='fs-6'>
                      <Title title='Automação' subtitle='Operador de Soldagem' />
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-3"
                      src={ImgWelder2}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <Title title='Processos' subtitle='Todos os processos de soldagem' />
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-3"
                      src={ImgWelder3}
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <Title classes='text-secondary' title='Formação' subtitle='técnico em Soldagem' />
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </SectionBox>
            </Col>
          </Row>
        </Section>
      </Section>

    )
}

export default About