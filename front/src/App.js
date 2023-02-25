import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { ThemeContext } from "styled-components";
import themes from "./utils/Themes/themes";
import Navbar from "./components/UI/Navbar";

const Container = styled.div`
padding: 2% 10% 2% 10%;
background-color: ${props => props.bgColor};
min-height: 100vh;
transition: all .5s ease-in;
`

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Container bgColor={currentTheme.colors.bg}> 
        <Navbar />
        <Outlet />
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
