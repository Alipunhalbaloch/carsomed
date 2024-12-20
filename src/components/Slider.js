import React from 'react';
import silvir from '../assets/silvir.jpg';
import red from '../assets/red.png';
import slide3 from '../assets/slide3.png';

function Slider() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={silvir} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={red} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={slide3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Slider