import React from "react"
import styled from "styled-components"
import Section from "./section"
import Container from "./container"

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
           <P>TRAINER'S HOUSE</P>
           <h2>Change Support Specialist</h2>
           <ul>
            <li>Seniorina yli 10 muutostukiprojektissa liittyen auditointeihin ja PolullaPysymisPuheluihin. Lunastus, koordinointi, tulosten analysointi ja presentaatio asiakkaalle.</li>
            <li> Yli 800 tehtyä haastattelua, sparrausta tai tapaamisen sopimista.
</li>
<li>  THGA-koulutusohjelma, jossa opitaan työelämänlainalaisuuksia. Käyn toista kertaa, koska vanhankertaaminen yhtä tärkeää kuin uuden oppiminen.  </li>
           </ul>
           
           </Col>
           <Col>    
           <p>adsadsa</p>
           
           </Col>
       </Row>
    
    </Container>
  </Section>
)

export default Work