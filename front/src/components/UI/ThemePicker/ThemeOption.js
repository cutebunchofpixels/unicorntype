import { useContext } from "react";
import styled from "styled-components";
import { SetThemeContext } from "../../../App";
import { previewColors } from "../../../utils/Themes/themes";

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr auto;
margin-bottom: .3em;
padding: .3em 1em;
color: ${props => props.theme.colors.text};
&:hover {
  background-color: ${props => props.theme.colors.accent};
}
&:last-child {
  border-radius: 0 0 ${props => props.theme.utils.roundness} ${props => props.theme.utils.roundness};
  margin-bottom: 0;
}
`

const ThemePreview = styled.div`
display: grid;
grid-template-columns: repeat(3, auto);
background-color: ${props => props.bgColor};
border-radius: .8em;
`

const ThemeIcon = styled.div`
border-radius: 50%;
background-color: ${props => props.$color};
width: .9em;
height: .9em;
margin: .2em;
`

const ThemeOption = ({ theme }) => {
  const setCurrentTheme = useContext(SetThemeContext);

  return (
    <Wrapper onClick={() => setCurrentTheme(theme)}>
      <div>{theme.name}</div>
      <ThemePreview bgColor={theme.colors.bg}>
        {/* {Object.entries(theme.colors).map((c) => {
          return (c[0] !== "bg") && <ThemeIcon $color={c[1]} key={c[0]} />
        })} */}
        {previewColors.map(c => {
          return <ThemeIcon $color={theme.colors[c]} key={c} />
        })}
      </ThemePreview>
    </Wrapper>
  )
};

export default ThemeOption;
