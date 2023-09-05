import React from 'react'
import { Container } from 'react-bootstrap'
import GoToTop from '../components/GoToTop'
import CardsExperinces from '../components/Cards_Experinces'
import Section from '../components/Section'
import Title from '../components/Title_Section'


//Styles
import styles from '../components/Title_Section.module.css'

//Images
import AgrimecLogo from '../../public/images/experiences/agrimec-implementos-agricolas-logo.jpg'
import CofelmaLogo from '../../public/images/experiences/logo-cofelma.png'
import FrigSilva from '../../public/images/experiences/frigorifico-silva128..jpg'

const Experience = () => {
  return (
    <Container className='py-5'>
      <Section id="experiences">
        <Title 
          classes={styles.Title_Section} 
          title="Experiências Profissionais" 
          subtitle="Uma carreira de sucesso traz junto muitos desafios"  
        />
        <Section>
        <CardsExperinces
            className='text-start'
            cardImg={AgrimecLogo}
            cardTitle='Agrimec Agro Industrial e Mecânica LTDA'
            cardSubtitle='Soldador'
            cardText="Soldagem de estruturas gerais, implementos agrícolas."
            cardDataIn='22/02/2022'
            cardDataOut='22/05/2021'
          />
          <CardsExperinces
            className='text-start'
            cardImg={CofelmaLogo}
            cardTitle='Metalurgica Cofelma LTDA'
            cardSubtitle='Soldador'
            cardText="Montagem e soldagem de roscas transportadoras."
            cardDataIn='07/05/2020'
            cardDataOut='04/08/2020'
          />
          <CardsExperinces
            className='text-start'
            cardImg={FrigSilva}
            cardTitle='Frigorífico Silva Industria e Comércio LTDA'
            cardSubtitle='Soldador'
            cardText="Soldagem e manutenção de máquinas, equipamentos , estruturas e dependências frigoríficas."
            cardDataIn='11/11/2019'
            cardDataOut='08/02/2020'
          />
        </Section>
      </Section>
      <GoToTop/>
    </Container>
  )
}

export default Experience