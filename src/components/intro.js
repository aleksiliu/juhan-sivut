import React from "react"
import styled from "styled-components"

import juha from "../images/Juha.png"

const IntroSection = styled.section`
  background-color: #f5f5f5;
  margin: 0 32px;
  border-radius: 4px;
  height: 368px;
`

const IntroContainer = styled.div`
  margin: 0 auto;
  max-width: 1110px;
  padding: 32px 32px;
  display: flex;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 25px;
  padding: 8px 24px;
  background: #88c577;
  color: white;
  text-decoration: none;
  margin-top: 24px;
`

const IntroText = styled.div`
  max-width: 400px;
  margin-top: 40px;
`

const IntroImg = styled.div`
  max-width: 440px;
  margin-top: -70px;
`

const Intro = () => (
  <IntroSection>
    <IntroContainer>
      <IntroText>
        <h1>Venatis odio doneci</h1>
        <p>
          Donec molestie, odio nec ultrices venenatis, lectus augue pellentesque
          ex, a auctor tortor ipsum et.
        </p>
        <Button
          href="https://github.com/styled-components/styled-components"
          rel="noopener"
        >
          Ota yhteyttä
        </Button>
      </IntroText>
      <IntroImg>
        <img src={juha} alt="nuoli" />
      </IntroImg>
    </IntroContainer>
  </IntroSection>
)

export default Intro
