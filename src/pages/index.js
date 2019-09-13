import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Nav from "../components/Nav"
import Intro from "../components/Intro"
import About from "../components/About"
import Work from "../components/Work"
import Theses from "../components/Theses"
import Contact from "../components/Contact"
import Testimonial from "../components/Testimonial"
import './index.css'


const IndexPage = ( { data }) => (
  <>
    
    <Seo title="Etusivu" />
    <Nav show="blog"  />
    <Intro backgroundImage={data.image.childImageSharp.fluid} />
    <About />
    <Work />
    <Theses />
    <Testimonial />
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

