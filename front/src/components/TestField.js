import TextLine from "./TextLine";
import IconButton from "./UI/button/IconButton";
import { faPlay, faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Timer from "./Timer";

const TextWrapper = styled.div`
font-size: 28px;
width: 70vw;
line-height: 2.5ch;
max-height: 7.5ch;
overflow: hidden;
position: relative;
color: ${props => props.theme.colors.text};
padding: 2px;
margin-bottom: 1em;
`

const TestField = ({ testState, setTestState, duration }) => {
  let testStateTimeout;

  if (testState) {
    testStateTimeout = setTimeout(function() {
      setTestState(2)
    }, duration * 1000)
  }

  return (
    <>
      {(testState > 0) && 
      <Timer seconds={duration}/>}
      <TextWrapper>
        <TextLine
          text={"But why smiling man her imagine married. Chiefly can man her out believe "}
          active={testState}
        />
      </TextWrapper>
      <IconButton
        onClick={() => {
          clearTimeout(testStateTimeout);
          setTestState((testState + 1) % 2);
        }}
        style={{ alignSelf: "center" }}
      >
        <FontAwesomeIcon icon={faPlay} />
        /
        <FontAwesomeIcon icon={faRotate}/>
      </IconButton>
    </>
  )
};

export default TestField;
