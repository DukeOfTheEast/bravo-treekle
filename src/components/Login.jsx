import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TreekleLogo from "../assets/asset23.svg";
import "../../src/App.css";

const Login = () => {
  const navigate = useNavigate();
  const inputs = Array.from({ length: 4 }, () => useRef(null));
  const [values, setValues] = useState(["", "", "", ""]);

  const handleInputChange = (index, e) => {
    const newValues = [...values];
    newValues[index] = e.target.value;
    setValues(newValues);

    if (e.target.value.length >= e.target.maxLength) {
      const allInputsFilled = newValues.every((value) => value.length >= 1);
      if (allInputsFilled) {
        navigate("/dashboard");
      }
      const nextIndex = index + 1;
      if (nextIndex < inputs.length && inputs[nextIndex].current) {
        inputs[nextIndex].current.focus();
      }
    } else if (e.target.value.length === 0 && e.target.selectionStart === 0) {
      const prevIndex = index - 1;
      if (prevIndex >= 0 && inputs[prevIndex].current) {
        inputs[prevIndex].current.focus();
      }
    } else {
      const currentCursorPosition = e.target.selectionStart;
      if (currentCursorPosition === 0) {
        const prevIndex = index - 1;
        if (prevIndex >= 0 && inputs[prevIndex].current) {
          inputs[prevIndex].current.focus();
        }
      } else if (currentCursorPosition === e.target.value.length) {
        const nextIndex = index + 1;
        if (nextIndex < inputs.length && inputs[nextIndex].current) {
          inputs[nextIndex].current.focus();
        }
      }
    }
  };

  return (
    <div className="login">
      <div className="mainLogo">
        <img src={TreekleLogo} alt="" className="logo" />
        <h1>TreeKle</h1>
      </div>
      <p className="welcome">Welcome back, DeAndre</p>
      <p className="enter">Enter your 4 digit PIN to login</p>
      <div className="pin">
        {inputs.map((inputRef, index) => (
          <input
            key={index}
            ref={inputRef}
            className="pinInput"
            type="text"
            maxLength="1"
            onChange={(e) => handleInputChange(index, e)}
          />
        ))}
      </div>
      <p>
        Not Treekler? <span className="switch">Switch Account</span>
      </p>
      <p className="forgot">Forgot PIN</p>
    </div>
  );
};

export default Login;
