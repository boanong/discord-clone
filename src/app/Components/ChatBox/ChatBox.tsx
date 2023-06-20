import { db } from "@/firebase/config";
import {
  query,
  collection,
  orderBy,
  limit,
  onSnapshot,
} from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import Message from "../Message/Message";
import "./ChatBox.css";

function ChatBox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages: any = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    </main>
  );
}

export default ChatBox;
