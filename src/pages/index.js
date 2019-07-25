import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Nav from "../components/Nav"
import Intro from "../components/Intro"
import About from "../components/About"
import Work from "../components/Work"
import Theses from "../components/Theses"
import Contact from "../components/Contact"

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



const IndexPage = ( { data }) => (
  <>
    <GlobalStyle />
    <Seo title="Etusivu" />
    <Nav />
    <Intro backgroundImage={data.image.childImageSharp.fluid} />
    <About />
    <Work />
    <Theses />
    <Contact />
  </>
)

export default IndexPage


export const query = graphql`
query {
  image: file(relativePath: { eq: "Juha.png" }) {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

