import React from "react";
import "./Home.css";
import homeImage from "../../assets/homeimage.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>
          Revolutionize You<span className="dots">...</span>
        </h1>
        <p>
          Unlock the Power of Artificial Intelligence: Discover How ChangeAI Can Transform Your Organization and Drive Innovation.
        </p>
        <button className="home-btn">Explore Solutions</button>
      </div>
      <div className="home-image">
        <img src={homeImage} alt="AI Device" />
      </div>
    </section>
  );
};

export default Home;
