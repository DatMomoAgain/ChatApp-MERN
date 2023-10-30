import React from "react";
import { Link } from "react-router-dom";
import bg from "../backgroundnew.jpg";
import "./Homepage.css";

const Home = () => {
  return (
    <body>
      <div className="head">
        <img className="fit" src={bg}/>
        <p className="app-nam">ConnectU</p>
        <p className="tag1">Space for All Your Conversations</p>
        <Link
          to="/signup"
        >
          <div className="btn1">Get Started</div>
        </Link>
        <Link
          to="/login"
        >
          <div className="btn2">Login</div>
        </Link>
      </div>
    </body>
  );
};

export default Home;
