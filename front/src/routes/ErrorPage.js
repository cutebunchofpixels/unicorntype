import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
min-height: 100vh;
padding: 0 15% 0 15%;
text-align: center;
`
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

  return (
    <Wrapper>
        <h1>Whoa, it seems like the page you're looking for does not exist</h1>
        <i style={{marginTop: '20px'}}>{error.statusText || error.message}</i>
    </Wrapper>
  )
};

export default ErrorPage;
