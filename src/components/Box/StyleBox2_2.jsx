import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Img1 from "../../../images/Dot/1.png";
import Img2 from "../../../images/Dot/2.png";
import Img3 from "../../../images/Dot/3.png";

// 파도타기 애니메이션 정의 (세로로 나타나기)
const waveAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 애니메이션 적용 여부를 동적으로 설정하는 스타일 컴포넌트
const StyledImage = styled.img`
  width: 10px;
  height: 10px;
  margin-top: 10px;
  border-radius: 8px;
  opacity: 0;
  transform: translateY(20px);
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${waveAnimation} 0.5s ease forwards;
      animation-delay: ${props.delay}s;
    `}

  /* 반응형 크기 변경 */
  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }

  @media (max-width: 480px) {
    width: 6px;
    height: 6px;
  }
`;

// 구조 분해 할당을 통해 불필요한 속성을 DOM 요소로 전달하지 않음
const DelayedImage = ({ delay, isVisible, ...rest }) => {
  return <StyledImage delay={delay} isVisible={isVisible} {...rest} />;
};

const Container = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  justify-content: center;
  align-items: center;
  margin-top: 102px;

  /* 반응형 레이아웃 변경 */
  @media (max-width: 768px) {
    margin-top: 100px;
  }

  @media (max-width: 480px) {
    margin-top: 100px;
  }
`;

const TestBox = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Container ref={containerRef}>
      <DelayedImage
        delay={0.1}
        src={Img1}
        alt="Image 1"
        isVisible={isVisible}
      />
      <DelayedImage
        delay={0.3}
        src={Img2}
        alt="Image 2"
        isVisible={isVisible}
      />
      <DelayedImage
        delay={0.5}
        src={Img3}
        alt="Image 3"
        isVisible={isVisible}
      />
    </Container>
  );
};

export default TestBox;
