import React from "react";
import "./Home.scss";
import Calendar from "../../components/Calendar/Calendar";

const Home: React.FC = () => {
  return (
    <div className="container home-container">
      <div className="wrapper home-wrapper">
        <Calendar />
      </div>
    </div>
  );
};

export default Home;
