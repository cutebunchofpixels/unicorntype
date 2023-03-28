import MenuLink from "./MenuLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import IconButton from "../button/IconButton";
import { useState } from "react";
import Modal from "../Modal";
import ThemePicker from "../ThemePicker/ThemePicker";

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr auto;
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
            <IconButton onClick={() => setThemePickerVisible(true)}>
                <FontAwesomeIcon icon={faPalette}/>
            </IconButton>
            <Modal active={isThemePickerVisible} setActive={setThemePickerVisible}>
                <ThemePicker />
            </Modal>
        </Wrapper>
    );
};

export default Menu;
