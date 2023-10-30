import React from "react";
import Manone from "../images/1.jpg";
import Mantwo from "../images/2.jpg";
import Manthree from "../images/3.jpg";
import LeftArrow from "../assets/asset13.svg";
import Chat from "../assets/asset12.svg";
import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="support">
      <div className="group-nav">
        <p className="treek">Treekle Community</p>
        <div className="groupImgs">
          <img src={Manone} alt="" className="groupImg" />
          <img src={Mantwo} alt="" className="groupImg" />
          <img src={Manthree} alt="" className="groupImg" />
        </div>
      </div>
      <div className="hello">
        <p className="held">Hello DeAndre</p>
        <p className="how">How can we help you?</p>
      </div>
      <div className="overmess">
        <div className="heme">
          <div className="mess">
            <p>Messages</p>
            <img src={Chat} alt="" className="supportImg" />
          </div>
          <div className="help">
            <Link to="/customer">
              <p>Help(Live Chat Support)</p>
            </Link>
            <p className="quest">?</p>
          </div>
        </div>
        <div className="intel">
          <div>
            <p>Send us a message</p>
            <p className="message-p">We will be back online in 1hour</p>
          </div>
          <img src={LeftArrow} alt="" className="supportImg" />
        </div>
        <div className="intel">
          <div>
            <p>What is Treekle KEEP?</p>
            <p className="message-p">Treekle KEEP stands for Knowledge.</p>
          </div>
          <img src={LeftArrow} alt="" className="supportImg" />
        </div>
        <div className="intel">
          <div>
            <p>How can I earn with Treekle?</p>
            <p className="message-p">
              Refer and invite your family and friends.
            </p>
          </div>
          <img src={LeftArrow} alt="" className="supportImg" />
        </div>
      </div>

      <div>
        <Link to="/dashboard" className="back">
          Back
        </Link>
      </div>
    </div>
  );
};

export default Support;
