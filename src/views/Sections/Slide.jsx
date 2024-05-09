import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Card } from "react-bootstrap";

import img1 from '../../public/images/hardskills/soldagem-de-tubulacao.jpg'
import img2 from '../../public/images/hardskills/faltaFusaoT.jpg'
import img3 from '../../public/images/hardskills/solda-mig-250x155.jpg'
import img4 from '../../public/images/hardskills/solda-teste.jpg'
import img5 from '../../public/images/hardskills/trincaZTA-250x155.png'
import img6 from '../../public/images/hardskills/trincaZTA-250x155.png'
import Section from "../components/Section";
import Title from "../components/Title_Section";
import Title_Effect from "../components/TitleEffect";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", color: '#2c2aa9' }}
            onClick={onClick}
        />
    );
}

function CenterMode() {
    const settings = {
        className: "slide-section",
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Section classes="slider-container bg-dark p-5">
            <Title
                classes='text-start mb-5'
                title="Projetos"
                subtitle="Alguns projetos desenvolvidos."
                // eslint-disable-next-line react/jsx-pascal-case
                effect={<Title_Effect />}
            />
            <Slider {...settings}>
                <div className="">
                    <Card className="mx-2" >
                        <Card.Img variant="top" src={img1} className="image-size" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                <div className="">
                    <Card className="mx-2" >
                        <Card.Img variant="top" src={img2} className="image-size" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                <div className="">
                    <Card className="mx-2" >
                        <Card.Img variant="top" src={img3} className="image-size" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                <div className="">
                    <Card className="mx-2" >
                        <Card.Img variant="top" src={img4} className="image-size" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                <div className="">
                    <Card className="mx-2">
                        <Card.Img variant="top" src={img5} className="image-size" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                <div className="">
                    <Card className="mx-2">
                        <Card.Img variant="top" src={img6} className="image-size" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </Slider>
        </Section>
    );
}

export default CenterMode;

