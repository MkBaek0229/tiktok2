import React from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend4({ title, onTitleChange }) {
  return (
    <MainContainer>
      <QuestionBox>
        <StyledLabel>
          <div className="row-wrapper">
            <div className="text-wrapper2">
              제목
              <img className="star-icon" src={star} alt="Star" />
            </div>
          </div>
        </StyledLabel>
        <StyledInput
          className="rectangle"
          type="text"
          value={title}
          placeholder="제목을 입력하세요"
          onChange={onTitleChange}
        />
      </QuestionBox>
    </MainContainer>
  );
}

export default QuestionSend4;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    margin-left: 1%;
  }
`;

const QuestionBox = styled.div`
  width: 761px;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 426px) {
    max-width: 387px;
  }

  @media (max-width: 375px) {
    width: 337px;
  }
`;

const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;

  .row-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 28px;
    margin-top: 48px;

    @media (max-width: 768px) {
      margin-top: 44px;
    }

    @media (max-width: 425px) {
      margin-top: 44px;
    }
  }

  .text-wrapper2 {
    width: 120px;
    height: 28px;
    display: flex;
    align-items: center;
    position: relative;
    align-items: flex-start;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 700;
    margin-top: 10px;
    font-size: 23px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 425px) {
      font-size: 19px;
    }

    .star-icon {
      width: 10px;
      height: 10px;
      margin-left: 5px;
      margin-bottom: 5px;

      @media (max-width: 768px) {
        width: 9px;
        height: 9px;
      }
    }
  }
`;

const StyledInput = styled.input`
  height: 74px;
  width: 720px;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  outline: none;
  margin-top: 36px;

  &::placeholder {
    color: #ffffff80;
    font-size: 20px;
    padding-left: 11px;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 425px) {
      font-size: 15px;
      padding-left: 5px;
    }
  }

  @media (max-width: 768px) {
    height: 60px;
    width: 592px;
  }

  @media (max-width: 425px) {
    width: 365px;
    height: 45px;
  }

  @media (max-width: 375px) {
    width: 322px;
    height: 39px;
  }
`;
