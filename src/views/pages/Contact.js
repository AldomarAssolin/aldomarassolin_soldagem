import React from 'react'
import { Container} from 'react-bootstrap'
import { ContactsCard } from '../components/ContactsCard'
import GoToTop from '../components/GoToTop'

//components
import Section from '../components/Section'
import TitleSection from '../components/Title_Section'
import Picture from '../components/Picture'

//images
import Whatsapp80 from '../../public/images/img-home/Whatsapp80.png'
import Whatsapp250 from '../../public/images/img-home/Whatsappx250.png'
import Linkedin from '../../public/images/img-home/Linkedin80.png'
import Linkedin250 from '../../public/images/img-home/Linkedinx250.png'
import Email from '../../public/images/img-home/Email.png'
import Email250 from '../../public/images/img-home/Email250.png'

//styles
import styles from '../components/ContactsCard.module.css'

const Contact = () => {
  

  return (
    <Container>
          <TitleSection
            classes='m-5'
            title='Meus Contatos'
            subtitle='Por estes links poderemos conversar melhor!'
          />
          <Section>
              <ContactsCard
                classesIcon='text-success'
                icon=''
                sizeIcon=''
                title='Contato via Whatsapp'
                description='Você pode me contactar via WhatsApp, apenas clique no botão.'
                link='https://web.whatsapp.com/send?phone=5596186446?text=Olá%20Aldomar!'
                linkName='Whatsapp'
                classBTN='btn btn-success'
                classBody='text-light'
                classFooter='text-start'
                classesBG={styles.bgMirage}
              >
                <Picture
                    widthSM="768"
                    widthLG="769"
                    alt="Whatsapp"
                    src={Whatsapp250}
                    srcSetLG={Whatsapp250}
                    srcSetSM={Whatsapp80}
                />
              </ContactsCard> 

              <ContactsCard
                classesIcon='text-success'
                icon=''
                sizeIcon=''
                title='Contato via Linkedin'
                description='Você pode me contactar via Linkedin, assim como me acompanhar por lá.'
                link='https://www.linkedin.com/in/aldomarassolin/'
                linkName='Linkedin'
                classBTN='btn btn-primary'
                classBody='text-light'
                classFooter='text-start'
                classesBG={styles.bgGradientgrandeur}
              >
                <Picture
                    widthSM="768"
                    widthLG="769"
                    alt="Whatsapp"
                    src={Linkedin250}
                    srcSetLG={Linkedin250}
                    srcSetSM={Linkedin}
                />
              </ContactsCard> 

              <ContactsCard
                classesIcon='text-success'
                icon=''
                sizeIcon=''
                title='Contato via Email'
                description='Você pode também me enviar um email, apenas clique no botão.'
                link='mailto:assolinaldomar@gmail.com'
                linkName='Email'
                classBTN='btn btn-light'
                classBody='text-light'
                classFooter='text-start'
                classesBG={styles.bgRoyal}
              >
                <Picture
                    widthSM="768"
                    widthLG="769"
                    alt="Envelope"
                    src={Email250}
                    srcSetLG={Email250}
                    srcSetSM={Email}
                />
              </ContactsCard> 
          </Section>
        <GoToTop/>
    </Container>
  )
}

export default Contact

/**

*/