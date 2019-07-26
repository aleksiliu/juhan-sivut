import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import logo from "../images/juha-makkonen.svg"
import TextArrow from "./TextArrow"

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


const Nav = (props) => (
  <>
  
    <HeaderContainer>
      <Heading>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
{props.show === 'blog' && 
      <nav>
 <TextArrow text="Blogi" to="blog" /> 
      </nav>
      }
      </Heading>
    </HeaderContainer>
    </>
)

export default Nav
