import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import IconButton from "./UI/button/IconButton";

const TypingStatsWrapper = styled.div`
display: flex;
justify-content: center;
font-size: 2rem;
gap: 1em;
margin-bottom: .6rem;
color: ${props => props.theme.colors.text};
text-align: center;

@media (max-width: 700px) {
  flex-direction: column;
  align-items: center;
  gap: .3em;
}
`

const TestFinished = ({ typingStats, setTestState }) => {
  return (
    <>
      <TypingStatsWrapper>
        Hey, you completed the test!
      </TypingStatsWrapper>
      <TypingStatsWrapper>
        <div>Typed characters: {typingStats.current.typed}</div>
        <div>Correct: {typingStats.current.correct}</div>
        <div>Incorrect: {typingStats.current.incorrect}</div>
      </TypingStatsWrapper>
      <TypingStatsWrapper>
      <IconButton onClick={() => {
        typingStats.current = {
          typed: 0,
          correct: 0,
          incorrect: 0
        }
        setTestState(0);
      }}>
          <FontAwesomeIcon icon={faRotate} />
        </IconButton>
      </TypingStatsWrapper>
    </>
  )
};

export default TestFinished;
