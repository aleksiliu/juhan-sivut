import React from "react"
import styled from "styled-components"
import Container from "./container"

const TextBlock = styled.div`
  display: flex;
`
const H2 = styled.h2`
  width: 500px;
  ::after {
    display: inline-block;
    content: "";
    border-bottom: .3rem solid #88c577;
    width: 4rem;
    margin: 1rem 1rem 0 0;
}
`

const About = () => (
  
    <Container>
      <TextBlock>
      <H2>Kuka on Juha?</H2>
      <p>Juha on tiimipelaaja henkeen ja vereen sekä venyy tarvittaessa koko joukkueen puolesta tulosten saavuttamiseksi. Hänellä on myös jatkuva halu oppia ja kehittyä sekä hänen analyyttisyys tuo rutkasti lisäarvoa asiakkaalle.</p>
      </TextBlock>
      <TextBlock>
      <H2>Mitä Juha osaa?</H2>
      <p>Juha osaa priorisoida tehtävät tärkeysjärjestykseen, jos hän on useassa projektissa mukana. Hän on johtanut useita asiakasprojekteja lunastuksen osalta omaa esimerkkiä näyttäen ja projekteja koordinoiden. Osaamista löytyy muun muassa B2B-myynnin alkupäästä, asiakashaastatteluista sekä asiakaslähtöisestä viestinnästä, raportoinnista ja presentaatioista.</p>
      </TextBlock>
    </Container>
  
)

export default About
