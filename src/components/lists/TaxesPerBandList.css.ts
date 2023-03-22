import styled from "styled-components";

export const ListRowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  padding: 5px;
  @media ${(props) => props.theme.device.md} {
    padding: 0 20px;
    &:hover{
      background-color: #F0F0F0;
    }
  }
  
`;

export const ListRowColumn = styled.div`
  width: 25%;
  &:nth-child(2) {
    width: 45%;
  }
  @media ${(props) => props.theme.device.md} {
    width: 23%;
    &:nth-child(2) {
      width: 43%;
    }
    
  }
`;
