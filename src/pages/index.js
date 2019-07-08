import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import Intro from "../components/intro"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    border-top: 4px solid #88C577;
    color: #5C5C68;
  }

  h1, h2 {
    color: #303037;
  }

  img, p {
    margin-bottom: 0
  }

  * {
    margin: 0;
    padding: 0;
    
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <SEO title="Etusivu" />
    <Header />
    <Intro />
  </>
)

export default IndexPage
