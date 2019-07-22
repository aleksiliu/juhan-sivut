import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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

  h1, h2 {
    color: #303037;
    font-weight: 400;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
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
    <Section>
    <Container>
    <h1>Blog</h1>
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

    <Link to="/">Back</Link>
  </Container>
  </Section>
</>
  )
}

export default BlogPage
