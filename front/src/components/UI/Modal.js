import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
right: 0;
display: grid;
place-content: center;
pointer-events: none;
background-color: rgba(0, 0, 0, 0.1);
opacity: 0;
transition: opacity .3s ease-in;
&.active {
    pointer-events: all;
    opacity: 1;
}
`
const ContentWrapper = styled.div`
border-radius: 1em;
padding: 3em;
margin: 2em;
max-width: 70ch;
background-color: ${props => props.bgColor};
transform: scale(0.5);
transition: .3s all;
&.active {
    transform: scale(1);
}
`

const Modal = ({ active, setActive, children }) => {
    const theme = useContext(ThemeContext);

    return (
        <Wrapper className={active && "active"} onClick={() => setActive()}>
            <ContentWrapper
                className={active && "active"}
                onClick={(e) => e.stopPropagation()}
                bgColor={theme.colors.bg}
            >
                {children}
            </ContentWrapper>
        </Wrapper>
    )
};

export default Modal;