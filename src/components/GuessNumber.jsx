import { useState } from "react";
import styled, { css } from "styled-components";
import { useGameContext } from "../context/GameContext";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 0.6rem;

  & p {
    font-size: 2.4rem;
    margin-left: auto;
  }
`;

const Box = styled.div`
  padding: 1rem 2rem;
  border: solid 2px #262626;

  ${(props) =>
    props.activeBkg &&
    css`
      background-color: #262626;
      color: #f6f6f6;
    `}
  cursor: pointer;
`;

const NumBox = styled.div`
  display: flex;
  gap: 0.6rem;
`;
function GuessNumber() {
  const { active, setActive } = useGameContext();

  //console.log(active);
  return (
    <StyledDiv>
      <NumBox>
        {Array.from(Array(6).keys()).map((num) => (
          <Box
            key={num + 1}
            onClick={() => setActive(num + 1)}
            activeBkg={active === num + 1}
          >
            {num + 1}
          </Box>
        ))}
      </NumBox>
      <p>Select Number</p>
    </StyledDiv>
  );
}

export default GuessNumber;
