import styled from "styled-components";

const Wrapper = styled.input`
width: 100%;
font-size: 1em;
font-family: inherit;
background-color: ${props => props.theme.colors.bg};
transition:
 background-color ${props => props.theme.utils.transitionSpeed},
 color ${props => props.theme.utils.transitionSpeed};
border: none;
outline: none;
&:focus {
  color: ${props => props.theme.colors.text};
  outline: none;
}
&::placeholder {
  color: ${props => props.theme.colors.text};
}
`

const CustomInput = ({ ...props }) => {
  return (
    <Wrapper {...props} />
  )
};

export default CustomInput;
