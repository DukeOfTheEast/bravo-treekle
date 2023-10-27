import React from "react";
import "../../src/App.css";

const ChatMessage = ({ message }) => {
  return <div className="chat-message">{message}</div>;
};

export default ChatMessage;
