import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'

//Components
import GoToTop from '../components/GoToTop'
import Title from '../components/Title_Section'
import SectionBox from '../components/Section_Box'
import Section from '../components/Section'
import TitleEffect from '../components/Title_Effect'
import CardsExperinces from '../components/Cards_Experinces'
import curriculo from '../../public/pdf/curriculo_22.pdf'
import Picture from '../components/Picture'
import ListGroup from '../components/ListGroup'
import ListItem from '../components/ListItem'

//Styles
import styles from '../components/Title_Section.module.css'
import stylesSection from '../components/Section.module.css'
import stylePicture from '../components/Pictures.module.css'

//Images
import IMGBanner250 from '../../public/images/img-home/Logo_Brancox250.png'
import IMGBanner500 from '../../public/images/img-home/Logo_Brancox500.png'
import AgrimecLogo from '../../public/images/experiences/agrimec-implementos-agricolas-logo.jpg'
import CofelmaLogo from '../../public/images/experiences/logo-cofelma.png'
import ImgWelder1 from '../../public/images/carousel/solda-robo.jpg'
import ImgWelder2 from '../../public/images/carousel/trabalhador-soldagem.jpg'
import ImgWelder3 from '../../public/images/carousel/badWelde2.jpg'
import lider from '../../public/images/softskills/liderance-250x155.png'
import profissional from '../../public/images/softskills/profissionalism-250x155.png'
import teamwork from '../../public/images/softskills/teamwork-250x155.png'
import weld from '../../public/images/hardskills/solda-teste-250x155.jpg'
import mig from '../../public/images/hardskills/solda-mig-250x155.jpg'
import pipelineWelder from '../../public/images/hardskills/soldagem-de-tubulacao-250x155.jpg'

const Home = () => {

  return (
    <Container>
      <Section classes='banner'>
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
              classes={`${stylesSection.Section_Box_Left} ${stylesSection.justify} d-flex flex-column align-items-start justify-content-center`}
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
              <Picture
                widthSM="768"
                widthLG="769"
                alt="Logomarca"
                src={IMGBanner500}
                srcSetLG={IMGBanner500}
                srcSetSM={IMGBanner250}

              />
            </SectionBox>
          </Col>
        </Row>
      </Section>

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
                <Link to='/About' className='links'>Saiba Mais...</Link>
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
          <CardsExperinces
            className='text-start'
            cardImg={AgrimecLogo}
            cardTitle='Agrimec Agro Industrial e Mecânica LTDA'
            cardSubtitle='Montador/Soldador'
            cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni quod velit, facilis necessitatibus 
                            dolores saepe aperiam sint, consequatur atque laudantium blanditiis ullam, consectetur nemo et minima 
                            illum quia cum."
            cardDataIn='01/07/2008'
            cardDataOut='07/10/2010'
          />
          <CardsExperinces
            className='text-start'
            cardImg={CofelmaLogo}
            cardTitle='Agrimec Agro Industrial e Mecânica LTDA'
            cardSubtitle='Montador/Soldador'
            cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni quod velit, facilis necessitatibus 
                            dolores saepe aperiam sint, consequatur atque laudantium blanditiis ullam, consectetur nemo et minima 
                            illum quia cum."
            cardDataIn='01/07/2008'
            cardDataOut='07/10/2010'
          />
          <CardsExperinces
            className='text-start'
            cardImg={AgrimecLogo}
            cardTitle='Agrimec Agro Industrial e Mecânica LTDA'
            cardSubtitle='Montador/Soldador'
            cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni quod velit, facilis necessitatibus 
                            dolores saepe aperiam sint, consequatur atque laudantium blanditiis ullam, consectetur nemo et minima 
                            illum quia cum."
            cardDataIn='01/07/2008'
            cardDataOut='07/10/2010'
          />
          <div className='text-center py-3 w-100'>

            <Link to='/Experience' className='links'>Saiba Mais...</Link>

          </div>
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
              <SectionBox classes="py-2 d-sm-flex align-items-center justify-content-around">
                <Picture
                  classes={`${stylePicture.picturesGroup} `}
                  widthSM="768"
                  widthLG="769"
                  alt="Logomarca"
                  src={lider}
                  srcSetLG={lider}
                  srcSetSM={lider}
                />
                <Picture
                  classes={stylePicture.picturesGroup}
                  widthSM="768"
                  widthLG="769"
                  alt="Logomarca"
                  src={profissional}
                  srcSetLG={profissional}
                  srcSetSM={profissional}
                />
                <Picture
                  classes={`${stylePicture.picturesGroup}`}
                  widthSM="768"
                  widthLG="769"
                  alt="Logomarca"
                  src={teamwork}
                  srcSetLG={teamwork}
                  srcSetSM={teamwork}
                />
              </SectionBox>
              <SectionBox classes="py-2 d-sm-flex align-items-center justify-content-around">
              <Picture
                classes={`${stylePicture.picturesGroup} `}
                widthSM="768"
                widthLG="769"
                alt="Logomarca"
                src={weld}
                srcSetLG={weld}
                srcSetSM={weld}
              />
              <Picture
                classes={stylePicture.picturesGroup}
                widthSM="768"
                widthLG="769"
                alt="Logomarca"
                src={mig}
                srcSetLG={mig}
                srcSetSM={mig}
              />
              <Picture
                classes={`${stylePicture.picturesGroup}`}
                widthSM="768"
                widthLG="769"
                alt="Logomarca"
                src={pipelineWelder}
                srcSetLG={pipelineWelder}
                srcSetSM={pipelineWelder}
              />
            </SectionBox>
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
  )
}

export default Home