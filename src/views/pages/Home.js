import React from 'react'

import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import 'primeicons/primeicons.css';

//Components
import GoToTop from '../components/GoToTop'
import Title from '../components/Title_Section'
import SectionBox from '../components/Section_Box'
import Section from '../components/Section'
import TitleEffect from '../components/Title_Effect'
import CardsExperinces from '../components/Cards_Experinces'
import ListGroup from '../components/ListGroup'
import ListItem from '../components/ListItem'

//Styles
import styles from '../components/Title_Section.module.css'
import stylesSection from '../components/Section.module.css'
//import stylePicture from '../components/Pictures.module.css'

//Images
import AgrimecLogo from '../../public/images/experiences/agrimec-implementos-agricolas-logo.jpg'
import FrigSilva from '../../public/images/experiences/frigorifico-silva128..jpg'
import CofelmaLogo from '../../public/images/experiences/logo-cofelma.png'
import ImgWelder1 from '../../public/images/carousel/solda-robo.jpg'
import ImgWelder2 from '../../public/images/carousel/trabalhador-soldagem.jpg'
import ImgWelder3 from '../../public/images/carousel/badWelde2.jpg'
import lider from '../../public/images/softskills/png/001-lideranca.png'
import profissional from '../../public/images/softskills/png/002-empregado.png'
import teamwork from '../../public/images/softskills/png/004-socios.png'
import weld from '../../public/images/hardskills/solda-teste-250x155.jpg'
import mig from '../../public/images/hardskills/solda-mig-250x155.jpg'
import pipelineWelder from '../../public/images/hardskills/soldagem-de-tubulacao-250x155.jpg'
import ReadMore from '../components/ReadMore';
import GetDataCompanies from '../../public/getAPIData/GetAPIData';
import Banner from '../Sections/Banner';

const Home = () => {
  return (
   <>
    <Banner/>

    <Container>
      <Section className='about'>
        <Title classes={styles.Title_Section} title="Quem Sou?" subtitle="Soldador, Técnico em Soldagem, Operador de Soldagem" />
        <SectionBox
          classes={`${stylesSection.justifyText}`}
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
            <Col sm={6} className='p-0 mb-5'>
              <SectionBox
                titles={
                  <Title
                    classes={`${styles.Title_box}`}
                    title="Soldador"
                    subtitle="De estruturas metálicas à tubulações"
                    effect={<TitleEffect />}
                  />
                }
                text="Soldagem nos processos GMAW, GMAWP, FCAW, SMAW, GTAW, SAW. Soldagem automatizada, fontes eletrônicas, com corrente 
                          pulsada."
                classes={`${stylesSection.Section_Box_Left} ${stylesSection.justify} px-3`}
              >
                <ReadMore linkClass='links' to='/About' textLink='Saiba mais...' />
              </SectionBox>
            </Col>
            <Col sm={6}>
              <SectionBox
                classes={stylesSection.Section_Box_Right}
              >
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100  rounded-3"
                      src={ImgWelder1}
                      alt="First slide"
                    />
                    <Carousel.Caption className='fs-6'>
                      <Title title='Automação' subtitle='Operador de Soldagem' />
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-3"
                      src={ImgWelder2}
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <Title title='Processos' subtitle='Todos os processos de soldagem' />
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-3"
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
      </Section>

      <Section id='experiences'>
        <Title
          classes={styles.Title_Section}
          title="Experiências Profissionais"
          subtitle="Uma carreira de sucesso traz junto muitos desafios"
        />
        <Section>
          <GetDataCompanies/>
          <CardsExperinces
            className='text-start'
            cardImg={AgrimecLogo}
            cardTitle='Agrimec Agro Industrial e Mecânica LTDA'
            cardSubtitle='Soldador'
            cardText="Soldagem de estruturas gerais, implementos agrícolas."
            cardDataIn='22/02/2022'
            cardDataOut='22/05/2021'
          />
          <CardsExperinces
            className='text-start'
            cardImg={CofelmaLogo}
            cardTitle='Metalurgica Cofelma LTDA'
            cardSubtitle='Soldador'
            cardText="Montagem e soldagem de roscas transportadoras."
            cardDataIn='07/05/2020'
            cardDataOut='04/08/2020'
          />
          <CardsExperinces
            className='text-start'
            cardImg={FrigSilva}
            cardTitle='Frigorífico Silva Industria e Comércio LTDA'
            cardSubtitle='Soldador'
            cardText="Soldagem e manutenção de máquinas, equipamentos , estruturas e dependências frigoríficas."
            cardDataIn='11/11/2019'
            cardDataOut='08/02/2020'
          />
          {/* button link to read more */}
          <ReadMore
            divClass='my-3'
            linkClass='links'
            to='/Experience'
            textLink='Saiba mais...'
          />
        </Section>
      </Section>

      <Section id='competences' classes='bg-grey rounded-2 px-sm-2'>
        <Container>
          <Section>
            <Title
              classes={styles.Title_Section}
              title='Competências'
              subtitle='Nos últimos anos, os processos seletivos para vagas de emprego têm levado em consideração aspectos e 
                      características que estão além da experiência profissional e da formação acadêmica do candidato.'
            />
            <Section>
              <SectionBox classes="py-2 d-sm-flex flex-wrap flex-s align-items-center justify-content-center justify-content-sm-around">
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={lider} className='p-2' />
                  <Card.Body>
                    <Card.Title>Liderança</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Gerenciar Projetos' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Resolver Conflitos' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Delegar Tarefas' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Dar Feedback' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Supervisionar' />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={profissional} className='p-2' />
                  <Card.Body>
                    <Card.Title>Profissionalismo</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Competência' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Honestidade' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Autorregulação' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Buscar Soluções' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Inteligência Emocional' />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={teamwork} className='p-2' />
                  <Card.Body>
                    <Card.Title>Trabalho em Equipe</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Aceitar Feedback' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Colaborar' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Aceitart a Divercidade' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Ter empatia' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Respeitar opiniões' />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={weld} className='p-2' />
                  <Card.Body>
                    <Card.Title>Qualidade e Inspeção</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Inspeção Dimensional' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Medição dos Parâmetros' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Controle de Qualidade' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Padrão nos Processos' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Normais de Soldagem' />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={mig} className='p-2' />
                  <Card.Body>
                    <Card.Title>Processos de Soldagem</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='GMAW ou MAG' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='FCAW (arame tubular)' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='GMAW-P (MAG - Pulsado)' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='SAW (Aco Submerso)' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='GTAW ou TIG' />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='mb-3 m-auto'>
                  <Card.Img variant="top" src={pipelineWelder} className='p-2' />
                  <Card.Body>
                    <Card.Title>Técnico em Soldagem</Card.Title>
                    <Card.Text>
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Qualificação de Procedimento' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Acompanhamento do setor e soldadores' />
                      <ListItem classes={`listStyleCheck text-start`} icons='check-square' item='Qualificação e Treinamento para soldadores' />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </SectionBox>
              <ReadMore
                divClass='my-3'
                linkClass='links'
                to='/about'
                textLink='Saiba mais...'
              />
            </Section>
          </Section>

          <Section id='softskill'>
            <Title
              classes={styles.Title_Section}
              title='Soft Skills'
              subtitle='Reconhecer e ampliar essas capacidades é tão importante quanto ter uma formação 
                    específica na área de atuação.'
            />
            <SectionBox
              classes={`${stylesSection.justifyText} px-sm-3`}
              text='Com o avanço das transformações no mercado e nas relações de trabalho, cada vez mais empresas estão percebendo 
                    que precisam de colaboradores com habilidades que vão muito além da técnica. Soft skills são competências relacionadas
                    ao comportamento do indivíduo, muito mais atreladas à personalidade e às experiências, do que à formação profissional.'
            >
              <ListGroup>
                <ListItem classes='mb-3' item='Cordialidade e simpatia no trato com as pessoas' />
                <ListItem classes='mb-3' item='Capacidade de planejamento e organização para o cumprimento de prazos' />
                <ListItem classes='mb-3' item='Zelo pela higiene e organização do local de trabalho' />
                <ListItem classes='mb-3' item='Dinamismo para execução de múltiplas tarefas' />
                <ListItem classes='mb-3' item='Bom relacionamento interpessoal para trabalho em equipe' />
                <ListItem classes='mb-3' item='Capacidade de liderança e tomada de decisões assertivas' />
              </ListGroup>
            </SectionBox>
          </Section>

          <Section id='hardskill'>
            <Title
              classes={styles.Title_Section}
              title='Hard Skills'
              subtitle='As hard skills estão relacionadas ao que desejamos aprender ao escolher uma graduação, por exemplo.'
            />
            <SectionBox
              classes={`${stylesSection.justifyText} px-sm-3`}
              text='Ao se tratar de hard skills, estamos falando das competências técnicas, ou seja, adquiridas no ensino superior, 
                    pós-graduação, cursos técnicos, cursos livres, leituras e de outras maneiras. São as habilidades ligadas ao conhecimento 
                    adquirido e utilizadas para realizar a atividade profissional. Desse modo, as empresas podem comprovar que os candidatos 
                    têm essas competências com certificados, diplomas, etc.'
            >
              <ListGroup>
                <ListItem classes='mb-3' item='Soldagem de tubulações' />
                <ListItem classes='mb-3' item='Interpretação de projetos e desenhos técnicos' />
                <ListItem classes='mb-3' item='Inspeção e controle de qualidade' />
                <ListItem classes='mb-3' item='Solda MIG, TIG e arco elétrico' />
                <ListItem classes='mb-3' item='Metalurgia' />
                <ListItem classes='mb-3' item='Soldagem estrutural' />
              </ListGroup>
            </SectionBox>
          </Section>
        </Container>
      </Section>
      <GoToTop />
    </Container>
    </> 
  )
}

export default Home