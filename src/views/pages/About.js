import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import GoToTop from '../components/GoToTop'
import Section from '../components/Section'
import SectionBox from '../components/Section_Box'
import Title from '../components/Title_Section'

//styles
import styles from '../components/Title_Section.module.css'
import stylesSection from '../components/Section.module.css'
import TitleEffect from '../components/Title_Effect'

//images
import ImgWelder1 from '../../public/images/carousel/solda-robo.jpg'
import ImgWelder2 from '../../public/images/carousel/trabalhador-soldagem.jpg'
import ImgWelder3 from '../../public/images/carousel/badWelde2.jpg'
import ListItem from '../components/ListItem'

const About = () => {
  return (
    <Container className='py-5'>

        <Section className='about'>
            <Title classes={styles.Title_Section} title="Quem Sou?" subtitle="Soldador, Técnico em Soldagem, Operador de Soldagem"/>
            <SectionBox 
              classes={`${stylesSection.justifyText} px-3`}
              text="Ao longo de muitos anos atuando no setor metalúrgico, me identifiquei com a soldagem, determinado a desenvolver 
              minhas habilidades e conhecimentos acerca deste tópico me dediquei a aprender tudo que pude na área. Desenvolvi habilidades desde a 
              montagem de estruturas gerais à soldagem de tubulções. Com o desenvolvimento acelerado de novas tecnologias, vieram novos desafios
              e com isso equipamentos e processos mais modernos, significando a necessidade de atualizações periódicas. Além da automação dos processos, 
              temos corrente pulsada nos processos MAG e TIG, nos trazendo mais complexidade no procedimento de soldagem e operação desses equipamentos. 
              No curso Técnico em Soldagem, cursado no Colégio Técnico Industrial de Santa Maria, RS, tive a portunidade de conhecer, estudar e entender 
              diversas dessas tecnologias, com os quais desenvolvo meu trabalho e compartilho esse conhecimento com demais colegas."
            />
            <Section classes={stylesSection.Section}>
                  <Row>
                    <Col sm={6}>
                        <SectionBox
                          titles={
                            <Title 
                              classes={styles.Title_box} 
                              title="Soldador" 
                              subtitle="De estruturas metálicas à tubulações" 
                              effect={<TitleEffect/>} 
                            />
                          }
                          text="Soldagem nos processos GMAW, GMAWP, FCAW, SMAW, GTAW, SAW. Soldagem automatizada, fontes eletrônicas, com corrente 
                          pulsada."
                          classes={`${stylesSection.Section_Box_Left} ${stylesSection.justify} px-3`}
                        />
                    </Col>
                    <Col sm={6}>
                        <SectionBox
                          classes={stylesSection.Section_Box_Right}
                        >
                          <Carousel>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={ImgWelder1}
                                alt="First slide"
                              />
                              <Carousel.Caption className='fs-6'>
                                <Title title='Automação' subtitle='Operador de Soldagem' />
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={ImgWelder2}
                                alt="Second slide"
                              />

                              <Carousel.Caption>
                                <Title title='Processos' subtitle='Todos os processos de soldagem' />
                              </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                              <img
                                className="d-block w-100"
                                src={ImgWelder3}
                                alt="Third slide"
                              />

                              <Carousel.Caption>
                                <Title classes='text-secondary' title='Formação' subtitle='técnico em Soldagem' />
                              </Carousel.Caption>
                            </Carousel.Item>
                          </Carousel>
                        </SectionBox>
                    </Col>
                  </Row>
            </Section>
            
            <Title classes={styles.Title_Section} title="Responsabilidades"/>
            
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Realizar operações de soldagem de acordo com procedimentos e padrões de soldagem reconhecidos;' />
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Auxiliar no layout, montagem, instalação de equipamentos da planta;' />
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Auxiliar no manuseio de materiais conforme necessário;' />
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Realizar inspeções de soldas e trabalhos de fabricação.' />
            
            <Title classes={styles.Title_Section} title="SERVIÇOS"/>
            
            <ListItem classes={`listStyleCheck text-start`} icons='check-square'
             item='Coordenar e desenvolver equipes de trabalho que atuam na produção, aplicando métodos e técnicas de gestão administrativa e de pessoas;' />
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' 
             item='Aplicar normas técnicas de saúde e segurança no trabalho e de controle de qualidade na fabricação dos equipamentos e serviços da planta industrial;' />
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' 
             item='Aplicar técnicas de ensaios destrutivos e não destrutivos, visando a melhoria do controle e da qualidade de produtos e serviços da planta industrial;' />
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' 
             item='Aplicar normas técnicas e especificações de catálogos, manuais e procedimentos emprocessos de soldagem, na fabricação de máquinas e equipamentos e na manutenção industrial;' />
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' 
             item='Avaliar as características e propriedades dos metais base, consumíveis e máquinas de solda, para a aplicação correlacionando-as com seus fundamentos físicos e químicos para aplicação na fabricação dos equipamentos e serviços da planta industrial e no controle de qualidade;' />
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' 
             item='Coordenar atividades de utilização e conservação de energia, propondo a racionalização de uso e de fontes alternativas;' />
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' 
             item='Projetar melhorias nos sistemas convencionais de processo de soldagem, propondo incorporar novas tecnologias;' />
            <ListItem classes={`listStyleCheck text-start`} icons='check-square' 
             item='Qualificar soldadores e operadores de soldagem, visando a padronização no desenvolvimento da soldagem, com treinamentos e aplicação de boas práticas nas atividades relacionadas;' />
        </Section>

        <GoToTop/>
    </Container>

  )
}

export default About