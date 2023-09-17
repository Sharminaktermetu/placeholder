
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TechSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, // Number of slides to show at once
      slidesToScroll: 1, // Number of slides to scroll
      autoplay: true, // Auto-play slides
      autoplaySpeed: 3000, // Time between auto-play slides (3 seconds in this case)
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" alt="" />
        </div>
        <div>
        <img src="https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg" alt="" />
        </div>
        <div>
          <p>This is three</p>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    );
  };
  
  export default TechSlider;
  