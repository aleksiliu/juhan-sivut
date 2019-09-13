import React from "react"
import { Link } from "gatsby"
import Container from "../components/Container"
import Section from "../components/Section"

import Nav from "../components/Nav"
import Seo from "../components/seo"


const NotFound = () => {

  
  return (
  <>
  
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
