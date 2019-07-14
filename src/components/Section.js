import styled from "styled-components"

const Section = styled.div`
  background: ${props => props.gradient ? "linear-gradient(264.27deg, #BFDDB6 -0.58%, #4CB8BA 100%)" : "#f5f5f5"};
  margin: 0 32px;
  border-radius: 4px;
  @media (max-width: 768px) {
    margin: 0;
  }
`
export default Section