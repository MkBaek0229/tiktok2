import React, { useState, createContext } from "react";
import styled from "styled-components";
import icon from "../../../../images/Apply/caution.png";
import BackIcon from "../../../../images/Apply/ball.svg";

import Radio from "../Radio";
import RadioGroup from "../RadioGruop";
import TestBox from "../../Box/StyleBox2_2";
import JoinButton from "../JoinButton";
import ResponsiveLocationButton from "../LocationButton";

export const RadioContext = createContext({});

function Contents() {
  const [selectedButton, setSelectedButton] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    console.log(buttonName);
  };

  const handleRadioChange = (value) => {
    setSelectedRadio(value);
    console.log(value);
  };

  const radioContextValue = { selectedRadio, handleRadioChange };

  return (
    <>
      <Section>
        <div>
          <Dot src={BackIcon} alt="DotIcon" />
          <TitleContainer>
            <TitleLabel>
              <div className="text-wrapper">등록기간</div>
            </TitleLabel>
          </TitleContainer>
        </div>

        <SubContainer>
          <SubLabel>
            <div className="text-wrapper">5월 6일(월)부터 6월 16일(일)까지</div>
          </SubLabel>
        </SubContainer>
      </Section>

      <Section>
        <div>
          <Dot src={BackIcon} alt="DotIcon" />
          <TitleContainer>
            <TitleLabel>
              <div className="text-wrapper">대상</div>
            </TitleLabel>
          </TitleContainer>
        </div>
        <SubContainer>
          <SubLabel>
            <div className="text-wrapper">
              한국에 거주하는 분(18세부터 26세까지)
            </div>
          </SubLabel>
        </SubContainer>
      </Section>

      <Section>
        <TitleContainer>
          <div className="location_container">
            <SubSection className="seoul">
              <div className="sub-location_seoul">서울/경기</div>
              <div className="sub-count_seoul">
                선착순 100명(1회차 50명, 2회차, 50명)
              </div>
            </SubSection>
            <SubSection className="daejeon">
              <div className="sub-location">대전</div>
              <div className="sub-count">선착순 50명</div>
            </SubSection>
            <SubSection className="gwangju">
              <div className="sub-location">광주</div>
              <div className="sub-count">선착순 50명</div>
            </SubSection>
            <SubSection className="note">
              <div className="text-wrapper">
                ※ 팀 참가 인원 포함 총 200명 모집
              </div>
            </SubSection>
          </div>
        </TitleContainer>
      </Section>

      <Section>
        <div>
          <Dot src={BackIcon} alt="DotIcon" />
          <TitleContainer>
            <TitleLabel>
              <div className="text-wrapper">참가방법</div>
            </TitleLabel>
          </TitleContainer>
        </div>
        <SubContainer>
          <SubLabel>
            <div className="text-wrapper">
              개인 또는 2인팀(디자이너 1인, 개발자 1인)
            </div>
          </SubLabel>
        </SubContainer>
      </Section>

      <Section>
        <div>
          <Dot src={BackIcon} alt="DotIcon" />
          <TitleContainer>
            <TitleLabel>
              <div className="text-wrapper">신청지역</div>
            </TitleLabel>
          </TitleContainer>
        </div>
        <StyledContainer>
          <StyledBox>
            <ResponsiveLocationButton
              content="서울"
              onClick={() => handleButtonClick("서울")}
              isActive={selectedButton === "서울"}
            />
            <ResponsiveLocationButton
              content="대전"
              onClick={() => handleButtonClick("대전")}
              isActive={selectedButton === "대전"}
            />
            <ResponsiveLocationButton
              content="광주"
              onClick={() => handleButtonClick("광주")}
              isActive={selectedButton === "광주"}
            />{" "}
          </StyledBox>
        </StyledContainer>
      </Section>

      <Section>
        <RadioContext.Provider value={radioContextValue}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <RadioGroup label="참가 유형">
              <Radio name="contact" value="Team">
                팀 참가
              </Radio>
              <Radio name="contact" value="Indv">
                개인 참가
              </Radio>
            </RadioGroup>
            <TestBox />
            <JoinButton
              selectedButton={selectedButton}
              selectedRadio={selectedRadio}
            />
          </form>
        </RadioContext.Provider>
      </Section>
    </>
  );
}

export default Contents;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 39px;
  gap: 10px;
  align-items: center;

  width: 100%;

  overflow: hidden;

  @media (max-width: 425px) {
    margin-bottom: 39px;
  }
`;

const ButtonSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 20px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
  }
`;
const TitleContainer = styled.div`
  display: flex;
  width: 624px;

  align-items: center;
  gap: 10px; /* 타이틀 이미지와 컨텐츠 사이의 간격 조절 */

  /* Extra small devices (폰, 426px 미만) */
  @media (max-width: 426px) {
    height: auto; /* 모바일 화면에서는 높이를 자동으로 조절 */
    width: 170px;
  }

  /* Small devices (폰, 427px 이상) */
  @media (min-width: 427px) and (max-width: 767.98px) {
    width: 340px;
  }

  /* Medium devices (태블릿, 768px 이상) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 460px;
  }
`;

const TitleLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 35px;
    font-weight: 600;

    /* Small devices (폰, 576px 이상) */
    @media (min-width: 576px) and (max-width: 767.98px) {
      font-size: 30px;
    }

    /* Extra small devices (폰, 576px 미만) */
    @media (max-width: 575.98px) {
      font-size: 20px;
    }

    /* Small devices (폰, 576px 이상 768px 미만) */
    @media (min-width: 576px) and (max-width: 767.98px) {
      font-size: 30px;
    }

    /* Medium to large devices (태블릿 및 데스크톱, 768px 이상) */
    @media (min-width: 768px) {
      font-size: 35px;
      }
`;

const SubContainer = styled.div`
  display: flex;
  width: 624px;
  align-items: center;

  /* Extra small devices (폰, 426px 미만) */
  @media (max-width: 426px) {
    height: auto; /* 모바일 화면에서는 높이를 자동으로 조절 */
    width: 170px;
  }

  /* Small devices (폰, 427px 이상) */
  @media (min-width: 427px) and (max-width: 767.98px) {
    width: 300px;
  }

  /* Medium devices (태블릿, 768px 이상) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 460px;
  }

}

`;
const SubLabel = styled.div`
  .text-wrapper {
    color: #ffffff;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 23px;
    font-weight: 600;

    /* Extra small devices (폰, 576px 미만) */
    @media (max-width: 575.98px) {
      font-size: 10px; /* 576px 미만에서 조금 더 작게 설정 */
    }

    /* Small devices (폰, 576px 이상 768px 미만) */
    @media (min-width: 576px) and (max-width: 767.98px) {
      font-size: calc(
        10.35px + (13.8 - 10.35) * ((100vw - 576px) / (768 - 576))
      );
    }

    /* Medium devices (태블릿, 768px 이상 992px 미만) */
    @media (min-width: 768px) and (max-width: 991.98px) {
      font-size: calc(13.8px + (17.8 - 13.8) * ((100vw - 768px) / (991 - 768)));
    }

    /* Large devices (데스크톱, 992px 이상 1280px 미만) */
    @media (min-width: 992px) and (max-width: 1279.98px) {
      font-size: calc(17.8px + (23 - 17.8) * ((100vw - 992px) / (1279 - 992)));
    }

    /* Extra large devices (1280px 이상) */
    @media (min-width: 1280px) {
      font-size: 23px; /* 큰 데스크톱 크기에서 더 크게 설정 */
    }
  }
`;

const SubSection = styled.div`
  margin-bottom: 5px;
  display: flex;
  gap: ${({ className }) =>
    className === "seoul"
      ? "40px"
      : className === "daejeon" || className === "gwangju"
      ? "85px"
      : "10px"};

  @media (max-width: 576px) {
    gap: ${({ className }) =>
      className === "seoul"
        ? "57px"
        : className === "daejeon" || className === "gwangju"
        ? "85px"
        : "10px"};
  }

  /* Small devices (폰, 576px 이상 768px 미만) */
  @media (min-width: 576px) and (max-width: 767.98px) {
    gap: ${({ className }) =>
      className === "seoul"
        ? "50px"
        : className === "daejeon" || className === "gwangju"
        ? "85px"
        : "10px"};
  }

  /* Medium devices (태블릿, 768px 이상 992px 미만) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    gap: ${({ className }) =>
      className === "seoul"
        ? "49px"
        : className === "daejeon" || className === "gwangju"
        ? "85px"
        : "10px"};
  }

  /* Large devices (데스크톱, 992px 이상 1280px 미만) */
  @media (min-width: 992px) and (max-width: 1279.98px) {
    gap: ${({ className }) =>
      className === "seoul"
        ? "45px"
        : className === "daejeon" || className === "gwangju"
        ? "85px"
        : "10px"};
  }

  ${({ className }) =>
    className === "note" &&
    `
      color: #25f4ee;
      font-family: "Inter-Medium", Helvetica;
      font-size: 10px;
      font-weight: 500;
      width: 389px;
      left: 115px;
      position: relative;

    
      /* Extra small devices (폰, 480px 미만) */
      @media (max-width: 479.98px) {
        left: 95px;
      }
  
      /* Small devices (폰, 480px 이상 768px 미만) */
      @media (min-width: 480px) and (max-width: 767.98px) {
        left: 105px;
      }
  
    `}

  .sub-location {
    color: #ffffffad;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;

    /* 425px 이하에서는 폰트 크기를 12px로 설정 */
    @media (max-width: 425px) {
      font-size: 12px;
    }

    /* Extra small devices (폰, 480px 미만) */
    @media (max-width: 479.98px) {
      font-size: 14px; /* 아주 작은 화면에서는 더 작게 설정 */
    }

    /* Small devices (폰, 480px 이상 768px 미만) */
    @media (min-width: 480px) and (max-width: 767.98px) {
      font-size: 16px; /* 작은 디바이스에서는 적당한 크기로 설정 */
    }

    /* Medium devices (태블릿, 768px 이상 992px 미만) */
    @media (min-width: 768px) and (max-width: 991.98px) {
      font-size: 18px; /* 태블릿 크기에서는 약간 더 크게 설정 */
    }

    /* Large devices (데스크톱, 992px 이상 1280px 미만) */
    @media (min-width: 992px) and (max-width: 1279.98px) {
      font-size: 20px; /* 데스크톱 크기에서는 기본 크기 유지 */
    }

    /* Extra large devices (1280px 이상) */
    @media (min-width: 1280px) {
      font-size: 22px; /* 큰 데스크톱에서는 약간 더 크게 설정 */
    }
  }

  .sub-location_seoul {
    color: #ffffffad;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;

    /* 425px 이하에서는 폰트 크기를 12px로 설정 */
    @media (max-width: 425px) {
      font-size: 12px;
    }

    /* Extra small devices (폰, 480px 미만) */
    @media (max-width: 479.98px) {
      font-size: 14px; /* 아주 작은 화면에서는 더 작게 설정 */
    }

    /* Small devices (폰, 480px 이상 768px 미만) */
    @media (min-width: 480px) and (max-width: 767.98px) {
      font-size: 16px; /* 작은 디바이스에서는 적당한 크기로 설정 */
    }

    /* Medium devices (태블릿, 768px 이상 992px 미만) */
    @media (min-width: 768px) and (max-width: 991.98px) {
      font-size: 18px; /* 태블릿 크기에서는 약간 더 크게 설정 */
    }

    /* Large devices (데스크톱, 992px 이상 1280px 미만) */
    @media (min-width: 992px) and (max-width: 1279.98px) {
      font-size: 20px; /* 데스크톱 크기에서는 기본 크기 유지 */
    }

    /* Extra large devices (1280px 이상) */
    @media (min-width: 1280px) {
      font-size: 22px; /* 큰 데스크톱에서는 약간 더 크게 설정 */
    }
  }

  .sub-count_seoul {
    color: #ffffffad;
    font-family: "Inter-Medium", Helvetica;
    font-size: 18px;
    font-weight: 500;

    /* Extra small devices (폰, 480px 미만) */
    @media (max-width: 479.98px) {
      font-size: 12px; /* 아주 작은 화면에서는 더 작게 설정 */
      width: 65px;
    }

    /* Small devices (폰, 480px 이상 768px 미만) */
    @media (min-width: 480px) and (max-width: 767.98px) {
      font-size: 14px; /* 작은 디바이스에서는 적당한 크기로 설정 */
    }

    /* Medium devices (태블릿, 768px 이상 992px 미만) */
    @media (min-width: 768px) and (max-width: 991.98px) {
      font-size: 16px; /* 태블릿 크기에서는 약간 더 크게 설정 */
    }

    /* Large devices (데스크톱, 992px 이상 1280px 미만) */
    @media (min-width: 992px) and (max-width: 1279.98px) {
      font-size: 18px; /* 데스크톱 크기에서는 기본 크기 유지 */
    }

    /* Extra large devices (1280px 이상) */
    @media (min-width: 1280px) {
      font-size: 20px; /* 큰 데스크톱에서는 약간 더 크게 설정 */
    }

    /* 425px 이하에서는 텍스트를 두 줄로 나누기 */
    @media (max-width: 425px) {
      display: block;
      white-space: pre-line; /* 줄 바꿈을 적용 */
    }
  }
  .sub-count {
    color: #ffffffad;
    font-family: "Inter-Medium", Helvetica;
    font-size: 18px;
    font-weight: 500;

    /* Extra small devices (폰, 480px 미만) */
    @media (max-width: 479.98px) {
      font-size: 12px; /* 아주 작은 화면에서는 더 작게 설정 */
    }

    /* Small devices (폰, 480px 이상 768px 미만) */
    @media (min-width: 480px) and (max-width: 767.98px) {
      font-size: 14px; /* 작은 디바이스에서는 적당한 크기로 설정 */
    }

    /* Medium devices (태블릿, 768px 이상 992px 미만) */
    @media (min-width: 768px) and (max-width: 991.98px) {
      font-size: 16px; /* 태블릿 크기에서는 약간 더 크게 설정 */
    }

    /* Large devices (데스크톱, 992px 이상 1280px 미만) */
    @media (min-width: 992px) and (max-width: 1279.98px) {
      font-size: 18px; /* 데스크톱 크기에서는 기본 크기 유지 */
    }

    /* Extra large devices (1280px 이상) */
    @media (min-width: 1280px) {
      font-size: 20px; /* 큰 데스크톱에서는 약간 더 크게 설정 */
    }

    /* 425px 이하에서는 텍스트를 두 줄로 나누기 */
    @media (max-width: 425px) {
      display: block;
      white-space: pre-line; /* 줄 바꿈을 적용 */
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;

 

  .default {
    background-color: black;
    border: 2px solid #fe2c55;
    border-radius: 10px;
    height: 69px;
    width: 176px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      color: #ffffff;
      font-family: "Inter-SemiBold", Helvetica;
      font-size: 25px;
      font-weight: 600;
    }

    }
  }

  .choice {
    background-color: #fe2c55;
    border: 2px solid #fe2c55;
    border-radius: 10px;
    height: 69px;
    width: 176px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      color: #ffffff;
      font-family: "Inter-SemiBold", Helvetica;
      font-size: 25px;
      font-weight: 600;
    }


    
  }
`;

const StyledBox = styled.div`
  width: 573px;
  display: flex;
  flex-direction: row;
  gap: 30px;
 
  @media (max-width: 768px) {
    width: 473px;
  }
  
  @media (max-width: 425px) {
    width: 273px;
  }
}
`;

const Dot = styled.img`
  width: 26px;
  height: 26px;
  position: relative;
  top: 10px;
  right: 20px;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    right: 15px;
    top: 5px;
  }
`;
