import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/juha-makkonen.svg"
import arrow from "../images/Arrow.svg"
import Container from "./Container"

const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Blog = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BlogText = styled.p`
  margin-right: 8px;
`

const StyledLink = styled(Link)`
  color: #88c577;
  text-decoration: none;
  font-size: 16px;
`

const Header = () => (
  
    <Container>
      <Heading>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

      <nav>
        <StyledLink to="/blog">
          <Blog>
            <BlogText>Blogi</BlogText> <img src={arrow} alt="nuoli" />
          </Blog>
        </StyledLink>
      </nav>
      </Heading>
    </Container>
  
)

export default Header
