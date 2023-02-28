import styled from "styled-components";
import Manrope from "../../media/fonts/manrope/Manrope-VariableFont_wght.ttf"

const Wrapper = styled.div`
font-size: 2rem;
font-family: Manrope;
font-weight: 600;
position: relative;
transition: color ${props => props.theme.utils.transitionSpeed};
color: ${props => props.theme.colors.logo};
@font-face {
    font-family: "Manrope";
    src: url(${Manrope});
}
@media (max-width: 768px) {
  font-size: 1.7rem
}
@media (max-width: 425px) {
  display: none;
}
`

const Top = styled(Wrapper)`
font-size: 0.8rem;
position: absolute;
transform: translateY(-0.3em);
color: ${props => props.theme.colors.text};
@media (max-width: 768px) {
  font-size: 0.5rem;
}
`
const Logo = () => {
  return (
    <Wrapper>
      <Top>
        unicorn see
      </Top>
      unicorntype
    </Wrapper>
  )
};

export default Logo;