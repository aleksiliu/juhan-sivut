import React from "react"
import styled from "styled-components"
import Section from "./Section"
import Container from "./Container"

const H2 = styled.h2`
  text-align: center;
`

const Row = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: block;
  }
`

const P = styled.p`
  color: #303037;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 8px;
`
const WorkYear = styled.p`
  color: #5C5C68;
  margin-bottom: 0;
`

const WorkExp = styled.div`
  display: flex;
  justify-content: space-between;
`

const Col = styled.div`
  background-color: #FFF; 
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  @media (max-width: 768px) {
  &:first-child {
    margin-bottom: 24px;
  }
  }
`

const Work = () => (
  <Section>
    <Container>
    
        <H2>Työkokemus</H2>
       <Row>
           <Col>    
            <WorkExp>
                <P>TRAINER'S HOUSE</P>
                <WorkYear>2016 - 2019</WorkYear>
           </WorkExp>
           <h2>Change Support Specialist</h2>
           <ul>
             <li>Uusasiakastapaamisten sopiminen puhelimitse, prospektointi, raportointiin liittyvät tehtävät, osallistuminen ohjausryhmätyöskentelyyn sekä asiakasvalmennuksiin.</li>
             <li>Tukenut asiakkaita muutosten läpiviennissä kartoituksen ja tutkimuksen keinoin sekä käynyt henkilökohtaisia sparrauskeskusteluita asiakkaiden kanssa. </li>
             <li>Muutoshankkeiden jalkauttamiseen liittyneiden ryhmäkeskusteluiden fasilitointi ja vastannut Trainers' Housen asiakkaille tehtävien sparrauspuheluiden toteutumisesta.</li>
             <li>Koordinoinut lähes 20 erilaista muutostukiprojektia sekä tehnyt yli 800 asiakashaastattelua/sparrausta tai tapaamisen sopimista.</li>
             <li>THGA-valmennusohjelma.</li>
           </ul>
           
           </Col>
           <Col>    
           <WorkExp>
                <P>DANSKE BANK OYJ</P>
                <WorkYear>2012 - 2012</WorkYear>
           </WorkExp>
           <h2>Ammattiharjoittelu/Palvelutiimi</h2>
           <ul>
            <li>Asiakkaiden päivittäisten raha-asioiden hoitaminen sekä asiakaspalvelu henkilökohtaisesti ja puhelimessa.</li>
            <li> Myynnin tuki, kuten asiakastapaamisten sopiminen. Sopimani tapaaminen johti parhaimmillaan yli 100k€ sijoitukseen.</li>
           </ul>
           
           </Col>
       </Row>

      
    </Container>
  </Section>
)

export default Work