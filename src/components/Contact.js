import React from "react"
import styled from "styled-components"
import Section from "./Section"
import Container from "./Container"
import Button from "./Button"
import phone from "../images/phone.svg"
import linkedin from "../images/linkedin.svg"
import mail from "../images/mail.svg"
import circleStripes from "../images/circleStripes.png"

const H1 = styled.h1`
  text-align: center;
  color: #FFF;
  margin-bottom: 0;
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

const StripeLeft = styled.img`
  position: absolute;
  bottom: 50%;
  left: -176px;
  @media (max-width: 768px) {
    display: none;
  }
`

const StripeRight = styled.img`
  position: absolute;
  right: -176px;
  top: 50%;
  @media (max-width: 768px) {
    display: none;
  }
`

const CustomSection = styled(Section)`
  position: relative;
  overflow: hidden;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`

const Contact = () => (
  <CustomSection gradient id="contact">
    <StripeLeft src={circleStripes} alt="stripes" />
    <StripeRight src={circleStripes} alt="stripes" />
    
    <ContactContainer>
    
        <H1>Haluaisitko minut töihin?</H1>
      
        
        <ButtonContainer>
        <IconButton secondary href="tel:+358 40 5748126"><Icon src={phone} alt="phone" />+358 40 5748126</IconButton>
        <IconButton secondary href="mailto:juha.petteri.makkonen@gmail.com"><Icon src={mail} alt="mail" />juha.petteri.makkonen@gmail.com</IconButton>
        <IconButton secondary href="https://www.linkedin.com/in/juha-makkonen-407374123" rel="noopener" target="_blank"><Icon src={linkedin} alt="linkedin" />LinkedIn</IconButton>
        </ButtonContainer>
    </ContactContainer>
  
  </CustomSection>
)

export default Contact