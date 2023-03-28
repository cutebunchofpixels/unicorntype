import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import throttle from "../utils/throttle";

const caretFlash = keyframes`
0%, 100% {
  opacity: 0;
}
50% {
  opacity: 1;
}
`

const Letter = styled.span`
transition: all 0.125s ease-out ;
&.correct {
    color: ${props => props.theme.colors.correct};
}
&.incorrect {
    color: ${props => props.theme.colors.incorrect};
}
&.current {
  text-decoration: underline;
}
`

const TextInput = styled.input`
width: 100%;
height: 100%;
position: absolute;
z-index: 2;
opacity: 0;
cursor: default;
top: 0;
left: 0;
pointer-events: none
`

const Caret = styled.div`
position: absolute;
width: 0.15rem;
height: 30px;
left: 0px;
z-index: 2;
background-color: ${props => props.theme.colors.accent};
transition: left 0.125s ease-out;
border-radius: ${props => props.theme.utils.roundness};
animation: ${props => props.animationFrames} 1s linear infinite;
`

const TextLine = ({ text, active, lineIndex, setLineIndex }) => {
  const charsRef = useRef(null);
  const inputRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [caretX, setCaretX] = useState(0);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const handleResize = throttle(resetLine, 50);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  function getRefMap() {
    if (!charsRef.current) {
      charsRef.current = new Map();
    }

    return charsRef.current;
  }

  function removeSpellingClasses(node) {
    node.classList.contains("correct")
        ? node.classList.remove("correct")
        : node.classList.remove("incorrect");
  }

  function resetLine() {
      setCurrentIndex(0);
      setCaretX(0);
  }

  function handleInput(e) {
    const refMap = getRefMap();

    if (e.target.value.length < userInput.length) {
      const prevLetterNode = refMap.get(Math.max(0, currentIndex - 1));
      removeSpellingClasses(prevLetterNode);
      setCurrentIndex(Math.max(0, currentIndex - 1));
      setCaretX(Math.max(0, caretX - 14));
      setUserInput(e.target.value);
      return;
    }

    const typedChar = e.target.value.slice(-1);
    const currentLetterNode = refMap.get(currentIndex);

    if (typedChar === currentLetterNode.innerHTML) {
      currentLetterNode.classList.add("correct");
    }
    else {
      currentLetterNode.classList.add("incorrect");
    }

    setCurrentIndex(currentIndex + 1);
    setCaretX(caretX + 14);
    setUserInput(e.target.value);

    if (currentIndex === text.length - 1) {
      setLineIndex(lineIndex + 1);
      resetLine();
    }
  }

  if (active) {
    inputRef.current.focus();
  }

  console.log();
  return (
    <div>
      <Caret
      animationFrames={(active) ? "none" : caretFlash}
      style={{ left: `${caretX}px` }}
      />
      <TextInput
        onInput={handleInput}
        ref={inputRef}
        tabIndex="0"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
      />
      {text.split('').map((c, ind) => {
        return <Letter
          key={`${c}${ind}${text.slice(0, Math.min(10, text.length))}`}
          ref={(node) => {
            const refMap = getRefMap();
            if (node) {
              refMap.set(ind, node);
            } else {
              refMap.delete(ind);
            }
          }}>
          {c}
        </Letter>
      })}
    </div>
  )
};

export default TextLine;
