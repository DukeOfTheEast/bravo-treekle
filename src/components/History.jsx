import React from "react";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/asset13.svg";
import Search from "../assets/asset1.svg";

const History = () => {
  const transactions = [
    {
      type: "Data",
      number: "08143564524",
      amount: "N10,890",
    },
    {
      type: "Airtime",
      number: "08143564524",
      amount: "N5,366",
    },
    {
      type: "Data",
      number: "08147864524",
      amount: "N9,500",
    },
    {
      type: "Data",
      number: "08143564444",
      amount: "N1,890",
    },
    {
      type: "Data",
      number: "08143564524",
      amount: "N10,890",
    },
    {
      type: "Data",
      number: "08143564524",
      amount: "N10,890",
    },
    {
      type: "Airtime",
      number: "08143564524",
      amount: "N2,890",
    },
    {
      type: "Data",
      number: "08143564524",
      amount: "N3,560",
    },
    {
      type: "Data",
      number: "08143564524",
      amount: "N10,890",
    },
    {
      type: "Data",
      number: "08143564524",
      amount: "N12,890",
    },
  ];

  return (
    <div className="txn">
      <div className="txn-nav">
        <Link to="/dashboard">
          <img src={LeftArrow} alt="" className="txn-arrow" />
        </Link>
        <p>Transaction History</p>
        <div></div>
      </div>

      <div className="txn-search">
        <img src={Search} alt="" className="search-img" />
        <input
          type="text"
          placeholder="Search by Phone Number"
          className="search-input"
        />
      </div>

      <div className="mainTxn">
        {transactions.map((txn) => (
          <div className="txnEach">
            <p>{txn.type}</p>
            <p>{txn.number}</p>
            <p>{txn.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
