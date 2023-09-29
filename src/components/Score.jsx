import styled from "styled-components";
import { useGameContext } from "../context/GameContext";

const StyledScore = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;

  & div {
    display: flex;
    justify-content: center;
    font-size: 4.8rem;
  }

  & span {
    font-size: 1.8rem;
  }
`;

function Score() {
  const { score } = useGameContext();

  return (
    <StyledScore>
      <div>{score}</div>
      <span>Total Score</span>
    </StyledScore>
  );
}

export default Score;
