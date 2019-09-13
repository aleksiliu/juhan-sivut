import styled, { css } from 'styled-components'

const Button = styled.a`
  display: inline-block;
  border-radius: 25px;
  padding: 8px 24px;
  background: #FFF;
  color: #303037;
  text-decoration: none;
  margin-top: 24px;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  transition: all .25s;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
    filter: brightness(105%);
    color: #88c577;
    }
  @media (max-width: 768px) {
    display: ${props => props.hide && "none" };
  }

  ${props => props.secondary && css`
    background: #FFF;
    color: #303037;
    &:hover {
    color: #88c577;
    }
  `}

`;

export default Button;

