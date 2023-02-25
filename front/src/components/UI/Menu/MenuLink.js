import { NavLink } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { useContext } from "react";

const StyledLink = styled(NavLink)`
color: ${props => props.$textColor};
transition: all .2s ease;
font-size: 20px;
display: flex;
align-items: end;
justify-content: center;
&.active {
  color: ${props => props.$activeColor}
}
&:hover {
  color: ${props => props.$activeColor}
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
