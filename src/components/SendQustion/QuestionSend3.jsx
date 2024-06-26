import React, { useState } from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";

const emailDomains = [
  "직접 입력",
  "naver.com",
  "gmail.com",
  "nate.com",
  "daum.net",
  "korea.com",
  "hotmail.com",
];

function QuestionSend3({ onEmailChange, error }) {
  const [selectedDomain, setSelectedDomain] = useState("");
  const [customDomain, setCustomDomain] = useState("");
  const handleLocalChange = (e) => {
    onEmailChange("local", e.target.value);
  };
  const handleDomainChange = (e) => {
    const value = e.target.value;
    if (value === "직접 입력") {
      setSelectedDomain("");
      setCustomDomain("");
      onEmailChange("domain", "");
    } else {
      setSelectedDomain(value);
      setCustomDomain("");
      onEmailChange("domain", value);
    }
  };

  const handleCustomDomainChange = (e) => {
    const value = e.target.value;
    setSelectedDomain("");
    setCustomDomain(value);
    setCustomDomain(e.target.value);
  };

  return (
    <MainContainer>
      <QuestionBox>
        <StyledLabel>
          <div className="row-wrapper">
            <div className="text-wrapper2">
              메일 주소
              <img className="star-icon" src={star} alt="Star" />
            </div>
          </div>
        </StyledLabel>
        <InputContainer>
          <InputBox>
            <StyledInput
              className="rectangle"
              type="text"
              placeholder="example"
              onChange={handleLocalChange}
            />
          </InputBox>
          <InputDivider>@</InputDivider>
          <InputBox>
            {selectedDomain || customDomain ? (
              <StyledInput
                className="rectangle"
                type="text"
                placeholder="domain.com"
                value={selectedDomain || customDomain}
                onChange={handleCustomDomainChange}
                disabled={!!selectedDomain}
              />
            ) : (
              <StyledInput
                className="rectangle"
                type="text"
                placeholder="domain.com"
                onChange={handleCustomDomainChange}
              />
            )}
          </InputBox>

          <DomainSelector
            className="rectangle"
            value={selectedDomain || "직접 입력"}
            onChange={handleDomainChange}
          >
            {emailDomains.map((domain, index) => (
              <option key={index} value={domain}>
                {domain}
              </option>
            ))}
          </DomainSelector>
        </InputContainer>
        {error && <WarningMessage>메일을 입력해 주세요.</WarningMessage>}
      </QuestionBox>
    </MainContainer>
  );
}

export default QuestionSend3;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
    font-size: 18px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

const InputBox = styled.div`
  height: 74px;
  width: calc((100% - 20px) / 3);

  .rectangle {
    border: 2px solid #ffffff80;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    background-color: transparent;
    color: white;
    font-size: 20px;
    outline: none;
    box-sizing: border-box;

    ::placeholder {
      color: #ffffff80;
    }
  }

  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 425px) {
    width: 90%;
    height: 51px;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 36px;
  max-width: 726px;

  @media (max-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 425px) {
    width: 373px;
    height: 45px;
    gap: 8px;
  }

  @media (max-width: 375px) {
    width: 330px;
    height: 39px;
  }
`;

const InputDivider = styled.span`
  color: #ffffff80;
  font-size: 25px;
  font-family: "Inter-SemiBold", Helvetica;
  font-weight: 600;
  width: 25px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

const DomainSelector = styled.select`
  height: 74px;
  width: calc((100% - 20px) / 3);
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  option {
    background-color: #1f1f1f;
    color: white;
  }

  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 425px) {
    width: 80%;
    height: 51px;
    margin-left: 8px;
    margin-top: -10px;
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
