import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Container from "../components/Container"
import Section from "../components/Section"

import Nav from "../components/Nav"
import Seo from "../components/seo"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

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

  h1, h2 {
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

const CustomSection = styled(Section)`
 max-height: 400px;
`

const BlogText = styled.div`
 text-align: center;
 color: #FFF !important;

`

const BlogContainer = styled.div`
  background-color: #FFF; 
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
`

const BlogPage = () => {

  const data = useStaticQuery(graphql`
   
  query {
    allContentfulBlogPost(
      sort: {
        fields: publishedDate,
        order: DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(fromNow: true, locale: "fi")
        }
      }
    }
  }
    
  `)

  return (
  <>
  <GlobalStyle />
    <Seo title="Blog" />
    <Nav />
    <CustomSection gradient>
    <Container>
      <BlogText>
        <h1>Juhan Blogi</h1>
        <p>Tänne blogin puolelle tulen kirjoittamaan tulevasta työnhaustani, sairauden tilanteesta sekä ylipäätään mitä minulle kuuluu</p>
      </BlogText>

    <BlogContainer>
    <h2>Uusimmat kirjoitukset</h2>
    <ol>
      {data.allContentfulBlogPost.edges.map((edge) => {
        return (
        <li>
          <Link to={`/blog/${edge.node.slug}`}> 
          <h2>{edge.node.title}</h2>
          <p>{edge.node.publishedDate}</p>
          </Link>
        </li>
        )
      })}
    </ol>
    </BlogContainer>
   
  </Container>
  </CustomSection>
</>
  )
}

export default BlogPage
