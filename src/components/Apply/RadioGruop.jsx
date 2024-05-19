import { RadioContext } from ".././Apply/layout/Contents";
import styled from "styled-components";

function RadioGroup({ label, children }) {
  return (
    <Fieldset>
      <legend>{label}</legend>
      {children}
    </Fieldset>
  );
}

export default RadioGroup;

const Fieldset = styled.fieldset`
  display: flex;
  justify-content: center;
  gap: 10px;
  border: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;
