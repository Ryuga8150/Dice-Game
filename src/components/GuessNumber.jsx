import styled from "styled-components";

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
`;

const NumBox = styled.div`
  display: flex;
  gap: 0.6rem;
`;
function GuessNumber() {
  return (
    <StyledDiv>
      <NumBox>
        {Array.from(Array(6).keys()).map((num) => (
          <Box key={num}>{num + 1}</Box>
        ))}
      </NumBox>
      <p>Select Number</p>
    </StyledDiv>
  );
}

export default GuessNumber;
