import React from "react";
import styled, { keyframes } from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend2({ phoneNumber, onPhoneChange }) {
  const handleInputChange = (part, e) => {
    onPhoneChange(part, e.target.value);
  };

  return (
    <MainContainer>
      <QuestionBox>
        <StyledLabel>
          <div className="row-wrapper">
            <div className="text-wrapper2">
              전화번호
              <img className="star-icon" src={star} alt="Star" />
            </div>
          </div>
        </StyledLabel>
        <InputContainer>
          <InputBox>
            <StyledInput
              className="rectangle"
              id="part1"
              type="text"
              maxLength="3"
              placeholder="010"
              value={phoneNumber.part1}
              onChange={(e) => handleInputChange("part1", e)}
            />
          </InputBox>
          <InputDivider>-</InputDivider>
          <InputBox>
            <StyledInput
              className="rectangle"
              id="part2"
              type="text"
              maxLength="4"
              placeholder="1234"
              value={phoneNumber.part2}
              onChange={(e) => handleInputChange("part2", e)}
            />
          </InputBox>
          <InputDivider>-</InputDivider>
          <InputBox>
            <StyledInput
              className="rectangle"
              id="part3"
              type="text"
              maxLength="4"
              placeholder="5678"
              value={phoneNumber.part3}
              onChange={(e) => handleInputChange("part3", e)}
            />
          </InputBox>
        </InputContainer>
      </QuestionBox>
    </MainContainer>
  );
}

export default QuestionSend2;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    height: auto;
    margin-left: 1%;
  }
`;

const QuestionBox = styled.div`
  width: 761px;

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

    @media (max-width: 768px) {
      font-size: 30px;
      margin-left: -0px;
    }

    .star-icon {
      width: 10px;
      height: 10px;
      margin-left: 5px;
      @media (max-width: 768px) {
        width: 9px;
        height: 9px;
      }
    }
  }

  .text-wrapper2 {
    font-size: 23px;

    @media (max-width: 425px) {
      font-size: 19px;
    }
  }
`;

const StyledInput = styled.input`
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
`;
const InputBox = styled.div`
  height: 74px;
  width: 225px;

  @media (max-width: 425px) {
    width: 109px;
    height: 45px;
  }

  @media (max-width: 375px) {
    width: 100px;
    height: 41px;
  }

  .rectangle {
    border: 2px solid #ffffff80;
    border-radius: 10px;
    height: 100%;
    width: 100%;

    background-color: transparent;
    color: white;

    font-size: 16px;
    outline: none;

    ::placeholder {
      color: #ffffff80;
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  margin-top: 36px;

  max-width: 718px;

  @media (max-width: 425px) {
    width: 373px;
    height: 45px;
    gap: 20px;
  }
  @media (max-width: 375px) {
    width: 322px;
    height: 39px;
    gap: 25px;
  }

  }
`;

const InputDivider = styled.span`
  color: white;
  font-size: 24px;
  position: relative;
  left: 2px;

  @media (max-width: 425px) {
    display: none;
  }
`;
