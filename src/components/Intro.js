import React from "react"
import styled from "styled-components"

import juha from "../images/Juha.png"
import Section from "./Section"
import Button from "./Button"
import Container from "./Container"

const IntroContainer = styled.div`
  margin: 0 auto;
  max-width: 1110px;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const IntroText = styled.div`
  max-width: 440px;
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

const H1 = styled.h1`
  display: inline-block;
  position: relative;
  z-index: 1;
:before {
  content: "";
  position: absolute;
  top: 2px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: -1;
  transform: skewX(10deg) skewY(-2deg);
  margin: 8px -8px 6px -8px;
  background: #DAE9D6;
  border-radius: 8px;
  @media (max-width: 768px) {
    margin: 16px 16px 16px 16px;
  }
}
`
const Intro = () => (
  <Section>
    <Container>
    <IntroContainer>
      <IntroText>
        <H1>Venatis odio doneci</H1>
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
