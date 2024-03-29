import React from "react"
import styled from "styled-components"
import Container from "./Container"
import circle from "../images/circle.svg"

const TextBlock = styled.div`
  display: grid;
  gap: 24px 0;
  @media (max-width: 768px) {
    display: block;
    margin-top: 50px;
  }
`

const Block = styled.div`
  display: grid;
  grid-template-columns: 280px 2fr;
  @media (max-width: 768px) {
    margin-top: 32px;
    display: block;
  }
`
const H2 = styled.h2`
  
  ::after {
    background-color: #88c577;
    content: "";
    display: block;
    width: 50px;
    height: 5px;
    margin-top: 0.8em;
}
`

const Circle = styled.div`
  display: flex;
  margin-right: 24px;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

const CircleImg = styled.img`
  margin-right: 8px;
`

const CircleContainer = styled.div`
  display: flex;
  margin-top: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const P = styled.p`
  padding-bottom: 32px;
  border-bottom: 2px solid #EDEDED;
`


const About = () => (
  
    <Container>
      <TextBlock>
        <Block>
      <H2>Kuka on Juha?</H2>
      <P>Juha on tiimipelaaja henkeen ja vereen sekä venyy tarvittaessa koko joukkueen puolesta tulosten saavuttamiseksi. Hänellä on myös jatkuva halu oppia ja kehittyä sekä hänen analyyttisyys tuo rutkasti lisäarvoa asiakkaalle.</P>
      </Block>
     <Block>
      <H2>Mitä Juha osaa?</H2>
      <p>Juha osaa priorisoida tehtävät tärkeysjärjestykseen, jos hän on useassa projektissa mukana. Hän on johtanut useita asiakasprojekteja lunastuksen osalta omaa esimerkkiä näyttäen ja projekteja koordinoiden. Osaamista löytyy muun muassa B2B-myynnin alkupäästä, asiakashaastatteluista sekä asiakaslähtöisestä viestinnästä, raportoinnista ja presentaatioista

      <CircleContainer>
        <Circle><CircleImg src={circle} alt="check" /><span>Projektikoordinointi</span></Circle>
        <Circle><CircleImg src={circle} alt="check" /><span>Tiimityöskentely</span></Circle>
        <Circle><CircleImg src={circle} alt="check" /><span>B2B</span></Circle>
      </CircleContainer>
      </p>
      
      </Block>
      
      </TextBlock>
    </Container>
  
)

export default About
