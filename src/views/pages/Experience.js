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

const Experience = () => {
  return (
    <Container>
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
      <GoToTop/>
    </Container>
  )
}

export default Experience