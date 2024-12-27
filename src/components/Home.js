import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleGetStartedClick = () => {
    navigate("/customize"); // Navigate to "/customize"
  };

  return (
    <div className="container">
      <header className="header">
        <img
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-watch-design-studio-logo?wid=236&hei=52&fmt=jpeg&qlt=90&.v=1566849941844"
          alt="Apple Logo"
          className="logo"
        />
        
      </header>

      <div className="content">
      <h1 className="title">Apple Watch Studio</h1>
        <h2>
          Choose a case.<br />Pick a band.<br />Create your own style.
        </h2>
        <button className="get-started-btn" onClick={handleGetStartedClick}>
          Get started
        </button>
      </div>

      <div >
        <img
          src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv"
          alt="Apple Watch"
          className="watch-image"
        />
      </div>
    </div>
  );
};

export default Home;
