import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";


import Banner_style from './Banner.module.css'

import Section from "../components/Section";
import SectionBox from '../components/Section_Box'
import Title from "../components/Title_Section";
import TitleEffect from "../components/Title_Effect";


import styles from '../components/Title_Section.module.css'
import stylesSection from '../components/Section.module.css'

import curriculo from '../../public/pdf/curriculo_22.pdf'
import { BsFillFilePdfFill } from "react-icons/bs";



const Banner = () => {

    return (
    <Section classes={`${Banner_style.banner}`}>
        <Section classes={`${Banner_style.banner_box}`}>
            <Container className="pt-5">
                <Row className='d-flex align-items-center'>
                <Col sm={6}>
                    <SectionBox
                        titles={
                            <Title
                            classes={`${styles.Title_box} mb-sm-2`}
                            title="Aldomar Assolin"
                            subtitle="Consultor em Soldagem e Automação Industrial"
                            effect={<TitleEffect />}
                            />
                        }
                        text="
                            Com 15 anos de experiência como soldador e formação técnica sólida, sou Aldomar Assolin. Mergulhei na arte da soldagem, 
                            agora trago minha paixão pela precisão e qualidade para o mundo da tecnologia. Conheça minha jornada de excelência em 
                            soldagem e explore como minha expertise pode impulsionar a automação industrial. Seja bem-vindo à inovação.
                        "
                        classes={`${stylesSection.Section_Box_Left} ${stylesSection.justify} px-3 text-light d-flex flex-column align-items-start justify-content-center`}
                    >
            
                        <Button variant='info' className="text-primary-emphasis">
                            <BsFillFilePdfFill width="50"/>
                            <a className="links mx-1" href={curriculo} target="_blank" rel="noreferrer">
                                Currículo em PDF
                            </a>
                        </Button>
            
                    </SectionBox>
                </Col>
                </Row>
            </Container>
        </Section>
      </Section>
    )
}

export default Banner
