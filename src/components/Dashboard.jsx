import React from "react";
import "../../src/App.css";
import Andre from "../images/1.jpg";
import Alert from "../assets/asset1.svg";

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
          <p>Transaction History</p>
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
    </div>
  );
};

export default Dashboard;
