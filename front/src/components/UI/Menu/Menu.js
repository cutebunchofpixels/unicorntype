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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Modal>
        </Wrapper>
    );
};

export default Menu;
