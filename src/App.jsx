import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";
import { Toaster } from "react-hot-toast";

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
      <Toaster
        position="top-center"
        // gutter is the gap between notifications
        // if queued
        gutter={12}
        // will give margin around the notification
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          //default styles
          style: {
            background: "#262626",
            color: "#f6f6f6",
          },

          success: {
            duration: 6000,
            iconTheme: {
              primary: "#059669",
              secondary: "#f6f6f6",
            },
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: "#dc2626",
              secondary: "#f6f6f6",
            },
          },
        }}
      />
    </>
  );
}

export default App;
