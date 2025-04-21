import React from "react";
import "./Home.css"; // External CSS file for styling
import myImage from "../../assets/homeimage.jpg";


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>
          Revolutionize You…
        </h1>
        <p>
          Unlock the Power of Artificial Intelligence: Discover how ChangeAI can
          transform your organization and daily operations.
        </p>
        <button>Explore Solutions</button>
      </div>

      <div className="home-right">
        {/* <img src="changeai-frontend\src\assets\homeimage.jpg" alt="Futuristic Device" /> */}
        <img src={myImage} alt="Futuristic" />
      </div>
    </div>
  );
};

export default Home;
