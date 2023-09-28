import styled from "styled-components";
import Score from "./Score";
import GuessNumber from "./GuessNumber";

const StyledBoard = styled.div`
  display: flex;
  justify-content: space-between;
`;

function ScoreBoard() {
  return (
    <StyledBoard>
      <Score />
      <GuessNumber />
    </StyledBoard>
  );
}

export default ScoreBoard;
