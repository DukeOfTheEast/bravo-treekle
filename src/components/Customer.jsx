// ChatApp.js
import React, { useState } from "react";
import ChatMessage from "../components/CustomerMessage";
import "../../src/App.css";
import LeftArrow from "../assets/asset13.svg";
import { Link } from "react-router-dom";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-app">
      <div className="chat-nav">
        <Link to="/support">
          <img src={LeftArrow} alt="" className="chat-arrow" />
        </Link>
        <p>Live Chat Support</p>
        <div></div>
      </div>
      <div className="chat-container">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="chat-input"
          placeholder="Send a message"
        />
        <button onClick={handleSendMessage} className="chat-btn">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
