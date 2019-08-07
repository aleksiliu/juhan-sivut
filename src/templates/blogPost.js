import React from "react"
import { Link, graphql } from "gatsby"
import Container from "../components/Container"
import Section from "../components/Section"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Nav from "../components/Nav"

import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import arrow from "../images/Arrow.svg"
     

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

  a {
    color: #303037;
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

const Arrow = styled.img`
transform: scaleX(-1);
margin-bottom: 16px;
`

const CustomSection = styled(Section)`

  margin-bottom: 32px;

`

const P = styled.p`
 color: #ADADB3;
  
`

const H1 = styled.h1`
 margin-bottom: 8px;
  
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
    <CustomSection>
    <Container>
    <Link to="/blog/">
    <Arrow src={arrow} alt="nuoli" />
    </Link>
     
    <H1>{props.data.contentfulBlogPost.title}</H1>
    <P>{props.data.contentfulBlogPost.publishedDate}</P>
    {  !props.data.contentfulBlogPost.body ? <p>Ei tekstiä..</p> : documentToReactComponents(props.data.contentfulBlogPost.body.json, options )}
      
  </Container>
  </CustomSection>
</>
  )
}

export default BlogPost
