"use client";
import React, { useState } from "react";
import { LoginMain } from "@/app/Components/Organisms/LoginMain";
import Signup from "@/app/Components/SignUpForm/SignUp";

type Props = {};

function SignUp({}: Props) {
  return (
    <LoginMain className="signlog-main">
      <Signup />
    </LoginMain>
  );
}

export default SignUp;
