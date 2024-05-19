import React, { useEffect, useState } from "react";
import styled from "styled-components";

function JoinButton({ selectedButton, selectedRadio }) {
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    if (selectedButton === "서울" && selectedRadio === "Team") {
      setRedirectUrl(
        "https://docs.google.com/forms/d/1nCTw4xQaW7Z3svAMFR5m3ek54dQHR2aktn5GI25tJsk/viewform?edit_requested=true"
      );
    } else if (selectedButton === "대전" && selectedRadio === "Team") {
      setRedirectUrl(
        "https://docs.google.com/forms/d/1_wNZfRHhcUVeJB_YLILwJ1q5lPlHftNmvqRysw56SB4/viewform?edit_requested=true"
      );
    } else if (selectedButton === "광주" && selectedRadio === "Team") {
      setRedirectUrl(
        "https://docs.google.com/forms/d/17Y29gQ994vg0S50TSKkgKWuG1PVoKNQv3-5e1B1Rp4c/viewform?edit_requested=true"
      );
    }
  }, [selectedButton, selectedRadio]);

  return (
    <CenterContainer>
      <StyledLink href={redirectUrl} target="_blank" rel="noopener noreferrer">
        <StyledBox>
          <div className="rectangle">
            <StyledLabel>지원하기</StyledLabel>
          </div>
        </StyledBox>
      </StyledLink>
    </CenterContainer>
  );
}

export default JoinButton;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 150px;

  @media (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    margin-top: 50px;
    margin-bottom: 50px;
  }
`;

const StyledLabel = styled.div`
  color: #ffffff;
  font-family: "Inter-Bold", Helvetica;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 15px;
  }
`;

const StyledBox = styled.div`
  height: 108px;
  width: 408px;
  position: relative;
  transition: all 0.3s ease;

  & .rectangle {
    background: linear-gradient(
      240deg,
      rgb(37, 244, 238) 0%,
      rgb(254, 44, 85) 100%
    );
    border-radius: 20px;
    height: 72px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    height: 90px;
    width: 350px;

    & .rectangle {
      height: 90px;
      width: 350px;
    }
  }

  @media (max-width: 480px) {
    height: 72px;
    width: 300px;

    & .rectangle {
      height: 72px;
      width: 300px;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;
