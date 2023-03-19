import { useState } from "react";
import styled from "styled-components";
import TestField from "./TestField";
import TestFinished from "./TestFinished";

const TestWrapper = styled.div`
display: flex;
flex-direction: column;
position: relative;
`

const TypingTest = () => {
  const [testState, setTestState] = useState(0);
  return (
    <TestWrapper>
      {(testState < 2)
      ? <TestField 
      testState={testState}
      setTestState={setTestState}
      duration={15}/>
      : <TestFinished />}
    </TestWrapper>
  )
};

export default TypingTest;
