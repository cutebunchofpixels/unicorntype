import { useState } from "react";
import styled from "styled-components";
import TestField from "./TestField";
import TestFinished from "./TestFinished";

const TestWrapper = styled.div`
display: flex;
flex-direction: column;
position: relative;
`
const DURATION = 30;

const TypingTest = () => {
  const [testState, setTestState] = useState(0);
  return (
    <TestWrapper id="test-wrapper">
      {(testState < 2)
      ? <TestField 
      testState={testState}
      setTestState={setTestState}
      duration={DURATION}/>
      : <TestFinished />}
    </TestWrapper>
  )
};

export default TypingTest;
