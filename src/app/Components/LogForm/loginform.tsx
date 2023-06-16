import React, { useState } from "react";
import { LogForm } from "../Organisms/LoginForm";
import { FormLeft, FormRight, InputHolder } from "../Molecules/FormMolecules";
import { Span } from "../Atoms/Span";
import {
  FormHeading,
  FormLabel,
  FormP,
  LogSubmitBtn,
  FormP1,
  SampleQrCode,
  FormP2,
  FormInput,
} from "../Atoms/FormAtoms";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

function Loginform({ }: Props) {
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      router.push("/Pages/channels");
      console.log(formData);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <LogForm onSubmit={handleLogin}>
      <FormLeft>
        <FormHeading>Welcome</FormHeading>
        <InputHolder>
          <FormLabel>Email or Phonenumber:</FormLabel>
          <FormInput
            type="email"
            onChange={(e: any) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            value={formData.email}
            required
          />
        </InputHolder>
        <InputHolder>
          <FormLabel>Password:</FormLabel>
          <FormInput
            type="password"
            onChange={(e: any) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
            value={formData.password}
            required
          />
        </InputHolder>
        <FormP>Forgot your password?</FormP>
        <LogSubmitBtn type="submit">Login</LogSubmitBtn>
        <Span>
          <FormP1>Need an account?</FormP1>
          <Link href="/pages/signup">
            <FormP>Register</FormP>
          </Link>
        </Span>
      </FormLeft>
      <FormRight>
        <SampleQrCode />
        <FormHeading>Login with QR code</FormHeading>
        <FormP2>
          Scan this with the discord mobile app to login instalntly
        </FormP2>
      </FormRight>
    </LogForm>
  );
}

export default Loginform;
