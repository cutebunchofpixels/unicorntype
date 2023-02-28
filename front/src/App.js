import { Outlet } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { createContext, useState } from "react";
import themes from "./utils/Themes/themes";
import Navbar from "./components/UI/Navbar";

const Container = styled.div`
padding: 2em 10em 2em 10em;
background-color: ${props => props.theme.colors.bg};
min-height: 100vh;
transition: background-color ${props => props.theme.utils.transitionSpeed};
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
const SetThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(themes[0]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <SetThemeContext.Provider value={setTheme}>
          <Navbar />
        </SetThemeContext.Provider>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export { SetThemeContext };
export default App;
