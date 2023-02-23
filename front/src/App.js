import { Outlet } from "react-router-dom";
import Logo from "./components/UI/Logo";
import styled from "styled-components";
import { useState } from "react";
import { ThemeContext } from "styled-components";
import themes from "./utils/constants/themes";

const Container = styled.div`
padding: 1% 10% 1% 10%;
background-color: ${props => props.bgColor};
min-height: 100vh;
`

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Container bgColor={currentTheme.colors.bg}> 
        <Logo />
        <Outlet />
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
