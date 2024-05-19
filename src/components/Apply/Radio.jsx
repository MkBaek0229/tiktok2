import { useContext } from "react";
import { RadioContext } from "../Apply/layout/Contents";
import styled from "styled-components";

function Radio({ children, value, name }) {
  const { selectedRadio, handleRadioChange } = useContext(RadioContext);

  return (
    <Container>
      <StyledRadio
        type="radio"
        value={value}
        name={name}
        checked={selectedRadio === value}
        onChange={() => handleRadioChange(value)}
      />
      <StyledLabel>
        <div className="text-wrapper">{children}</div>
      </StyledLabel>
    </Container>
  );
}

export default Radio;

const Container = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledRadio = styled.input`
  position: relative;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #fe2c55;
  background-color: black;

  &:checked {
    background-color: white;
    border-color: #fe2c55;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fe2c55;
    border: 4px solid black;
  }

  @media (max-width: 768px) {
    position: relative;
    appearance: none;
    width: 40px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #fe2c55;
    background-color: black;

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fe2c55;
      border: 7px solid black;
    }
  }

  @media (max-width: 425px) {
    position: relative;
    appearance: none;
    width: 20px;
    height: 15px;

    border-radius: 50%;
    border: 2px solid #fe2c55;
    background-color: black;

    &:checked::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fe2c55;
      border: 1px solid black;
    }
  }
`;
const StyledLabel = styled.div`
  height: 24px;
  width: 90px;
  margin-top: 2px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  & .text-wrapper {
    color: #ffffffab;
    font-family: "Inter-SemiBold", Helvetica;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;
