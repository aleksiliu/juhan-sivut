import React from "react"
import styled from "styled-components"
import Section from "./Section"
import Container from "./Container"
import Button from "./Button"
import phone from "../images/phone.svg"
import linkedin from "../images/linkedin.svg"
import mail from "../images/mail.svg"

const H1 = styled.h1`
  text-align: center;
  color: #FFF;
`

const ContactText = styled.p`
  text-align: center;
  color: #FFF;
`

const ContactContainer = styled(Container)`
  margin-bottom: 32px;
  padding: 112px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`

const ButtonContainer = styled.div`
  display: inline-grid;
  grid-gap: 24px;
  grid-template-columns: auto auto auto;
  margin-top: 8px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 8px;
  }
`

const IconButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border-radius: 30px;
  
`
const Icon = styled.img`
  margin-right: 16px;
`

const Contact = () => (
  <Section gradient>
    <ContactContainer>
    
        <H1>Haluaisitko minut töihin?</H1>
        <ContactText>Donec molestie, odio nec ultrices venenatis, lectus augue pellentesque ex, a auctor tortor ipsum et.</ContactText>
        
        <ButtonContainer>
        <IconButton secondary href="tel:+358 40 5748126"><Icon src={phone} alt="phone" />+358 40 5748126</IconButton>
        <IconButton secondary href="mailto:juha.petteri.makkonen@gmail.com"><Icon src={mail} alt="mail" />juha.petteri.makkonen@gmail.com</IconButton>
        <IconButton secondary href="https://www.linkedin.com/in/juha-makkonen-407374123" target="_blank"><Icon src={linkedin} alt="linkedin" />LinkedIn</IconButton>
        </ButtonContainer>
    </ContactContainer>
  </Section>
)

export default Contact