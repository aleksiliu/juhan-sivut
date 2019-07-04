import React from "react"

import SEO from "../components/seo"
import Header from "../components/header"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    border-top: 4px solid #88C577;
    color: #5C5C68;
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
    <h2>Mitä Juha osaa?</h2>
  </>
)

export default IndexPage
