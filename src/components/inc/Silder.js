import React from 'react';
import MySlider1 from "../images/slider1.jpg";
import MySlider2 from "../images/slider2.jpg";
import MySlider3 from "../images/slider3.jpg";
const imageStyle = {
    width: "100%",
    height: "650px",
    objectFit: "cover",
    display: "block",
    marginBottom: "100px",
};

function MySlider() {
  
  return (
    <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={MySlider1} style={imageStyle} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={MySlider2} style={imageStyle} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={MySlider3} style={imageStyle} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default MySlider;
