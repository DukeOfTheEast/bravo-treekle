import React from "react";
import "../../src/App.css";
import Andre from "../images/1.jpg";
import Alert from "../assets/asset1.svg";
import { Link } from "react-router-dom";
import Airtime from "../assets/asset2.svg";
import Data from "../assets/asset3.svg";
import Electricity from "../assets/asset4.svg";
import Advance from "../assets/asset7.svg";
import Cable from "../assets/asset6.svg";
import Treekle from "../assets/asset8.svg";
import One from "../images/Asset 16.png";
import Two from "../images/Asset 17.png";
import Three from "../images/Asset 18.png";
import Invite from "../assets/asset10.svg";
import Home from "../images/Asset 22.png";
import Chat from "../assets/asset12.svg";
import Reward from "../images/Asset 23.png";
import More from "../images/Asset 23.png";
import Me from "../assets/asset15.svg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash-top">
        <div className="dashtop1">
          <img src={Andre} alt="" className="andre" />
          <div>
            <p className="well">Welcome</p>
            <p>DeAndre</p>
          </div>
        </div>
        <img src={Alert} alt="" className="alert" />
      </div>

      <div className="over-balance">
        <div className="tot-tra">
          <p>Total Available Balance</p>
          <Link to="/history" className="history">
            Transaction History
          </Link>
        </div>
        <h3 className="money">N257,940</h3>
        <div className="stars">
          <div className="star1">
            <p>*************</p>
            <p>Commission Bal</p>
          </div>
          <div className="out-bal">
            <div>
              <p>*************</p>
              <p>Outstanding Bal</p>
            </div>
            <p className="arrow">&raquo;</p>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="features-unique">
          <img src={Airtime} alt="" className="features-img" />
          <p className="features-text">Airtime</p>
        </div>
        <div className="features-unique">
          <img src={Data} alt="" className="features-img" />
          <p className="features-text">Data</p>
        </div>
        <div className="features-unique">
          <img src={Electricity} alt="" className="features-img" />
          <p className="features-text">Electricity</p>
        </div>
        <div className="features-unique">
          <img src={Advance} alt="" className="features-img" />
          <p className="features-text">Advance</p>
        </div>
        <div className="features-unique">
          <img src={Cable} alt="" className="features-img" />
          <p className="features-text">Cable</p>
        </div>
        <div className="features-unique">
          <img src={Treekle} alt="" className="features-img" />
          <p className="features-text">Treekle KEEP</p>
        </div>
      </div>

      <div className="bottom-img">
        <img src={Three} alt="" className="bottom1" />
        <img src={One} alt="" className="bottom2" />
        <img src={Two} alt="" className="bottom3" />
      </div>

      <div className="invite">
        <img src={Invite} alt="" className="invite-img" />
        <div>
          <p className="tree2">Invite Treekle/Treeklite and Earn</p>
          <p className="earn">Earn commissions and badges per invite</p>
        </div>
      </div>

      <div className="nav">
        <div className="nav-items">
          <img src={Home} alt="" className="navImg" />
          <p className="nav-p">Home</p>
        </div>
        <div className="nav-items">
          <img src={Chat} alt="" className="navImg" />
          <p className="nav-p">Chat</p>
        </div>
        <div className="nav-items">
          <Link to="/rewards" className="nav-items">
            <img src={Reward} alt="" className="navImg" />
            <p className="nav-p">Reward</p>
          </Link>
        </div>
        <div className="nav-items">
          <img src={More} alt="" className="navImg" />
          <p className="nav-p">More</p>
        </div>
        <div className="nav-items">
          <img src={Me} alt="" className="navImg" />
          <p className="nav-p">Me</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
