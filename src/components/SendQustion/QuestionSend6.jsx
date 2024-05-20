import React, { useState } from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";

function QuestionSend6({ onFileChange }) {
  const [fileName, setFileName] = useState("선택된 파일 없음");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("선택된 파일 없음");
    }
    if (onFileChange) {
      onFileChange(event);
    }
  };

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

        <FileInputBox>
          <FileInputWrapper>
            <StyledFileInput
              id="file-input"
              type="file"
              onChange={handleFileChange}
            />
            <CustomFileInputLabel htmlFor="file-input">
              파일 선택
            </CustomFileInputLabel>
            <FileName>{fileName}</FileName>
          </FileInputWrapper>
        </FileInputBox>

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

const FileInputBox = styled.div`
  height: 74px;
  width: 724px;
  display: flex;
  justify-content: center;
  margin-top: 36px;
  border: 2px solid #ffffff80;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 592px;
    height: 60px;
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

const FileInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFileInput = styled.input`
  display: none;
`;

const CustomFileInputLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffffff80;
  color: #000;
  border: 2px solid #ffffff80;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 425px) {
    padding: 5px 10px;
  }
`;

const FileName = styled.span`
  margin-left: 20px;
  color: #ffffff;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

const StyledLabel2 = styled.div`
  margin-top: 10px;
  margin-bottom: 50px;
  width: 758px;
  text-align: left;
  margin-left: 15px;

  @media (max-width: 768px) {
    width: 550px;
  }

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
