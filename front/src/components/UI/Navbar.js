import styled from "styled-components";
import Logo from "./Logo";
import Menu from "./Menu/Menu";



const Wrapper = styled.div`
display: grid;
grid-template-columns: auto 1fr;
align-items: center;
column-gap: 1em;
`

const Navbar = () => {
  return (
    <Wrapper>
        <Logo />
        <Menu />
    </Wrapper>
  )
};

export default Navbar;