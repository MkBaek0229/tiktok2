import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 50px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLabel = styled.div`
  color: #ffffff;
  font-family: "Inter-Bold", Helvetica;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 15px;
  }
`;

const StyledBox = styled.div`
  height: 200px;
  width: 408px;
  position: relative;
  transition: all 0.3s ease;

  & .rectangle {
    background: linear-gradient(
      240deg,
      rgb(37, 244, 238) 0%,
      rgb(254, 44, 85) 100%
    );
    border-radius: 15px;
    height: 72px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover .rectangle {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
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

export const Question3 = () => {
  return (
    <CenterContainer>
      <StyledLink to="/MainSend">
        <StyledBox>
          <div className="rectangle">
            <StyledLabel>문의하기</StyledLabel>
          </div>
        </StyledBox>
      </StyledLink>
    </CenterContainer>
  );
};

export default Question3;
