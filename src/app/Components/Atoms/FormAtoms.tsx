import styled from "@emotion/styled";
import { BsQrCode } from "react-icons/bs";

export const FormInput = styled.input`
  width: 92vw;
  max-width: 414px;
  border: 1px solid #000;
  background-color: #1e1f22;
  color: #f2f3f5;
  font-size: 14px;
  padding: 10px;
  border-radius: 5px;
  @media only screen and (min-width: 769px) {
    max-width: 416px;
    width: 100%;
  }
`;

export const SignupSelect = styled.select`
  border: 1px solid #000;
  background-color: #1e1f22;
  width: 100%;
  max-width: 135px;
  padding: 6px 8px;
  @media only screen and (min-width: 768px) {
    max-width: 143px;
  }
`;

// export const SignUpINput = styled.input`
//   width: 92vw;
//   max-width: 414px;
//   border: 1px solid #000;
//   background-color: #1e1f22;
//   color: #f2f3f5;
//   font-size: 14px;
//   padding: 10px;
//   border-radius: 5px;
//   @media only screen and (min-width: 769px) {
//     max-width: 416px;
//     width: 100%;
//   }
// `;

export const FormHeading = styled.h2`
  margin: 0 0 8px;
  font-size: 24px;
  color: #f2f3f5;
  font-weight: 600;
  align-self: center;
`;

export const FormP = styled.p`
  font-size: 14px;
  color: #00a8fc;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TermsP = styled.p`
  width: 100%;
  max-width: 414px;
  font-size: 14px;
  color: #fff;
`;

export const TermsSpan = styled.span`
  width: 100%;
  max-width: 414px;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const FormP1 = styled(FormP)`
  color: #949b84;
  cursor: none;
  @media only screen and (min-width: 768px) {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const FormP2 = styled(FormP)`
  color: #b5bac1;
  font-size: 16px;
  cursor: none;
  @media only screen and (min-width: 768px) {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const FormLabel = styled.label`
  color: #b5bac1;
  font-size: 13px;
  margin: 0 0 8px;
  font-weight: 500;
`;

export const SampleQrCode = styled(BsQrCode)`
  width: 80%;
  max-width: 150px;
  max-height: 150px;
  height: 80%;
  padding: 10px;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  border: none;
  margin-bottom: 15px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogSubmitBtn = styled.button`
  width: 94vw;
  max-width: 414px;
  border: none;
  background-color: #5865f2;
  font-size: 18px;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 16px;
  @media only screen and (min-width: 769px) {
    max-width: 415px;
    width: 100%;
  }
`;
