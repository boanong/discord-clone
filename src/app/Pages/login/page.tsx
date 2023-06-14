"use client";
import React from "react";
import { LoginMain } from "@/app/Components/Organisms/LoginMain";
import Loginform from "@/app/Components/LogForm/loginform";
import logbg from "../../../Assets/Images/discordloginbg.jpeg";

type Props = {};

function Login({}: Props) {
  return (
    <LoginMain img={logbg}>
      <Loginform />
    </LoginMain>
  );
}

export default Login;
