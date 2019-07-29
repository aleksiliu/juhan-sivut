import React from "react"
import styled from "styled-components"
import Container from "./Container"



const Col = styled.div`
  background-color: #FFF; 
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  
`

const Name = styled.span`
 color: #ADADB3;
  
`

const P = styled.p`
 font-style: italic;
  
`



const CustomContainer = styled(Container)`
  margin: 0 auto;
  padding: 0;
  z-index: 1;
  position: relative;
  top: 50px;
  @media (max-width: 768px) {
    padding: 0 24px 0 24px;
    top: 20px;
  }
`

const Testimonial = () => (

    <CustomContainer>
    
           <Col>    
            <P>"Juha on yksi oppimishaluisempia ja ahkerimpia työntekijöitä, joiden kanssa olen saanut tehdä töitä, kun olen ollut tiimimvetäjänä. Hän on työskennellyt vuosia asiakaskokemuksen parissa syvähaastatteluiden ja niiden analysoinnin parissa. Juha on huippu tyyppi, jolta lentää parhaimmat huonot läpät :) luottohenkilö!" </P>
            <Name>Iina Vilpponen</Name>
           </Col>
      
       </CustomContainer>
  
)

export default Testimonial