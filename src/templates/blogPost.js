import React from "react"
import { graphql } from "gatsby"
import Container from "../components/Container"
import Section from "../components/Section"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Nav from "../components/Nav"

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

  img {
    margin-bottom: 0
  }

  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
`

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(fromNow: true, locale: "fi")
      body {
        json
      }
    }
  }
 `


const BlogPost = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
}
}

  return (
  <>
  <GlobalStyle />
  
    <Nav />
    <Section>
    <Container>
    <h1>{props.data.contentfulBlogPost.title}</h1>
    <p>{props.data.contentfulBlogPost.publishedDate}</p>
    {  !props.data.contentfulBlogPost.body ? <p>Ei tekstiä..</p> : documentToReactComponents(props.data.contentfulBlogPost.body.json, options )}
      
  </Container>
  </Section>
</>
  )
}

export default BlogPost
