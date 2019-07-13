import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Intro from "../components/intro"
import About from "../components/about"
import Work from "../components/work"
import Theses from "../components/theses"
import Contact from "../components/contact"

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

  h1, h2 {
    color: #303037;
    font-weight: 400;
  }

  img, p {
    margin-bottom: 0
  }

  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO title="Etusivu" />
    <Header />
    <Intro />
    <About />
    <Work />
    <Theses />
    <Contact />
  </>
)

export default IndexPage
