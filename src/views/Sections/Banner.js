import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import Banner_style from './Banner.module.css'

import Section from "../components/Section";
import SectionBox from '../components/Section_Box'
import Title from "../components/Title_Section";
import TitleEffect from "../components/Title_Effect";

import styles from '../components/Title_Section.module.css'
import stylesSection from '../components/Section.module.css'
import { Link } from "react-router-dom";

import curriculo from '../../public/pdf/curriculo_22.pdf'



const Banner = () => {

    return (
    <Section classes={`${Banner_style.banner}`}>
        <Container className="pt-5">
            <Row className='d-flex align-items-center'>
            <Col sm={6}>
                <SectionBox
                titles={
                    <Title
                    classes={`${styles.Title_box} mb-sm-2`}
                    title="Aldomar Assolin"
                    subtitle="Soldador"
                    effect={<TitleEffect />}
                    />
                }
                text="O Crescimento profissional é um dos meus objetivos dentro de uma empresa, exercendo a função à mim destinada, 
                    aplicando as normas de segurança e zelando pela saúde, integridade e segurança de todos os trabalhadores, 
                    bem como o crescimento em equipe."
                classes={`${stylesSection.Section_Box_Left} ${stylesSection.justify} ${Banner_style.banner_box} px-3 text-light d-flex flex-column align-items-start justify-content-center`}
                >
                <div className='text-end w-100'>
                    <Button variant=''>
                    <a className="links" href={curriculo} target="_blank" rel="noreferrer">Currículo em PDF</a>
                    </Button>
                    <Button variant=''>
                    <Link to='/About' className='links'>Saiba Mais...</Link>
                    </Button>
                </div>
                </SectionBox>
            </Col>
            <Col sm={6}>
                <SectionBox classes={`${stylesSection.Section_Box_Right} d-flex align-items-center justify-content-center`}>
                {/* <Picture
                    widthSM="768"
                    widthLG="769"
                    alt="Logomarca"
                    src={IMGBanner500}
                    srcSetLG={IMGBanner500}
                    srcSetSM={IMGBanner250}

                /> */}
                </SectionBox>
            </Col>
            </Row>
        </Container>
      </Section>
    )
}

export default Banner
