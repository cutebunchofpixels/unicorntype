import TextLine from "./TextLine";
import IconButton from "./UI/button/IconButton";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Timer from "./Timer";
import { useEffect, useRef, useState } from "react";
import TextService from "./API/TextService";
import throttle from "../utils/throttle";

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

function getCharacterCount(fontSize) {
  let width = window.innerWidth * 0.7;
  fontSize /= 2;
  return Math.floor(width / fontSize);
}

const LOAD_LINES = 10;

const TestField = ({ testState, setTestState, duration }) => {
  let testStateTimeout = useRef();
  const [lineCharactersCount, setLineCharactersCount] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [textLines, setTextLines] = useState([]);

  useEffect(() => {
    function handleResize() {
      const count = getCharacterCount(28);

      if (count !== lineCharactersCount) {
        setTestState(0);
        clearTimeout(testStateTimeout.current);
        testStateTimeout.current = null;
        setLineCharactersCount(count);
        setTextLines(TextService.getLines(LOAD_LINES, count));
      }
    };
    const throttled = throttle(handleResize, 50);
    window.addEventListener("resize", throttled);
    handleResize();
    return () => window.removeEventListener("resize", throttled);
  }, [lineCharactersCount]);

  if (lineIndex === LOAD_LINES - 2) {
    setLineIndex(0);
    setTextLines(TextService.getLines(LOAD_LINES, lineCharactersCount));
  }

  return (
    <>
      {(testState > 0) &&
        <Timer seconds={duration} />}
      {(textLines.length > 0) &&
        <TextWrapper>
          <TextLine
            text={textLines[lineIndex]}
            active={testState}
            lineIndex={lineIndex}
            setLineIndex={setLineIndex}
          />
          <div>{textLines[lineIndex + 1]}</div>
          <div>{textLines[lineIndex + 2]}</div>
        </TextWrapper>}
      <div style={{ display: "flex", justifyContent: "center", gap: "1em" }}>
        <IconButton
          onClick={() => {
            if (!testStateTimeout.current) {
              setTestState(1);
              testStateTimeout.current = setTimeout(function () {
                setTestState(2)
              }, duration * 1000);
            }
          }}
          style={{ alignSelf: "center" }}
        >
          <FontAwesomeIcon icon={faPlay} />
        </IconButton>
      </div>
    </>
  )
};

export default TestField;