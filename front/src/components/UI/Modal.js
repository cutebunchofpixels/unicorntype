import styled from "styled-components";

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;
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
border-radius: ${props => props.theme.utils.roundness};
margin: 2em;
max-width: 80ch;
width: 100%;
background-color: ${props => props.theme.colors.bg};
transform: scale(0.5);
transition: transform .3s,
 background-color ${props => props.theme.utils.transitionSpeed},
 color ${props => props.theme.utils.transitionSpeed};
&.active {
    transform: scale(1);
}
`

const Modal = ({ active, setActive, children }) => {
    return (
        <Wrapper className={active && "active"} onClick={() => setActive()}>
            <ContentWrapper
                className={active && "active"}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </ContentWrapper>
        </Wrapper>
    )
};

export default Modal;