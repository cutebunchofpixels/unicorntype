import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Wrapper = styled.button`
background-color: transparent;
font-size: 1.2rem;
width: 1em;
border: none;
transition: all .2s ease;
color: ${props => props.textColor};
&:hover {
  color: ${props => props.$activeColor};
  cursor: pointer;
}
@media (max-width: 768px) {
  font-size: 1rem;
}
`
const MenuButton = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper activeColor={theme.colors.accent} textColor={theme.colors.text} {...props}>
      {children}
    </Wrapper>
  )
};

export default MenuButton;
