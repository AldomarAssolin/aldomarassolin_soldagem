import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";


import Banner_style from './Banner.module.css'

import Section from '../components/Section';
import SectionBox from "../components/SectionBox";
import Title from "../components/Title_Section";

import ImgWelder1 from '../../public/images/banners/manha.png'
import ImgWelder2 from '../../public/images/banners/tarde.png'
import ImgWelder3 from '../../public/images/banners/Noite.png'



import curriculo from '../../public/pdf/curriculo_22.pdf'
import { BsFillFilePdfFill, BsArrowBarRight } from "react-icons/bs";
import { Link } from "react-router-dom";



const Banner = () => {

    return (
        <Section classes={`${Banner_style.banner}`}>
            <Section classes={`${Banner_style.banner_box}`}>
                <Row className='d-flex align-items-center m-0'>
                    <Col sm={12} className="p-0 m-0">
                        <Carousel fade>
                            <Carousel.Item className="h-100">
                                <img
                                    className="d-block w-100 img_carousel"
                                    src={ImgWelder1}
                                    alt="First slide"
                                />
                                <Carousel.Caption className='fs-6'>
                                    <Row>
                                        <Col lg={12}>
                                            <SectionBox
                                                titles={
                                                    <Title
                                                        classes={`pt-5 mb-0 text-start`}
                                                        title="Aldomar Assolin"
                                                        subtitle="Consultor em Soldagem e Automação Industrial"
                                                    />
                                                }
                                                text="Com 15 anos de experiência como soldador e formação técnica sólida, sou Aldomar Assolin. Seja bem-vindo à inovação."
                                                classes={`text-size px-3 pt-5 text-light d-flex flex-column align-items-start justify-content-center`}
                                            >

                                                <Link className="mb-3 links_pages" href={curriculo}>
                                                    <BsFillFilePdfFill width="50" className="mx-2"/>
                                                    Currículo em PDF
                                                </Link>

                                            </SectionBox>
                                        </Col>
                                    </Row>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ImgWelder2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <Row>
                                        <Col lg={8}>
                                            <SectionBox
                                                titles={
                                                    <Title
                                                        classes={`py-3 my-sm-2 text-start`}
                                                        title="Titulo"
                                                        subtitle="Algum Subtitulo"
                                                    />
                                                }
                                                text="Com 15 anos de experiência como soldador e formação técnica sólida, sou Aldomar Assolin. Mergulhei na arte da soldagem, 
                                        agora trago minha paixão pela precisão e qualidade para o mundo da tecnologia. Conheça minha."
                                                classes={`text-size px-3 pt-5 text-light d-flex flex-column align-items-start justify-content-center`}
                                            >

                                                <Link to="/contact" className="text-center mx-2 mb-3 links_pages">
                                                    <BsArrowBarRight size={16}  className="mx-2"/>
                                                        Saiba Mais
                                                </Link>

                                            </SectionBox>
                                        </Col>
                                    </Row>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ImgWelder3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <SectionBox
                                        titles={
                                            <Title
                                                classes={`py-3 my-sm-2`}
                                                title="Titulo"
                                                subtitle="Algum Subtitulo"
                                            />
                                        }
                                        text="Com 15 anos de experiência como soldador e formação técnica sólida, sou Aldomar Assolin. Mergulhei na arte da soldagem, 
                                        agora trago minha paixão pela precisão e qualidade para o mundo da tecnologia. Conheça minha."
                                        classes={`text-size px-3 pt-5 text-light d-flex flex-column align-items-center justify-content-center`}
                                    >

                                        <Link to="/contact" className="text-center mx-2 mb-3 links_pages">
                                            <BsArrowBarRight size={16}  className="mx-2"/>
                                                Saiba Mais
                                        </Link>

                                    </SectionBox>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>

                    </Col>
                </Row>
            </Section>
        </Section>
    )
}

export default Banner;


/**
 * 
 */