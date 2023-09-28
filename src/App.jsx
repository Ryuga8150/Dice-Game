import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";

const StyledApp = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  height: 100vh;
`;

function App() {
  const [isStartPage, setIsStartPage] = useState(true);

  const handleSetGamePage = function () {
    setIsStartPage(!isStartPage);
  };

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        {isStartPage ? (
          <StartPage onSetGamePage={handleSetGamePage} />
        ) : (
          <GamePage />
        )}
      </StyledApp>
    </>
  );
}

export default App;
