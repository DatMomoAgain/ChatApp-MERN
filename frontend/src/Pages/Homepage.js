import React from "react";
import { Link } from "react-router-dom";
import bg from "./bg.jpg";
import "./Homepage.css";

const Home = () => {
  return (
    <body>
      <div className="head">
        <img className="fit" src={bg} alt="" />
        <p className="app-name">Social-Chat</p>
        <p className="tag1">Connect With Friends From All Over The World</p>
        <Link
          to="/signup"
        >
          <div className="btn1"><span className="btn1-text">Get Started</span></div>
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
