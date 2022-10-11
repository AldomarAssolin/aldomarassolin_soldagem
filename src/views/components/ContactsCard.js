/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

//styles
import styles from './ContactsCard.module.css'

export const ContactsCard = ({children, classCard, classesBG, classheader, classBody, classFooter, classesIcon,icon,sizeIcon,title,description,link,linkName,classBTN}) => {
  return (
    <Card className={`${classesBG} d-flex p-2 m-5`}>
        <Row>
            <Col ms={6}>
                <div className={`${classCard} ${styles.contactControll}`}>
                    <div className={` ${classheader} ${styles.cardHeader}`}>
                        <i className={`pi pi-${icon} ${classesIcon}` } style={{'fontSize': `${sizeIcon}`}}></i>
                    </div>
                    <div className={`${classBody} ${styles.cardBody}`}>
                        <h5>{title}</h5>
                        <p>{description}</p>
                    </div>
                    <div className={`${classFooter} ${styles.cardFooter}`}>
                        <a href={`${link}`} className={classBTN} target='_blank' rel="noreferrer">{linkName}</a>
                    </div>
                </div>
            </Col>
            <Col ms={6}>
                <div className={`${styles.imageControll}`}>
                    {children}
                </div>
            </Col>
        </Row> 
    </Card>
    
  )
}
