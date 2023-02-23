import styled from "styled-components";
import Raleway from "../../media/fonts/raleway/Raleway-VariableFont_wght.ttf";

const Wrapper = styled.div`
font-size: 28px;
font-family: raleway;
font-weight: 500;
text-transform: uppercase;
line-height: 20px;
@font-face {
    font-family: "raleway";
    src: url(${Raleway});
}
`

const Top = styled(Wrapper)`
font-size: 12px;
font-weight: 400;
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