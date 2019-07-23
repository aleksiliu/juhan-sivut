import React from "react"

import Img from "gatsby-image"
import styled from "styled-components"

import Section from "./Section"
import Button from "./Button"
import Container from "./Container"


const IntroContainer = styled.div`
  margin: 0 auto;
  max-width: 1110px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 16px;
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
  margin-top: -90px;
  margin-bottom: -100px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
    text-align: center;
    margin-top: 32px;
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

const IntroParagraph = styled.p`
margin-bottom: 0;
`


const Intro = ({backgroundImage}) => (
  <Section>
    <Container>
    <IntroContainer>
      <IntroText>
        <H1>Venatis odio doneci</H1>
        <IntroParagraph>
          Donec molestie, odio nec ultrices venenatis, lectus augue pellentesque
          ex, a auctor tortor ipsum et.
          </IntroParagraph>
        <Button hide
        >
          Ota yhteyttä
        </Button>
      </IntroText>
      <IntroImg>
      <Img fluid={backgroundImage} />
      </IntroImg>
    </IntroContainer>
    </Container>
  </Section>
)

export default Intro




