import logo from "./logo-bad-quality.jpg";
import "./App.css";
import Title from "./ui/Title";
import SubTitle from "./ui/SubTitle";
import { Flex } from "theme-ui";
import styled from "styled-components";

const Image = styled.img`
  position: relative;
  margin-bottom: 20px;
  opacity: 0.5;
  /* :hover {
    box-shadow: 3px 10px 20px 1px rgba(173, 255, 47, 0.5);
    cursor: pointer;
  } */
  @media (prefers-reduced-motion: no-preference) {
    animation: bobbing infinite 2s linear;
  }
  @keyframes bobbing {
    0% {
      top: 0px;
    }
    50% {
      top: 10px;
    }
    100% {
      top: 0px;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Flex
        sx={{
          flexDirection: "column",
          alignItems: "center",
          m: "50px",
          bg: "rgba(255,255,255,0.9)",
          height: "90vw",
        }}
      >
        <Image src={logo} />
        <Title>KICK IT IN THE DICK</Title>
        <Title>Kick it in the dick</Title>
        <SubTitle>KICK IT IN THE DICK</SubTitle>
        <SubTitle>Kick it in the dick</SubTitle>
      </Flex>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
