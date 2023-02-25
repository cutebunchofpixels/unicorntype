import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { ThemeContext } from "styled-components";
import themes from "./utils/Themes/themes";
import Navbar from "./components/UI/Navbar";

const Container = styled.div`
padding: 2em 10em 2em 10em;
background-color: ${props => props.bgColor};
min-height: 100vh;
transition: background-color .5s ease-in;
@media (max-width: 1024px) {
  padding: 2em 5em 2em 5em;
}

@media (max-width: 768px) {
  padding: 2em 3em 2em 3em;
}

@media (max-width: 425px) {
  padding: 2em 1em 2em 1em;
}
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
