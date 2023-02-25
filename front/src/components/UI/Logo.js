import styled from "styled-components";
import Raleway from "../../media/fonts/raleway/Raleway-VariableFont_wght.ttf";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Wrapper = styled.div`
font-size: 28px;
font-family: raleway;
font-weight: 500;
text-transform: uppercase;
line-height: 20px;
position: relative;
color: ${props => props.logoColor};
@font-face {
    font-family: "raleway";
    src: url(${Raleway});
}
`

const Top = styled(Wrapper)`
font-size: 10px;
font-weight: 400;
position: absolute;
transform: translateY(-15px);
color: ${props => props.textColor};
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