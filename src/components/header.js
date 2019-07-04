import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Img from "gatsby-image"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1110px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`

const StyledLink = styled(Link)`
  color: #88c577;
  text-decoration: none;
  font-size: 16px;
`

const Header = () => (
  <header>
    <Container>
      <h1>
        <Link to="/">
          <img src="./images/juha-makkonen.svg" alt="logo" />
        </Link>
      </h1>
      <nav>
        <StyledLink to="/blog">Blogiin</StyledLink>
      </nav>
    </Container>
  </header>
)

export default Header
