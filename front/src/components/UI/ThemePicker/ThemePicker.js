import styled from "styled-components";
import themes from "../../../utils/themes";
import CustomInput from "../input/CustomInput";
import ThemeOption from "./ThemeOption.js"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SearchWrapper = styled.div`
display: grid;
grid-template-columns: 3ch 1fr;
justify-items: center;
font-size: 1.2rem;
margin: 0.6em;
color: ${props => props.theme.colors.text}
`

const ThemePicker = () => {
  const [themeSearch, setThemeSearch] = useState("");

  return (<div>
    <SearchWrapper>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <CustomInput
        placeholder="Type here to search"
        value={themeSearch}
        onChange={(e) => setThemeSearch(e.target.value)} />
    </SearchWrapper>
    {themes.map(t => {
      return (themeSearch === "" || t.name.toLowerCase().includes(themeSearch)) &&
        <ThemeOption theme={t} key={t.name} />
    })}
  </div>)
};

export default ThemePicker;
