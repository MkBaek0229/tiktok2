import React from "react";
import styled from "styled-components";

const StyledNotificationLabel = styled.div`
  height: auto;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;

  .tiktok-effect-house {
    color: #25f4ee;
    font-family: "Inter-Medium", Helvetica;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-bottom: 5px;

    @media (max-width: 768px) {
      font-size: 15px;
    }

    @media (max-width: 480px) {
      font-size: 9px;
    }
  }

  .text-wrapper {
    color: #25f4ee;
    font-family: "Inter-Medium", Helvetica;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-left: 15px;
    &.indent {
      color: #25f4ee;
      font-family: "Inter-Medium", Helvetica;
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: normal;

      /* 변경 */
      margin-left: 15px; /* 변경 */
    }

    @media (max-width: 768px) {
      font-size: 9px;
      margin-left: 8px;
      &.indent {
        /* 변경 */
        margin-left: 5px; /* 변경 */
      }
    }

    @media (max-width: 480px) {
      font-size: 9px;
      margin-left: 10px;
      &.indent {
        /* 변경 */
        margin-left: 6px; /* 변경 */
      }
    }
  }
`;

export const Label3 = () => {
  return (
    <StyledNotificationLabel>
      <p className="tiktok-effect-house">
        ※ Tiktok Effect House 메이커톤 전용페이지(온라인)
      </p>
      <p className="text-wrapper">
        {" "}
        {/* 변경 */}
        학회 홈페이지 진행행사 안내페이지(QR 삽입 - 지원하러가기)
      </p>
      <p className="text-wrapper">
        {" "}
        {/* 변경 */}
        학교, 학과, 이름, 연락처, 이메일, 틱톡 아이디 필수, 정보 동의 필요
      </p>
    </StyledNotificationLabel>
  );
};

export default Label3;
