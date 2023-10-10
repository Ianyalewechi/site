import React from 'react';
import Slider from 'react-slick';
import "./Carousel.css"

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className='slide'>
      <div>
        <h3>Slide 1</h3>
        <p>This is the content for slide 1.</p>
      </div>
      <div>
        <h3>Slide 2</h3>
        <p>This is the content for slide 2.</p>
      </div>
      <div>
        <h3>Slide 3</h3>
        <p>This is the content for slide 3.</p>
      </div>
      {/* Add more slide items as needed */}
    </Slider>
  );
};

export default Carousel;
