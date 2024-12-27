 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components//Home";
import Customize from "./components/Customize"; // A new component for case/size/band selection

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customize" element={<Customize />} />
      </Routes>
    </Router>
  );
};

export default App; 




/*
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

const watchData = {
  model: 'Apple Watch Series 10',
  basePrice: 399,
  sizes: ['42mm', '46mm'],
  cases: [{ name: 'Aluminum', image: 'aluminum_case.png', price: 0 },
    { name: 'Titanum', image: 'aluminum_case.png', price: 220 },
  ],
  
  bands: [
    { name: 'Stainless Steel', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 99 },
    { name: 'Sport Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZDltL2RrNFBVSStNSERYSUpVdENCSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs', price: 49 },
    { name: 'Sport Band', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SUJyaDZZRFhzbEdXcWNtc2VCd0kwVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 49 },
    { name: 'FineWoven', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cENDQStWaTl2LytFZ0J1Z08zeVNPanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 79 },
    { name: 'Braided Solo Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=azQvbVNwVzRJcWRlblRnV01DRGIrVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc', price: 99 },
    { name: 'Solo Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Yk9SM2Y3YXpqSmgvQXZWL1c2b2kzanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 49 },
    { name: 'Nike Sport Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Y2FFaUFPN0pnRW1jekVybkRsS0xBWVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM', price: 49 },
    { name: 'Nike Sport Band', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZTZYcUxpNFhjd3V2dlVEdUFIclpCanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk', price: 49 },
  ],
 
};

function App() {
  
  const [selectedSize, setSelectedSize] = useState(watchData.sizes[0]);
  const [selectedCase, setSelectedCase] = useState(watchData.cases[0]);
  const [selectedBand, setSelectedBand] = useState(watchData.bands[0]);

  const calculatePrice = () => {
    let price = watchData.basePrice;
    price += selectedCase.price;
    price += selectedBand.price;
    return price;
  };

  const bandSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="app-container">
      <div className="watch-display">
        
        <div className="watch-image">
          {selectedCase && selectedBand && <img src={`${selectedCase.name.toLowerCase()}_${selectedBand.name.toLowerCase()}.png`} alt="Watch Preview" />}
        </div>
        <div className="watch-details">
          <h2>{watchData.model}</h2>
          <p>Size: {selectedSize}</p>
          <p>Case: {selectedCase.name}</p>
          <p>Band: {selectedBand.name}</p>
          <p>Price: ${calculatePrice()}</p>
        </div>
      </div>

      <div className="options">
        <div className="option-group">
          <h3>Case</h3>
          <div className="case-grid">
            {watchData.cases.map((caseOption) => (
              <div
                key={caseOption.name}
                className={`case-option ${selectedCase.name === caseOption.name ? 'selected' : ''}`}
                onClick={() => setSelectedCase(caseOption)}
              >
                <img src={caseOption.image} alt={caseOption.name} />
                <p>{caseOption.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="option-group">
          <h3>Size</h3>
          <div className="size-options">
            {watchData.sizes.map((size) => (
              <button
                key={size}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="option-group">
          <h3>Band</h3>
          <Slider {...bandSliderSettings}>
            {watchData.bands.map((band) => (
              <div
                key={band.name}
                className={`band-option ${selectedBand.name === band.name ? 'selected' : ''}`}
                onClick={() => setSelectedBand(band)}
              >
                <img src={band.image} alt={band.name} />
                <p>{band.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default App;
*/