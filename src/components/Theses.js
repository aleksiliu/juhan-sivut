import React from "react"
import styled from "styled-components"
import Container from "./Container"
import sales from "../images/sales.svg"
import leader from "../images/leader.svg"

const H2 = styled.h2`
  text-align: center;
`

const These = styled.div`
  text-align: center;
  
  @media (max-width: 768px) {
   margin-bottom: 24px;
  }
`

const TheseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;

 
  @media (max-width: 768px) {
    display: block;
  }
  
`

const TheseContainerBorder = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  padding-bottom: 24px;
  border-bottom: 2px solid #EDEDED;
 
  @media (max-width: 768px) {
    display: block;
  }
  
`



const P = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  margin-top: 8px;
 
`

const Icon = styled.img`
  background: #FFF;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  border-radius: 50%;
  display: inline-block;
`

const UL = styled.ul`
  list-style: none;
  margin-left: 16px;
  margin-bottom: 0;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

const ThesesGrid = styled.div`
  display: grid;
  gap: 48px 0;
  

  @media (max-width: 768px) {
    gap: 32px 0;
    margin-top: 32px;
  }
`

const Theses = () => (
  
    <Container>
      <H2>Teesit</H2>

      <ThesesGrid>
      <TheseContainerBorder>

      <These>
      <Icon src={sales} alt="sales" />
      <P>myynti</P>
      </These>

      <UL><li><strong>Palvelualttius</strong>  <p>Palvellaan asiakasta pyyteettömästi ja reagointinopeus pyyntöihin.</p></li>
<li><strong>Kuuntelu</strong>  <p>Meillä on kaksi korvaa ja yksi suu sen takia, että kuuntelisimme enemmän. Kuuntele, mitä asiakas haluaa ja etene sen mukaan.</p></li>
<li><strong>Perusasioiden palvominen</strong>  <p>Toista perusasioita useasti, niin oppimiskäyräsi nousee ekspotentiaalisesti.</p></li></UL>

      </TheseContainerBorder>
  
      <TheseContainer>

      <These>
      <Icon src={leader} alt="leadership" />
      <P>Johtajuus</P>
      </These>

      <UL><li><strong>Palveluammatti</strong>  <p>Esimiehenä palvelet alaisiasi parhaasi mukaan ja autat heitä eteenpäin.</p></li>
<li><strong>Vastuu ja vapaus</strong>  <p>Annetaan selkeät raamit, missä kuljetaan, mutta vapaus toteuttaa parhaalla mahdollisella näkemällään tavalla asioita. Tekemisellä on kaksi lopputulosta: Onnistuminen ja oppiminen.</p></li>
<li><strong>Avoimuus </strong> <p> Avoimesti viestitään asioista, mitä tapahtuu tai on tulossa. Avoimuus myös palautteenannossa ja se annetaan tekemisestä.</p></li></UL>

      </TheseContainer>
      </ThesesGrid>
    </Container>
  
)

export default Theses
