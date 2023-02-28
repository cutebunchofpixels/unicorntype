import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
color: ${props => props.theme.colors.text};
transition: color ${props => props.theme.utils.transitionSpeed};
font-size: 1.2rem;
width: 1em;
display: flex;
align-items: center;
justify-content: center;
&.active {
  color: ${props => props.theme.colors.accent}
}
&:hover {
  color: ${props => props.theme.colors.accent}
}
@media (max-width: 768px) {
  font-size: 1rem;
}
`

const MenuLink = ({ to, children }) => {
  return (
    <StyledLink
      to={to}
      className={({ isActive }) =>
        isActive ? "active" : undefined
      }>
      {children}
    </StyledLink>
  )
};

export default MenuLink;
