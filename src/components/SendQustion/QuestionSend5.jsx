import React from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend5({ content, onContentChange, error }) {
  return (
    <MainContainer>
      <QuestionBox>
        <StyledLabel>
          <div className="row-wrapper">
            <div className="text-wrapper2">
              문의 내용
              <img className="star-icon" src={star} alt="Star" />
            </div>
          </div>
        </StyledLabel>
        <StyledTextarea
          className="rectangle"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={onContentChange}
        />
        {error && <WarningMessage>내용을 입력해 주세요.</WarningMessage>}
      </QuestionBox>
    </MainContainer>
  );
}

export default QuestionSend5;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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

const StyledTextarea = styled.textarea`
  height: 350px;
  width: 704px;

  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 24px;
  padding: 10px;
  outline: none;
  margin-top: 36px;
  resize: none;

  &::placeholder {
    color: #ffffff80;
    font-size: 24px;
    padding-left: 10px;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 425px) {
      font-size: 19px;
      padding-left: 5px;
    }
  }

  @media (max-width: 768px) {
    height: 300px;
    width: 576px;
  }

  @media (max-width: 425px) {
    width: 349px;
    height: 200px;
  }

  @media (max-width: 375px) {
    width: 306px;
    height: 171px;
  }
`;

const WarningMessage = styled.div`
  color: #ff4444;
  margin-top: 10px;
  width: 100%;
  font-family: "Inter-Medium", Helvetica;
  font-size: 14px;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
