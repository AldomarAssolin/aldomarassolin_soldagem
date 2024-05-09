/* eslint-disable react/jsx-pascal-case */
import { Accordion, Col, ListGroup, Row } from "react-bootstrap"
import DataList from "../components/DataList"
import DataListItems from "../components/DataListItems"
import Section from "../components/Section"
import Title_Effect from "../components/TitleEffect"
import Title from "../components/Title_Section"
import Section_Box from "../components/SectionBox"


const About = () => {

    return (

        <Section classes={`py-5`}>
            <Title
                classes='text-start'
                title="Experiência e Dedicação"
                subtitle="Sempre buscando o conhecimento através do desenvolvimento pessoal."
                // eslint-disable-next-line react/jsx-pascal-case
                effect={<Title_Effect />}
            />
            <Row>
                <Col sm={12}>
                    <Section_Box classes="mt-5">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                <Title
                                    title="Habilidades"
                                    subtitle="Habilidades adquiridas ao longo do tempo."
                                    titleClass="fs-3"
                                    subTitleClass="fs-5"
                                />
                                </Accordion.Header>
                                 <Accordion.Body>
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Familiaridade com os sistemas, softwares e ferramentas da área
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Capacidade de planejamento e organização para o cumprimento de prazos
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Zelo pela higiene e organização do local de trabalho
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Dinamismo para execução de múltiplas tarefas
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Bom relacionamento interpessoal para trabalho em equipe
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Capacidade de liderança e tomada de decisões assertivas
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item> 
                        </Accordion>
                    </Section_Box>
                </Col>
                <Col sm={12}>
                    <Section_Box classes="mt-5">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <Title
                                        title="Competências"
                                        subtitle="Competências desenvolvidas durante carreira."
                                        titleClass="fs-3"
                                        subTitleClass="fs-5"
                                    />
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup as="ol" numbered>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Inspeção de soldagem visual e dimensional.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Inspeção de soldagem por líquido penetrante.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Leitura e interpretação de Desenho Técnico Industrial.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Realização de Ensaios de Tração.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Realização de Ensaios Macrográficos.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Preparação de junta de acordo com EPS.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Qualificação de Procedimento de Soldagem.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Programação de Célula de Soldagem.
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="mb-2">
                                            Usinagem.
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Section_Box>
                </Col>
                <Col sm={12}>
                    <Section_Box classes="mt-5">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                <Title
                                    title="Funções"
                                    subtitle="Funções desenvolvidas ao longo de minha jornada."
                                    titleClass="fs-3"
                                    subTitleClass="fs-5"
                                />
                                </Accordion.Header>
                                 <Accordion.Body>
                                    <DataList classes="mt-5">
                                        <DataListItems
                                                dt="Montador"
                                                dd="Montagem de estruturas gerais tais como, implementos agrícolas, equipamentos para graxaria,
                                                roscas transportadoras, tubulações e materiais diversos."
                                            />
                                            <DataListItems
                                                dt="Soldador"
                                                dd="Soldagem com processos de soldagem MIG/MAG, SMAW, GTAW, FCAW e SAW, célula automatizada, e fontes pulsadas."
                                            />
                                            <DataListItems
                                                dt="Outros"
                                                dd="Corte a plasma, maçarico, operação de células de soldagem, acompanhamento de soldadores."
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
            