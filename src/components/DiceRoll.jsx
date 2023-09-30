import PropTypes from "prop-types";
import styled from "styled-components";
import { useGameContext } from "../context/GameContext";

const StyledDiceBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  /* flex: 0 0 50%; */
  width: 40%;

  & span {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }

  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

const ImageBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  & img {
    width: 100%;
    height: 22rem;
  }
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: #262626;
  color: #f6f6f6;
  border: none;
`;

DiceRoll.propTypes = {
  onShowRules: PropTypes.func,
  diceRolled: PropTypes.number,
  onDiceRoll: PropTypes.func,
};

function DiceRoll({ onShowRules }) {
  const { diceRolled, handleDiceRoll, reset } = useGameContext();

  return (
    <StyledDiceBox>
      <ImageBox onClick={handleDiceRoll}>
        <img src={`/images/dice_${diceRolled}.png`} alt="A Dice" />
      </ImageBox>

      <span>Click on Dice to Roll</span>

      <Button onClick={reset}>Reset Score</Button>
      <Button onClick={onShowRules}>Show Rules</Button>
    </StyledDiceBox>
  );
}

export default DiceRoll;
