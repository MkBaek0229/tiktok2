import React from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend6({ onFileChange }) {
  return (
    <MainContainer>
      <QuestionBox>
        <StyledLabel>
          <div className="row-wrapper">
            <div className="text-wrapper2">
              파일 첨부
              <img className="star-icon" src={star} alt="Star" />
            </div>
          </div>
        </StyledLabel>

        <StyledFileInput
          className="file-input"
          type="file"
          placeholder="파일을 첨부하세요"
          onChange={onFileChange}
        />
        <StyledLabel2>
          <p className="text-wrapper pc">※ 500MB를 초과할 수 없습니다.</p>
          <p className="text-wrapper mobile">500MB를 초과할 수 없습니다.</p>
          <p className="text-wrapper3">
            pdf, doc, docx, ppt, pptx, jpg, jpeg, png, zip, txt, gif 파일만
            가능합니다.
          </p>
        </StyledLabel2>
      </QuestionBox>
    </MainContainer>
  );
}

export default QuestionSend6;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
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
      margin-bottom: 5px;
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

const StyledFileInput = styled.input`
  height: 74px;
  width: 724px;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  margin-top: 36px;
  text-align: center;
  line-height: 74px;

  ::file-selector-button {
    background-color: #ffffff80;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    color: #000;
    font-weight: bold;
  }

  @media (max-width: 425px) {
    width: 369px;
    height: 45px;
  }

  @media (max-width: 375px) {
    width: 326px;
    height: 39px;
  }
`;

const StyledLabel2 = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  width: 758px;
  text-align: left;
  margin-left: 15px;

  @media (max-width: 425px) {
    width: 250px;
  }
  .text-wrapper {
    color: #25f4eead;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.2;
    margin: 0;

    @media (max-width: 425px) {
      display: none;
    }

   
    }
    .text-wrapper.mobile {
      display: none;
  
      @media (max-width: 425px) {
        display: block;
        font-size: 8px;
      }
    }
  }

  .text-wrapper3 {
    color: #25f4eead;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.2;
    margin: 0;

    @media (max-width: 425px) {
      font-size: 8px;
    }
  }
`;
