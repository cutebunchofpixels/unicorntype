import styled from "styled-components";
import TypingTest from "../components/TypingTest";

const Wrapper = styled.div`
display: grid;
place-items: center;
`

const Home = () => {
  return (
    <Wrapper>
      <TypingTest />
    </Wrapper>
  )
};

export default Home;