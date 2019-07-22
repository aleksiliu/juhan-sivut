import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/juha-makkonen.svg"
import arrow from "../images/Arrow.svg"

const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 1110px;
  padding: 40px 32px;
  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`

const Blog = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BlogText = styled.p`
  margin-right: 8px;
  margin-bottom: 0;
`

const StyledLink = styled(Link)`
  color: #88c577;
  text-decoration: none;
  font-size: 16px;
`

const Nav = () => (
  
    <HeaderContainer>
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
    </HeaderContainer>
  
)

export default Nav
