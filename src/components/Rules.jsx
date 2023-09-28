import styled from "styled-components";

const StyledRules = styled.div`
  padding: 1.2rem;
  background-color: #fbf1f1;
  width: 60%;
  margin: 0 auto;

  & li {
    font-size: 1.4rem;
  }
`;
const Heading = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
`;
function Rules() {
  return (
    <StyledRules>
      <Heading>How to play dice game</Heading>
      <ul>
        <li>Select any number</li>
        <li>Click on Dice Image</li>
        <li>
          Oher click on dice if selected number is equal to dice number you will
          get same point as dice
        </li>
        <li>If you get wrong guess then 2 point wil get deducted</li>
      </ul>
    </StyledRules>
  );
}

export default Rules;
