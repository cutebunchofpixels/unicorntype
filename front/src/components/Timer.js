import { useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
font-size: 1.5rem;
position: absolute;
top: -1em;
`

const Timer = ({ seconds }) => {
  let [time, setTime] = useState(seconds);
  const isRunning = useRef(false);

  if (!isRunning.current) {
    isRunning.current = true;
    const decInterval = setInterval(function() {
      if (time === 0) {
        clearInterval(decInterval);
      }
      setTime(time => time - 1);
    }, 1000)
  }

  return (
    <Wrapper>
      {time}
    </Wrapper>
  )
};

export default Timer;