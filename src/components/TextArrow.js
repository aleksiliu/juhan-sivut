import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import arrow from "../images/Arrow.svg"



const Blog = styled.div`
  display: flex;
  align-items: center;
`

const BlogText = styled.p`
  margin-right: 8px;
  margin-bottom: 0;
`

const StyledLink = styled(Link)`
  color: #303037;
  text-decoration: none;
  font-size: 16px;
`

const TextArrow = ({ text, to }) => (

    <StyledLink to={`/${to}`}>
          <Blog>
            <BlogText>{ text }</BlogText> <img src={arrow} alt="nuoli" />
          </Blog>
    </StyledLink>
  
)

export default TextArrow
