import { useRef, useState } from "react";
import styled from "styled-components";

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
border: none;
&:focus {
  outline: none;
  border: none;
}
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
`

const TextLine = ({ text, handleEndOfLine }) => {
  const charsRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [caretX, setCaretX] = useState(0);
  const [userInput, setUserInput] = useState("");

  function getRefMap() {
    if (!charsRef.current) {
      charsRef.current = new Map();
    }

    return charsRef.current;
  }

  function handleInput(e) {
    const refMap = getRefMap();

    if (e.target.value.length < userInput.length) {
      const prevLetterNode = refMap.get(Math.max(0, currentIndex - 1));
      prevLetterNode.classList.contains("correct")
        ? prevLetterNode.classList.remove("correct")
        : prevLetterNode.classList.remove("incorrect");
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
  }

  return (
    <div>
      <Caret style={{ left: `${caretX}px` }} />
      <TextInput
        onInput={handleInput}
      />
      {text.split('').map((c, ind) => {
        return <Letter
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
