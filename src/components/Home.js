// React Imports
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
// Image Imports
import vegzelmaImage from "../assets/img/vacizuma.png";
import yuflymaImage from "../assets/img/yuflyma-logo.png";
import zymfentraImage from "../assets/img/Zymfentra-logo.png";

const Home = () => {
  return (
    <section className="home">
      <Container>
        <div className="home-text next">
          <h1>By your side, every step of the way</h1>
          <div className="home-text-wrap">
            <p>
              Please select which product you wish to Enroll in Financial
              Support
            </p>
            <div className="home-action">
              <Link to="/entry/vegzelma">
                <img src={vegzelmaImage} alt="" />
                <span>For more information, click here</span>
              </Link>
              <Link to="/entry/yuflyma">
                <img src={yuflymaImage} alt="" />
                <span>For more information, click here</span>
              </Link>
              <Link to="/entry/zymfentra">
                <img src={zymfentraImage} alt="" />
                <span>For more information, click here</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
