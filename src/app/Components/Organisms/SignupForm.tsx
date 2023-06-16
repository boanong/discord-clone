import styled from "@emotion/styled";

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  padding: 0 0 10px;
  background-color: #313338;
  align-items: center;
  color: #fff;
  @media only screen and (min-width: 768px) {
    padding: 30px;
    gap: 20px;
    max-width: 480px;
    border-radius: 10px;
  }
`;
