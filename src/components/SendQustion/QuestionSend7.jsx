import React, { useState, useEffect } from "react";
import styled from "styled-components";
import star from "../../../images/Question/star.png";
import StyleBox2_2 from "../Box/StyleBox2_2";

function QuestionSend7({ agreed, onAgreementChange, onSubmit }) {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setShowWarning(false);
  }, [agreed]);

  const handleCheckboxChange = (e) => {
    onAgreementChange(e.target.checked);
  };

  const handleSubmitClick = () => {
    if (!agreed) {
      setShowWarning(true);
    } else {
      onSubmit();
    }
  };

  return (
    <MainContainer>
      <QuestionBox>
        <StyledLabel>
          <div className="row-wrapper">
            <div className="text-wrapper2">
              개인정보 처리방침
              <img className="star-icon" src={star} alt="Star" />
            </div>
          </div>
        </StyledLabel>
        <StyledContent>
          <p>개인정보 수집·이용 동의서</p>
          <p>가. 개인정보의 수집·이용에 관한 사항</p>
          <ul>
            <li>❏ 개인정보의 수집·이용 목적</li>
            <ul>
              <li>○ 본 행사 운영에 따른 공지 및 자료조사</li>
            </ul>
            <li>❏ 수집·이용할 개인정보의 항목</li>
            <ul>
              <li>
                ○ 연락처, 주소, 생년월일, 성별, 이메일, 소속 등 참가신청 및 행사
                운영 중 취득한 정보
              </li>
            </ul>
            <li>❏ 개인정보의 보유·이용기간</li>
            <ul>
              <li>
                ○ 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면
                지체 없이 파기합니다. 단, 본 행사 종료 후 참여 인정문서 발급 및
                차년도 행사 준비를 위한 역대 수상자 정보공유 등을 위한 최소한의
                자료(소속, 성명, 연락처, 이메일)는 보존됩니다. (보존기간: 행사
                종료 후 3년)
              </li>
            </ul>
            <li>❏ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익</li>
            <ul>
              <li>
                ○ 위 개인정보의 수집·이용에 거부할 권리가 있음을 알려드립니다.
                단, 수집항목은 행사 진행을 위한 최소한의 필수정보로서 개인정보
                수집·이용에 동의하지 않으실 경우 행사 참가 및 제반활동이
                불가능합니다.
              </li>
            </ul>
          </ul>
          <p>나. 개인정보 제3자 제공에 관한 사항</p>
          <ul>
            <li>❏ 제공받는 자</li>
            <ul>
              <li>○ (사)한국디지털콘텐츠학회, TikTok</li>
            </ul>
            <li>❏ 제공받는 자의 목적</li>
            <ul>
              <li>
                ○ 2024 TikTok 대학생 AR필터 메이커톤 행사 진행 및 운영, 참가자
                관리
              </li>
            </ul>
            <li>❏ 제공하는 개인정보 항목</li>
            <ul>
              <li>
                ○ 연락처, 주소, 생년월일, 성별, 이메일, 소속 등 참가신청 및 행사
                운영 중 취득한 정보
              </li>
            </ul>
            <li>❏ 동의를 거부할 권리 및 동의를 거부할 경우의 불이익</li>
            <ul>
              <li>
                ○ 위 제3자에 대한 개인정보의 제공에 관한 동의를 거부할 수 있으나
                본 행사 참가를 위해 필수적이므로, 위 사항에 동의하셔야만 참가 및
                활동이 가능합니다.
              </li>
            </ul>
          </ul>
          <p>
            본인은 본 동의서의 개인정보 수집·이용·제공에 관한 권리 및 내용을
            이해했으며, 위와 같은 목적으로 본인의 개인정보를 수집·이용 및
            제3자에게 제공하는 것에 동의합니다.
          </p>
        </StyledContent>
        <CheckboxContainer>
          <input
            type="checkbox"
            id="agreement"
            checked={agreed}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="agreement">개인정보 처리방침에 동의합니다</label>
        </CheckboxContainer>
        {showWarning && (
          <WarningMessage>개인정보 처리방침에 동의해 주세요.</WarningMessage>
        )}
        <StyleBox2_2 />
        <StyledBox2>
          <div className="rectangle" onClick={handleSubmitClick}>
            <StyledLabel2 disabled={!agreed}>제출하기</StyledLabel2>
          </div>
        </StyledBox2>
      </QuestionBox>
    </MainContainer>
  );
}

export default QuestionSend7;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
  max-width: 800px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const QuestionBox = styled.div`
  width: 761px;

  @media (max-width: 768px) {
    max-width: 600px;
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

    @media (max-width: 425px) {
      margin-top: 44px;
    }
  }

  .text-wrapper2 {
    width: 206px;
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

const StyledContent = styled.div`
  width: 588px;

  height: 400px;
  border: 2px solid #ffffff80;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 14px;
  outline: none;
  margin-top: 36px;
  overflow-y: scroll;
  padding: 4px;

  & p {
    margin: 0;
    margin-bottom: 10px;
  }

  & ul {
    list-style: none;
    padding-left: 20px;
    margin: 0;
  }

  & li {
    margin-bottom: 5px;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ffffff80;
    border-radius: 10px;
  }

  @media (max-width: 425px) {
    max-width: 90%;
    height: 350px;
    padding: 10px;
    margin-right: 40px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  max-width: 800px;
  color: white;

  & input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #ffffff80;
    border-radius: 4px;
    margin-right: 8px;
    cursor: pointer;

    &:checked {
      background-color: #ffffff80;
    }
  }

  & label {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    margin-top: 10px;
    margin-right: 80px;
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

const StyledLabel2 = styled.div`
  color: #ffffff;
  font-family: "Inter-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`;

const StyledBox2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  margin-top: 40px;

  .rectangle {
    background: linear-gradient(
      240deg,
      rgb(37, 244, 238) 0%,
      rgb(254, 44, 85) 100%
    );
    border-radius: 10px;
    height: 72px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      width: 260px;
      height: 65px;
    }
  }

  @media (max-width: 768px) {
    height: 60px;
    width: 100%;
    margin-bottom: 10px;
  }
`;
