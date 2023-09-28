import styled from "styled-components";
import ScoreBoard from "./ScoreBoard";
import DiceRoll from "./DiceRoll";
import Rules from "./Rules";
import { useState } from "react";

const StyledGamePage = styled.div`
  padding: 2.4rem 1.2rem;
  height: 100vh;
`;

function GamePage() {
  const [showRules, setShowRules] = useState(false);

  const handleShowRules = function () {
    setShowRules(!showRules);
  };

  return (
    <StyledGamePage>
      <ScoreBoard />
      <DiceRoll onShowRules={handleShowRules} />
      {showRules && <Rules />}
    </StyledGamePage>
  );
}

export default GamePage;
