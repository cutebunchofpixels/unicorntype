import { useState } from "react";
import styled from "styled-components"
import TextLine from "./TextLine";

const TextWrapper = styled.div`
font-size: 28px;
width: 70vw;
line-height: 2.5ch;
max-height: 7.5ch;
overflow: hidden;
position: relative;
color: ${props => props.theme.colors.text};
padding: 2px;
`

const TypingTest = () => {
  return (  
    <TextWrapper>
      <TextLine
      text={"But why smiling man her imagine married. Chiefly can man her out believe "}
      />
      manners cottage colonel unknown. Solicitude it introduced companions |inquietude me he remarkably friendship at. My almost or horses period. |Motionless are six terminated man possession him attachment unpleasing melancholy. Sir smile arose one share. No abroad in easily relied an whence lovers temper by. Looked wisdom common he an be giving length mr.
      His having within saw become ask passed misery giving. Recommend questions get too fulfilled. He fact in we case miss sake. Entrance be throwing he do blessing up. Hearts warmth in genius do garden advice mr it garret. Collected preserved are middleton dependent residence but him how. Handsome weddings yet mrs you has carriage packages. Preferred joy agreement put continual elsewhere delivered now. Mrs exercise felicity had men speaking met. Rich deal mrs part led pure will but.
    </TextWrapper>
  )
};

export default TypingTest;
