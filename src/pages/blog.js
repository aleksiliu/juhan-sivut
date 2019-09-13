import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Container from "../components/Container"
import Section from "../components/Section"

import Nav from "../components/Nav"
import Seo from "../components/seo"
import styled from "styled-components"
import TextArrow from "../components/TextArrow"


const CustomSection = styled(Section)`
 max-height: 400px;
`

const BlogText = styled.div`
 text-align: center;
 color: #FFF;

`

const TextContainer = styled.div`
@media (max-width: 768px) {
     
      margin-bottom: 8px;
      }
`

const ArrowContainer = styled.div`

`

const BlogContainer = styled.div`
  background-color: #FFF; 
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px 32px 8px 32px;;
  margin-top: 40px;
`

const H1 = styled.h1`
  color: #FFF;
  @media (max-width: 768px) {
      font-size: 32px;
      }
`

const UL = styled.ul`
  list-style: none;
  margin: 0;
  @media (max-width: 768px) {
    margin-left: 0;
  }



  li {
    border-bottom: 2px solid #EDEDED;
    padding: 16px 0;
    
    a {
      text-decoration: none;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      }
    }
    &:last-child {
    border: none;
  }
  }
`

const P = styled.p`
  color: #ADADB3;
  font-size: 14px;
  margin-bottom: 0;
  @media (max-width: 768px) {
     margin-bottom: 8px;
     }
`

const H2 = styled.h2`
  word-break: break-all;
  font-size: 40px;
@media (max-width: 768px) {
      font-size: 24px;
      }
`


const BlogPage = () => {
  const truncate = (input) => input.length > 40 ? `${input.substring(0, 40)}...` : input;

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
  
    <Seo title="Blog" />
    <Nav />
    <CustomSection gradient>
    <Container>
      <BlogText>
        <H1>Juhan Blogi</H1>
        <p>Tänne blogin puolelle tulen kirjoittamaan tulevasta työnhaustani, sairauden tilanteesta sekä ylipäätään mitä minulle kuuluu.</p>
      </BlogText>

    <BlogContainer>
    
    <UL>
      {data.allContentfulBlogPost.edges.map((edge) => {
        return (
        <li>
          
          <Link to={`/blog/${edge.node.slug}`}> 
          <TextContainer>
          <P>{edge.node.publishedDate}</P>
          <H2>{truncate(`${edge.node.title}`)}</H2>
          </TextContainer>
            <ArrowContainer>
              <TextArrow text="Lue lisää" to={`/blog/${edge.node.slug}`} />
            </ArrowContainer>
          </Link>
        </li>
        )
      })}
    </UL>
    </BlogContainer>
   
  </Container>
  </CustomSection>
</>
  )
}

export default BlogPage
