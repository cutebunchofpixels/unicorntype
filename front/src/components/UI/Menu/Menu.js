import MenuLink from "./MenuLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import { useState } from "react";
import Modal from "../Modal";
import ThemePicker from "../ThemePicker/ThemePicker";

const Wrapper = styled.div`
display: grid;
grid-template-columns: auto auto 1fr auto;
justify-content: start;
column-gap: 1.5em;
`

const Menu = () => {
    const [isThemePickerVisible, setThemePickerVisible] = useState(false);

    return (
        <Wrapper>
            <MenuLink to="/">
                <FontAwesomeIcon icon={faKeyboard} />
            </MenuLink>
            <MenuLink to="/about">
                <FontAwesomeIcon icon={faInfo} />
            </MenuLink>
            <MenuLink to="/settings">
                <FontAwesomeIcon icon={faScrewdriverWrench} />
            </MenuLink>
            <MenuButton onClick={() => setThemePickerVisible(true)}>
                <FontAwesomeIcon icon={faPalette}/>
            </MenuButton>
            <Modal active={isThemePickerVisible} setActive={setThemePickerVisible}>
                <ThemePicker />
            </Modal>
        </Wrapper>
    );
};

export default Menu;
