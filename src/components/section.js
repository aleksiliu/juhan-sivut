import styled from "styled-components"

const Section = styled.div`
  background-color: ${props => props.gradient ? "red" : "#f5f5f5"};
  margin: 0 32px;
  border-radius: 4px;
`
export default Section