import React from 'react'

import { Container } from 'react-bootstrap'


import Banner from '../Sections/Banner'
import About from '../Sections/About'
import Skills from '../Sections/Skills'



const Home = () => {
  return (
    <>

        <Banner/>
        <Container>
          <About/>
          <Skills/>
        </Container>
    </> 
  )
}

export default Home