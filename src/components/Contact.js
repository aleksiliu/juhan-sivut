import React from "react"
import styled from "styled-components"
import Section from "./section"
import Container from "./container"
import Button from "./Button"

const H1 = styled.h1`
  text-align: center;
  color: #FFF;
`

const ContactText = styled.p`
  text-align: center;
  color: #FFF;
`

const Containeri = styled(Container)`
  margin-bottom: 32px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Contact = () => (
  <Section gradient>
    <Containeri>
    
        <H1>Haluaisitko minut töihin?</H1>
        <ContactText>Donec molestie, odio nec ultrices venenatis, lectus augue pellentesque ex, a auctor tortor ipsum et.</ContactText>
        
        <ButtonContainer>
        <Button secondary>+358 40 5748126</Button>
        <Button secondary>juha.petteri.makkonen@gmail.com</Button>
        <Button secondary>LinkedIn</Button>
        </ButtonContainer>
    </Containeri>
  </Section>
)

export default Contact