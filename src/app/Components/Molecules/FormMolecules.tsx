import styled from "@emotion/styled";

export const FormRight = styled.div`
  width: 35%;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 15px;
  margin: auto;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const SelectHolderMain = styled.div`
  width: 80%;
  max-width: 414px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  @media screen {
    width: 100%;
    max-width: 416px;
  }
`;

export const SelectHolder = styled.div`
  width: 30%;
  max-width: 146px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const FormLeft = styled.div`
  width: 92vw;
  max-width: 414px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: flex-start;
  gap: 10px;
  text-align: left;
  @media only screen and (min-width: 769px) {
    width: 60%;
    max-width: 416px;
    gap: 25px;
    padding: 0;
  }
`;

export const InputHolder = styled.div`
  width: 80%;
  max-width: 414px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: flex-start;
  align-self: center;
  @media screen {
    width: 100%;
    max-width: 416px;
  }
`;

export const CheckBoxHolder = styled.div`
  display: flex;
  gap: 8px;
  align-self: inherit;
  margin: auto;
  width: 70%;
  max-width: 40px;
  @media screen {
    width: 100%;
    max-width: 410px;
  }
`;

export const CheckBox = styled.input`
  border: 1px solid #fafbfc;
  height: 20px;
  width: 20px;
  font-size: 15px;
`;
