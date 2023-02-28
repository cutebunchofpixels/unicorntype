import styled from "styled-components";

const Wrapper = styled.button`
background-color: transparent;
font-size: 1.2rem;
width: 1em;
border: none;
transition: color ${props => props.theme.utils.transitionSpeed};
color: ${props => props.theme.colors.text};
&:hover {
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
}
@media (max-width: 768px) {
  font-size: 1rem;
}
`
const MenuButton = ({ children, ...props }) => {

  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
};

export default MenuButton;
