import React from "react"
import styled from "styled-components"

import juha from "../images/Juha.png"
import Section from "./section"
import Button from "./Button"
import Container from "./container"

const IntroContainer = styled.div`
  margin: 0 auto;
  max-width: 1110px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const IntroText = styled.div`
  max-width: 400px;
  margin-top: 40px;
  @media (max-width: 768px) {
    margin-top: 0;
    max-width: 100%;
    text-align: center
  }
`
const IntroImg = styled.div`
  max-width: 440px;
  margin-top: -80px;
  margin-bottom: -100px;
  margin-left: 100px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
    text-align: center;
    margin-top: 24px;
  }
`
const Intro = () => (
  <Section>
    <Container>
    <IntroContainer>
      <IntroText>
        <h1>Venatis odio doneci</h1>
        <p>
          Donec molestie, odio nec ultrices venenatis, lectus augue pellentesque
          ex, a auctor tortor ipsum et.
        </p>
        <Button hide
        >
          Ota yhteyttä
        </Button>
      </IntroText>
      <IntroImg>
        <img src={juha} alt="nuoli" />
      </IntroImg>
    </IntroContainer>
    </Container>
  </Section>
)

export default Intro
