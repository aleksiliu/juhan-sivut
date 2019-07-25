import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"
import Section from "../components/Section"

import Nav from "../components/Nav"
import Seo from "../components/seo"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    ::before {
    background: linear-gradient(160.12deg, #BFDDB6 0%, #4CB8BA 100%);
    transform: matrix(-1, 0, 0, 1, 0, 0);
    content: "";
    display: block;
    height: 4px;
  }
  }

  h1 {
    font-size: 48px;
  }

  h1, h2, h3, h4, h5 {
    color: #303037;
    font-weight: 400;
  }

  img {
    margin-bottom: 0
  }

  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
`

const NotFound = () => {

  
  return (
  <>
  <GlobalStyle />
  <Seo title="404" />
    <Nav />
    <Section>
    <Container>
    <h2>Ups! Täällä ei ole mitään...</h2>
 

    <Link to="/">Takaisin</Link>
  </Container>
  </Section>
</>
  )
}

export default NotFound
