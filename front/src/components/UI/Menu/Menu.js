import MenuLink from "./MenuLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(3, auto);
justify-content: start;
column-gap: 1.5em;
`

const Menu = () => {
  return (
    <Wrapper>
      <MenuLink to="/">
        <FontAwesomeIcon icon={faKeyboard}/>
      </MenuLink>
      <MenuLink to="/about">
        <FontAwesomeIcon icon={faInfo}/>
      </MenuLink>
      <MenuLink to="/settings">
        <FontAwesomeIcon icon={faScrewdriverWrench}/>
      </MenuLink>
    </Wrapper>
  );
};

export default Menu;
