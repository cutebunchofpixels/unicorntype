import { NavLink } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { useContext } from "react";

const StyledLink = styled(NavLink)`
color: ${props => props.$textColor};
transition: all .2s ease;
font-size: 1.2rem;
width: 1em;
display: flex;
align-items: center;
justify-content: center;
&.active {
  color: ${props => props.$activeColor}
}
&:hover {
  color: ${props => props.$activeColor}
}
@media (max-width: 768px) {
  font-size: 1rem;
}
`

const MenuLink = ({ to, children }) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledLink
      to={to}
      className={({ isActive }) =>
        isActive ? "active" : undefined
      }
      $activeColor={theme.colors.accent}
      $textColor={theme.colors.text}
      >
      {children}
    </StyledLink>
  )
};

export default MenuLink;
