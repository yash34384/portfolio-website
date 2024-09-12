'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '@/styles/slider.scss';
import Photo from '@/assets/photo.jpg';
import Image from 'next/image';

export default function WorkBox() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Slider {...settings} className="slider">
        <div className="slider-main">
          <section className="slider-box">hello1</section>
          {/* <Image src={Photo} alt="project image" className="slider-img" /> */}
          <p>hele</p>
        </div>
        <div className="slider-main">
          <section className="slider-box">hello2</section>
          <Image src={Photo} alt="project image" className="slider-img" />
        </div>
      </Slider>
    </>
  );
}
