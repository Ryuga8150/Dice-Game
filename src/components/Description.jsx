import PropTypes from "prop-types";
import styled from "styled-components";

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const Heading = styled.h1`
  text-align: right;
  font-size: 9.6rem;
  line-height: 1;
  color: #262626;
`;
const Button = styled.button`
  padding: 0.8rem 1.4rem;
  margin-left: auto;
  background-color: #262626;
  color: #f6f6f6;
  border: none;
  cursor: pointer;
`;

Description.propTypes = {
  onSetGamePage: PropTypes.func,
};

function Description({ onSetGamePage }) {
  return (
    <StyledDescription>
      <Heading>Dice Game</Heading>
      <Button onClick={onSetGamePage}>Let&apos;s Play</Button>
    </StyledDescription>
  );
}

export default Description;
