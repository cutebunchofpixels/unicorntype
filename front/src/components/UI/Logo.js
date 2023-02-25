import styled from "styled-components";
import Raleway from "../../media/fonts/raleway/Raleway-VariableFont_wght.ttf";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Wrapper = styled.div`
font-size: 2rem;
font-family: raleway;
font-weight: 500;
text-transform: uppercase;
position: relative;
color: ${props => props.logoColor};
@font-face {
    font-family: "raleway";
    src: url(${Raleway});
}
@media (max-width: 768px) {
  font-size: 1.7rem
}
@media (max-width: 425px) {
  display: none;
}
`

const Top = styled(Wrapper)`
font-size: 0.6rem;
font-weight: 400;
position: absolute;
transform: translateY(-0.3em);
color: ${props => props.textColor};
@media (max-width: 768px) {
  font-size: 0.5rem;
}
@media (max-width: 425px) {
  display: none;
}
`

const Logo = () => {
  const theme = useContext(ThemeContext);
  
  return (
    <Wrapper logoColor={theme.colors.logo}>
        <Top textColor={theme.colors.text}>
            unicorn see
        </Top>
        unicorntype
    </Wrapper>
  )
};

export default Logo;