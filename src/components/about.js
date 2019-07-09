import React from "react"
import styled from "styled-components"
import Container from "./container"

const TextBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px 0;
  margin-top: 56px;
  @media (max-width: 768px) {
    display: block;
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

const About = () => (
  
    <Container>
      <TextBlock>
        <Block>
      <H2>Kuka on Juha?</H2>
      <p>Juha on tiimipelaaja henkeen ja vereen sekä venyy tarvittaessa koko joukkueen puolesta tulosten saavuttamiseksi. Hänellä on myös jatkuva halu oppia ja kehittyä sekä hänen analyyttisyys tuo rutkasti lisäarvoa asiakkaalle.</p>
      </Block>
     <Block>
      <H2>Mitä Juha osaa?</H2>
      <p>Juha osaa priorisoida tehtävät tärkeysjärjestykseen, jos hän on useassa projektissa mukana. Hän on johtanut useita asiakasprojekteja lunastuksen osalta omaa esimerkkiä näyttäen ja projekteja koordinoiden. Osaamista löytyy muun muassa B2B-myynnin alkupäästä, asiakashaastatteluista sekä asiakaslähtöisestä viestinnästä, raportoinnista ja presentaatioista.</p>
      </Block>
      </TextBlock>
    </Container>
  
)

export default About
