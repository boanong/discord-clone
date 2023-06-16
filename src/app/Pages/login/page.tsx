"use client";
import React from "react";
import { LoginMain } from "@/app/Components/Organisms/LoginMain";
import Loginform from "@/app/Components/LogForm/loginform";


type Props = {};

function Login({}: Props) {
  return (
    <LoginMain className="signlog-main">
      <Loginform />
    </LoginMain>
  );
}

export default Login;
