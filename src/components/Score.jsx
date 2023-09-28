import styled from "styled-components";

const StyledScore = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  & p {
    font-size: 5.2rem;
    font-weight: 500;
  }

  & span {
    font-size: 1.8rem;
  }
`;

function Score() {
  return (
    <StyledScore>
      <p>0</p>
      <span>Total Score</span>
    </StyledScore>
  );
}

export default Score;
