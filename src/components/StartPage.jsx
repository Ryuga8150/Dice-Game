import PropTypes from "prop-types";
import styled from "styled-components";
import Description from "./Description";

const StyledDiv = styled.div`
  padding: 1.8rem 2.4rem;

  display: flex;
  align-items: center;
  height: 100vh;
`;
const ImageBox = styled.div`
  & img {
    width: 64rem;
    height: 48rem;
  }
`;

StartPage.propTypes = {
  onSetGamePage: PropTypes.func,
};

function StartPage({ onSetGamePage }) {
  return (
    <StyledDiv>
      <ImageBox>
        <img src="/images/dices.png" alt="Dices" />
      </ImageBox>
      <Description onSetGamePage={onSetGamePage} />
    </StyledDiv>
  );
}

export default StartPage;
