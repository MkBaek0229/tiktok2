import React from "react";
import styled, { keyframes } from "styled-components";
import line from "../../../images/Home/line.png";
import star from "../../../images/Question/star.png";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

function QuestionSend({ inquirerName, onInquirerNameChange }) {
  return (
    <MainContainer>
      <QuestionBox>
        <StyledLabel>
          <div className="label-container">
            <div className="text-wrapper">문의하기</div>
          </div>
          <StyledLine>
            <img className="vector" src={line} alt="Line" />
          </StyledLine>
        </StyledLabel>
        <StyledLabel>
          <div className="row-wrapper">
            <div className="text-wrapper2">
              문의자 명
              <img className="star-icon" src={star} alt="Star" />
            </div>
            <div className="text-wrapper3">
              <img className="star-icon2" src={star} alt="Star" />
              필수 입력
            </div>
          </div>
        </StyledLabel>

        <StyledInput
          id="inquirerName"
          type="text"
          placeholder="문의자 명을 입력하세요"
          value={inquirerName}
          onChange={onInquirerNameChange}
        />
      </QuestionBox>
    </MainContainer>
  );
}

export default QuestionSend;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 150px;
`;

const QuestionBox = styled.div`
  max-width: 761px;

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
  width: 95%;

  .label-container {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 282px;
    height: 73px;

    @media (max-width: 425px) {
      height: 54px;
    }

    @media (max-width: 375px) {
      width: 337px;
    }
  }

  .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 60px;
    font-weight: 700;
    width: 100%;
    height: 100%;

    @media (max-width: 425px) {
      font-size: 45px;
    }

    @media (max-width: 375px) {
      font-size: 39px;
    }
  }

  .row-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 32px;

    margin-top: 69px;

    @media (max-width: 425px) {
      margin-top: 72px;
    }
  }

  .text-wrapper2,
  .text-wrapper3 {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-weight: 700;

    @media (max-width: 425px) {
      align-items: center;
    }

    .star-icon {
      width: 10px;
      height: 10px;
      margin-bottom: 5px;
      margin-left: 5px;
    }

    .star-icon2 {
      width: 10px;
      height: 10px;
      padding-bottom: 10px;

      @media (max-width: 768px) {
        width: 10px;
        height: 10px;
      }
    }
  }

  .text-wrapper2 {
    width: 120px;
    height: 28px;

    font-size: 23px;

    @media (max-width: 425px) {
      font-size: 19px;
    }
  }

  .text-wrapper3 {
    width: 79px;
    height: 23px;
    font-size: 16px;

    @media (max-width: 425px) {
      display: none;
    }
  }

  .img {
    margin-bottom: 200px;
  }
`;

const StyledLine = styled.div`
  width: 760px;

  animation: ${slideIn} 0.5s ease-out;

  .vector {
    width: 100%;
    height: 2px;
  }

  @media (max-width: 425px) {
    width: 375px;
  }

  @media (max-width: 375px) {
    width: 330px;
  }
`;

const StyledInput = styled.input`
  width: 718px;
  height: 74px;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 20px;
  outline: none;
  margin-top: 21px;

  &::placeholder {
    color: #ffffff80;
    font-size: 20px; /* 적절한 크기로 조정 */
    padding-left: 11px;

    @media (max-width: 425px) {
      font-size: 15px;
      padding-left: 5px;
    }
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
