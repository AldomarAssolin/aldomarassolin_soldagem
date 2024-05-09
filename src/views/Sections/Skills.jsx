/* eslint-disable react/jsx-pascal-case */
import { Accordion, Col, Row } from "react-bootstrap"
import DataList from "../components/DataList"
import DataListItems from "../components/DataListItems"
import Section from "../components/Section"
import stylesSection from '../components/Section.module.css'
import Title_Effect from "../components/TitleEffect"
import Title from "../components/Title_Section"
import Section_Box from "../components/SectionBox"


const About = () => {

    return (

        <Section classes={`about ${stylesSection.section} py-5`}>
            <Title
                classes='text-start'
                title="Algumas Skills"
                subtitle="Seção deve ser separada por Linguagem, área de atuação ou até mesmo pelos conhecimentos."
                // eslint-disable-next-line react/jsx-pascal-case
                effect={<Title_Effect />}
            />
            <Row>
                <Col sm={12} md={6} lg={4} className="my-3">

                    <Section_Box>

                        <Title
                            title="Frontend"
                            subtitle="Tecnologias voltadas ao Desenvolvimento Frontend."
                            titleClass="fs-3"
                            subTitleClass="fs-5"
                        />

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Frontend</Accordion.Header>
                                <Accordion.Body>
                                    <DataList classes="mt-5">
                                        <DataListItems
                                            dt="HyperText Markup Language (HTML)"
                                            dd="The language used to describe and define the content of a Web page"
                                        />
                                        <DataListItems
                                            dt="Cascading Style Sheets (CSS)"
                                            dd="Used to describe the appearance of Web content"
                                        />
                                        <DataListItems
                                            dt="JavaScript (JS)"
                                            dd="The programming language used to build advanced Web sites and applications"
                                        />
                                    </DataList>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Backend</Accordion.Header>
                                <Accordion.Body>
                                    <DataList classes="mt-5">
                                        <DataListItems
                                            dt="JAVA"
                                            dd="The language used to describe and define the content of a Web page"
                                        />
                                        <DataListItems
                                            dt="PHP"
                                            dd="Used to describe the appearance of Web content"
                                        />
                                        <DataListItems
                                            dt="Python"
                                            dd="The programming language used to build advanced Web sites and applications"
                                        />
                                    </DataList>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Banco de dados e Skills</Accordion.Header>
                                <Accordion.Body>
                                    <DataList classes="mt-5">
                                        <DataListItems
                                            dt="MySQL"
                                            dd="The language used to describe and define the content of a Web page"
                                        />
                                        <DataListItems
                                            dt="Git e Github"
                                            dd="Used to describe the appearance of Web content"
                                        />
                                        <DataListItems
                                            dt="APIs"
                                            dd="The programming language used to build advanced Web sites and applications"
                                        />
                                    </DataList>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Section_Box>

                </Col>
                <Col sm={12} md={6} lg={4} className="my-3">
                    <Section_Box>

                        <Title
                            title="Backend"
                            subtitle="Tecnologias voltadas ao Desenvolvimento backend."
                            titleClass="fs-3"
                            subTitleClass="fs-5"
                        />

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>JAVA</Accordion.Header>
                                <Accordion.Body>
                                    <DataList classes="mt-5">
                                        <DataListItems
                                            dt="Classes"
                                            dd="The language used to describe and define the content of a Web page"
                                        />
                                        <DataListItems
                                            dt="APIs"
                                            dd="Used to describe the appearance of Web content"
                                        />
                                        <DataListItems
                                            dt="POO"
                                            dd="The programming language used to build advanced Web sites and applications"
                                        />
                                    </DataList>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>PHP</Accordion.Header>
                                <Accordion.Body>
                                    <DataList classes="mt-5">
                                        <DataListItems
                                            dt="JAVA"
                                            dd="The language used to describe and define the content of a Web page"
                                        />
                                        <DataListItems
                                            dt="PHP"
                                            dd="Used to describe the appearance of Web content"
                                        />
                                        <DataListItems
                                            dt="Python"
                                            dd="The programming language used to build advanced Web sites and applications"
                                        />
                                    </DataList>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Banco de Dados</Accordion.Header>
                                <Accordion.Body>
                                    <DataList classes="mt-5">
                                        <DataListItems
                                            dt="MySQL"
                                            dd="The language used to describe and define the content of a Web page"
                                        />
                                        <DataListItems
                                            dt="Git e Github"
                                            dd="Used to describe the appearance of Web content"
                                        />
                                        <DataListItems
                                            dt="APIs"
                                            dd="The programming language used to build advanced Web sites and applications"
                                        />
                                    </DataList>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Section_Box>
                </Col>
                <Col sm={12} md={12} lg={4} className="my-3">
                    <Section_Box>

                        <Title
                            title="Skills"
                            subtitle="Tecnologias voltadas ao Desenvolvimento de Banco de Dados."
                            titleClass="fs-3"
                            subTitleClass="fs-5"
                        />

                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Frontend</Accordion.Header>
                                <Accordion.Body>
                                    <DataList classes="mt-5">
                                        <DataListItems
                                            dt="HyperText Markup Language (HTML)"
                                            dd="The language used to describe and define the content of a Web page"
                                        />
                                        <DataListItems
                                            dt="Cascading Style Sheets (CSS)"
                                            dd="Used to describe the appearance of Web content"
                                        />
                                        <DataListItems
                                            dt="JavaScript (JS)"
                                            dd="The programming language used to build advanced Web sites and applications"
                                        />
                                    </DataList>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Backend</Accordion.Header>
                                <Accordion.Body>
                                    <DataList classes="mt-5">
                                        <DataListItems
                                            dt="JAVA"
                                            dd="The language used to describe and define the content of a Web page"
                                        />
                                        <DataListItems
                                            dt="PHP"
                                            dd="Used to describe the appearance of Web content"
                                        />
                                        <DataListItems
                                            dt="Python"
                                            dd="The programming language used to build advanced Web sites and applications"
                                        />
                                    </DataList>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Banco de dados e Skills</Accordion.Header>
                                <Accordion.Body>
                                    <DataList classes="mt-5">
                                        <DataListItems
                                            dt="MySQL"
                                            dd="The language used to describe and define the content of a Web page"
                                        />
                                        <DataListItems
                                            dt="Git e Github"
                                            dd="Used to describe the appearance of Web content"
                                        />
                                        <DataListItems
                                            dt="APIs"
                                            dd="The programming language used to build advanced Web sites and applications"
                                        />
                                    </DataList>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Section_Box>
                </Col>
            </Row>
        </Section>

    )
}

export default About