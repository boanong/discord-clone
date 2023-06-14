"use client";
import React, { useState } from "react";
import { LoginMain } from "@/app/Components/Organisms/LoginMain";
import signbg from "../../../Assets/Images/discordloginbg.jpeg";
import Signup from "@/app/Components/SignUpForm/SignUp";

type Props = {};

function SignUp({}: Props) {
  return (
    <LoginMain img={signbg}>
      <Signup />
    </LoginMain>
  );
}

export default SignUp;
