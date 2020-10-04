import React from "react";
import AdaptiveSlider from "adaptive-react-slider";
import img1 from "./img/ApZwfQ.jpg";
import img2 from "./img/mountains.jpg";
import img3 from "./img/wp2904877.jpg";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <AdaptiveSlider>
        <div>Hello from Slide 1</div>
        <div>Hello from Slide 2</div>
        <img src={img1} alt='sliderPic' />
        <img src={img2} alt='sliderPic' />
        <img src={img3} alt='sliderPic' />
      </AdaptiveSlider>
    </div>
  );
}

export default App;
