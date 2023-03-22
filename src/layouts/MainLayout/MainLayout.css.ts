import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100vh - 6rem);
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  @media ${(props) => props.theme.device.md} {
    width: 65%;
    max-width: 600px;
    padding: 40px;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
  }
`;
