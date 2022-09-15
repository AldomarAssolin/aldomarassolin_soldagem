import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'react-bootstrap'

//Components
import Title from '../components/Title_Section'
import SectionBox from '../components/Section_Box'
import Section from '../components/Section'
import TitleEffect from '../components/Title_Effect'
import CardsExperinces from '../components/Cards_Experinces'

//Styles
import styles from '../components/Title_Section.module.css'
import stylesSection from '../components/Section.module.css'

//Images
import IMGBanner250 from '../../images/img-home/Logo_Brancox250.png'
import IMGBanner500 from '../../images/img-home/Logo_Brancox500.png'
import AgrimecLogo from '../../images/experiences/agrimec-implementos-agricolas-logo.jpg'
import CofelmaLogo from '../../images/experiences/logo-cofelma.png'

const Home = () => {
  
  return (
    <Container>
        <Section classes='banner'>
          <Row className='d-flex align-items-center'>
            <Col sm={6}>
              <SectionBox
                titles={
                    <Title 
                      classes={`${styles.Title_box} mb-sm-2`} 
                      title="Aldomar Assolin" 
                      subtitle="Soldador" 
                      effect={<TitleEffect/>}
                    />
                  }
                  text="O Crescimento profissional é um dos meus objetivos dentro de uma empresa, exercendo a função à mim destinada, 
                  aplicando as normas de segurança e zelando pela saúde, integridade e segurança de todos os trabalhadores, 
                  bem como o crescimento em equipe."
                  classes={`${stylesSection.Section_Box_Left} ${stylesSection.justify} d-flex flex-column align-items-start justify-content-center`}
              >
                <div className='text-end w-100'>
                  <Button variant=''>
                    <Link to='/About' className='links'>Saiba Mais...</Link>
                  </Button>
                </div>
              </SectionBox>
            </Col>
            <Col sm={6}>
              <SectionBox classes={`${stylesSection.Section_Box_Right} d-flex align-items-center justify-content-center`}>
                  <picture>
                    <source media="(max-width: 767px)" srcSet={IMGBanner250} />
                    <source media="(min-width: 768px)" srcSet={IMGBanner500} />
                    <img src={IMGBanner500} alt="Logomarca" style={{width: '100%'}} />
                  </picture>
              </SectionBox>
            </Col>
          </Row>
        </Section>
        <Section className='apresentation'>
            <Title classes={styles.Title_Section} title="Quem Sou?" subtitle="Soldador, Técnico em Soldagem, Operador de Soldagem"/>
            <SectionBox 
              classes={`${stylesSection.justifyText} px-3`}
              text="Ao longo de muitos anos atuando no setor metalúrgico, me identifiquei com a soldagem, determinado a desenvolver 
              minhas habilidades e conhecimentos acerca deste tópico me dediquei a aprender tudo que pude na área. Desenvolvi habilidades desde a 
              montagem de estruturas gerais à soldagem de tubulções. Com o desenvolvimento acelerado de novas tecnologias, vieram novos desafios
              e com isso equipamentos e processos mais modernos, significando a necessidade de atualizações periódicas. Além da automação dos processos, 
              temos corrente pulsada nos processos MAG e TIG, nos trazendo mais complexidade no procedimento de soldagem e operação desses equipamentos. 
              No curso Técnico em Soldagem, cursado no Colégio Técnico Industrial de Santa Maria, RS, tive a portunidade de conhecer, estudar e entender 
              diversas dessas tecnologias, com os quais desenvolvo meu trabalho e compartilho esse conhecimento com demais colegas."
            />
            <Section classes={stylesSection.Section}>
              <SectionBox
                titles={
                  <Title 
                    classes={styles.Title_box} 
                    title="Minha Box" 
                    subtitle="Essa é minha box esquerda!" 
                    effect={<TitleEffect/>} 
                  />
                }
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni quod velit, facilis necessitatibus 
                dolores saepe aperiam sint, consequatur atque laudantium blanditiis ullam, consectetur nemo et minima illum quia cum."
                classes={stylesSection.Section_Box_Left}
              >
              </SectionBox>
              <SectionBox
                titles={
                  <Title 
                    classes={styles.Title_box} 
                    title="Minha Box" 
                    subtitle="Essa é minha box direita!" 
                    effect={<TitleEffect/>} 
                  />
                }
                classes={stylesSection.Section_Box_Right}
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni quod velit, facilis necessitatibus 
                dolores saepe aperiam sint, consequatur atque laudantium blanditiis ullam, consectetur nemo et minima illum quia cum."
              />
            </Section>
        </Section>
       
        <Section>
              <Title 
                classes={styles.Title_Section} 
                title="Seção de Cards" 
                subtitle="Aqui ficam os cards de experiências"  
              />
              <Section>
                <CardsExperinces
                  className='text-start'
                  cardImg={AgrimecLogo}
                  cardTitle='Agrimec Agro Industrial e Mecânica LTDA'
                  cardSubtitle='Montador/Soldador'
                  cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni quod velit, facilis necessitatibus 
                            dolores saepe aperiam sint, consequatur atque laudantium blanditiis ullam, consectetur nemo et minima 
                            illum quia cum."
                  cardDataIn='01/07/2008'
                  cardDataOut='07/10/2010'
                />
                <CardsExperinces
                  className='text-start'
                  cardImg={CofelmaLogo}
                  cardTitle='Agrimec Agro Industrial e Mecânica LTDA'
                  cardSubtitle='Montador/Soldador'
                  cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni quod velit, facilis necessitatibus 
                            dolores saepe aperiam sint, consequatur atque laudantium blanditiis ullam, consectetur nemo et minima 
                            illum quia cum."
                  cardDataIn='01/07/2008'
                  cardDataOut='07/10/2010'
                />
                <CardsExperinces
                  className='text-start'
                  cardImg={AgrimecLogo}
                  cardTitle='Agrimec Agro Industrial e Mecânica LTDA'
                  cardSubtitle='Montador/Soldador'
                  cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni quod velit, facilis necessitatibus 
                            dolores saepe aperiam sint, consequatur atque laudantium blanditiis ullam, consectetur nemo et minima 
                            illum quia cum."
                  cardDataIn='01/07/2008'
                  cardDataOut='07/10/2010'
                />
              </Section>
        </Section>
    </Container>
  )
}

export default Home