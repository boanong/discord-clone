/* eslint-disable @next/next/no-img-element */
import React from "react";
import AuthGaurd from "@/hoc/AuthGuard";
import "./Message.css";

type Props = {
  userData: any;
  message: any;
};

function Message({ userData, message }: Props) {
  return (
    <div
      className={`chat-bubble ${message.uid === userData.uid ? "right" : ""}`}
    >
      <img
        className="chat-bubble__left"
        src="https://www.freeiconspng.com/uploads/emoji-face-png-27.png"
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
      </div>
    </div>
  );
}
export default AuthGaurd(Message);
