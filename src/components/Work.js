import React from "react"
import styled from "styled-components"
import Section from "./Section"
import Container from "./Container"
import Button from "./Button"

const H2 = styled.h2`
  text-align: center;
`

const Row = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const P = styled.p`
  color: #88C577;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 8px;
`
const WorkYear = styled.p`
  color: #5C5C68;
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
            <li>Seniorina yli 10 muutostukiprojektissa liittyen auditointeihin ja PolullaPysymisPuheluihin. Lunastus, koordinointi, tulosten analysointi ja presentaatio asiakkaalle.</li>
            <li> Yli 800 tehtyä haastattelua, sparrausta tai tapaamisen sopimista.
</li>
<li>  THGA-koulutusohjelma, jossa opitaan työelämänlainalaisuuksia. Käyn toista kertaa, koska vanhankertaaminen yhtä tärkeää kuin uuden oppiminen.  </li>
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

        <Button>Lataa CV</Button>
    </Container>
  </Section>
)

export default Work