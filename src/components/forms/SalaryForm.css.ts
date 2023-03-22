import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FormContentWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;
export const FormRow = styled.div<{ width: string }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media ${(props) => props.theme.device.md} {
    width: ${(props) => props.width || "30%"};
  }
  label {
    font-size: 16px;
  }
`;
export const FormButton = styled.button`
  height: 48px;
  background-color: #81c784;
  border: none;
  color: white;
  font-weight: bold;
  letter-spacing: 1.2px;
  font-size: 1.1rem;
  cursor: pointer;
`;
