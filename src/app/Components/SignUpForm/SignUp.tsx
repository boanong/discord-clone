/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import {
  FormHeading,
  FormInput,
  FormLabel,
  FormP2,
  LogSubmitBtn,
  SignupSelect,
  TermsSpan,
} from "../Atoms/FormAtoms";
import { db, fileStore } from "@/firebase/config";
import { useRouter } from "next/navigation";
import {
  CheckBox,
  CheckBoxHolder,
  InputHolder,
  SelectHolder,
  SelectHolderMain,
} from "../Molecules/FormMolecules";
import { SignUpForm } from "../Organisms/SignupForm";
import { getDays, getYears, monthNames } from "@/services/utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "@firebase/firestore";
// import { auth } from "@/firebase/config";
// import { firestore } from

interface SignUpFormData {
  email: string;
  userName: string;
  password: string;
  month: string;
  day: string;
  year: string;
}

// type dateType = { month: string; day: string; year: string };

type Props = {};

function Signup({}: Props) {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    userName: "",
    password: "",
    month: "",
    day: "",
    year: "",
  });
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setFormData((prev: any) => ({
      ...prev,
      month: "",
      day: "1",
      year: "",
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      ).then(async ({ user: { uid } }) => {
        const displayName = formData.userName;
        const dateOfBirth = [formData.day, formData.month, formData.year].join(
          "/"
        );
        const newUser = { id: uid, displayName, dateOfBirth };
        const userCollectionRef = collection(db, "users");
        console.log(newUser);

        await setDoc(doc(userCollectionRef, `/${uid}`), newUser);
      });
      router.push("/Pages/channels");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <FormHeading>Create an Account.</FormHeading>
      <InputHolder>
        <FormLabel>Email</FormLabel>
        <FormInput
          type="email"
          name="email"
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
        <FormLabel>UserName</FormLabel>
        <FormInput
          type="text"
          name="userName"
          onChange={(e: any) =>
            setFormData({
              ...formData,
              userName: e.target.value,
            })
          }
          value={formData.userName}
          required
        />
      </InputHolder>
      <InputHolder>
        <FormLabel>Password</FormLabel>
        <FormInput
          type="password"
          name="password"
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
      <SelectHolderMain>
        <SelectHolder>
          <FormLabel>Month</FormLabel>
          <SignupSelect
            name="month"
            onChange={({ target: { value } }) =>
              setFormData((prev: SignUpFormData) => ({ ...prev, month: value }))
            }
          >
            <>
              <option value="" />
              {monthNames.map((month) => (
                <option value={month} id={month} key={month}>
                  {month}
                </option>
              ))}
            </>
          </SignupSelect>
        </SelectHolder>
        <SelectHolder>
          <FormLabel>Day</FormLabel>
          <SignupSelect
            name="day"
            onChange={({ target: { value } }) =>
              setFormData((prev: SignUpFormData) => ({ ...prev, day: value }))
            }
          >
            <>
              <option value="" />
              {getDays(formData.month).map((day) => (
                <option value={day} id={day} key={day}>
                  {day}
                </option>
              ))}
            </>
          </SignupSelect>
        </SelectHolder>
        <SelectHolder>
          <FormLabel>Year</FormLabel>
          <SignupSelect
            name="year"
            onChange={({ target: { value } }) =>
              setFormData((prev: SignUpFormData) => ({ ...prev, year: value }))
            }
          >
            <>
              <option value="" />
              {getYears().map((yr) => (
                <option value={yr} id={yr} key={yr}>
                  {yr}
                </option>
              ))}
            </>
          </SignupSelect>
        </SelectHolder>
      </SelectHolderMain>
      <CheckBoxHolder>
        <CheckBox type="checkbox" />
        <TermsSpan>
          I have read and agree to Discord's
          <a className="terms">Terms of Service</a> and{" "}
          <a className="terms">Privacy Policy</a>
        </TermsSpan>
      </CheckBoxHolder>
      <CheckBoxHolder>
        <CheckBox type="checkbox" />
        <TermsSpan>
          <FormP2>
            (Optional) Its okay to send me emails on Discord updates, tips and
            special offers. You can opt out anytime.
          </FormP2>
        </TermsSpan>
      </CheckBoxHolder>
      <LogSubmitBtn type="submit">Continue</LogSubmitBtn>
    </SignUpForm>
  );
}

export default Signup;
