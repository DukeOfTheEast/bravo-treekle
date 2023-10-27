import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/asset13.svg";
import Andre from "../images/1.jpg";
import Champ from "../assets/asset17.svg";
import Rise from "../assets/asset21.svg";
import Stepper from "../assets/asset18.svg";
import Steady from "../assets/asset20.svg";
import Benevolent from "../assets/asset21.svg";
import The from "../assets/asset16.svg";
import Star from "../assets/asset19.svg";
import Streak from "../assets/asset19.svg";
import Innovator from "../assets/asset19.svg";

const Rewards = () => {
  return (
    <div className="rewards">
      <div className="reward-nav">
        <Link to="/dashboard">
          <img src={LeftArrow} alt="" className="reward-arrow" />
        </Link>
        <p className="rew">Rewards</p>
        <p className="question">?</p>
      </div>

      <div className="badge">
        <div className="chan">
          <img src={Champ} alt="" className="champ" />
          <img src={Andre} alt="" className="rewards-andre" />
        </div>
        <p>74/500</p>
        <p className="badge-unlock">Badges Unlocked</p>
      </div>

      <div className="badges">
        <div>
          <img src={Rise} alt="" className="example-badge" />
          <p className="badge-text">Rising Star</p>
        </div>
        <div>
          <img src={Stepper} alt="" className="example-badge" />
          <p className="badge-text">The Stepper</p>
        </div>
        <div>
          <img src={Champ} alt="" className="example-badge" />
          <p className="badge-text">Penta Champ</p>
        </div>
        <div>
          <img src={Steady} alt="" className="example-badge" />
          <p className="badge-text">Steady Shark</p>
        </div>
        <div>
          <img src={Benevolent} alt="" className="example-badge" />
          <p className="badge-text">The Benevolent</p>
        </div>
        <div>
          <img src={The} alt="" className="example-badge" />
          <p className="badge-text">The Halfwitter</p>
        </div>
        <div>
          <img src={Star} alt="" className="example-badge" />
          <p className="badge-text">Rising Star</p>
        </div>
        <div>
          <img src={Streak} alt="" className="example-badge" />
          <p className="badge-text">Star Streak</p>
        </div>
        <div>
          <img src={Innovator} alt="" className="example-badge" />
          <p className="badge-text">The Innovator</p>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
