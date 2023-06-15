import styled from '@emotion/styled'
// import logbg from "../../../Assets/Images/discordloginbg.jpeg";

interface StyledProps {
  img: any;
}

export const LoginMain = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: fit-content;
  min-height: 100vh;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  @media only screen and (max-width: 786px) {
    background-color: #313338;
  }
`;