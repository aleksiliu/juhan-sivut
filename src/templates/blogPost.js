import React from "react"
import { Link, graphql } from "gatsby"
import Container from "../components/Container"
import Section from "../components/Section"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Nav from "../components/Nav"

import styled from "styled-components"
import arrow from "../images/Arrow.svg"
  

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
  margin-bottom: 0;
`

const H1 = styled.h1`
 margin-bottom: 16px;
  
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

  
    <Nav />
    <CustomSection>
    <Container>
    <Link to="/blog/">
    <Arrow src={arrow} alt="nuoli" />
    </Link>
     
    <P>{props.data.contentfulBlogPost.publishedDate}</P>
    <H1>{props.data.contentfulBlogPost.title}</H1>
   
    {  !props.data.contentfulBlogPost.body ? <p>Ei tekstiä..</p> : documentToReactComponents(props.data.contentfulBlogPost.body.json, options )}
      
  </Container>
  </CustomSection>
</>
  )
}

export default BlogPost
