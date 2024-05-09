import React from 'react'

import { Container } from 'react-bootstrap'


import Banner from '../Sections/Banner'
import About from '../Sections/About'
import Skills from '../Sections/Skills'
import Tranning from '../Sections/Tranning'
import CenterMode from '../Sections/Slide'



const Home = () => {
  return (
    <>

        <Banner/>
        <Container>
          <About/>
          <CenterMode/>
          <Skills/>
          <Tranning/>
        </Container>
    </> 
  )
}

export default Home