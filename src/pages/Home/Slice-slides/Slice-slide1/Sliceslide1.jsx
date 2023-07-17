import React, { useRef } from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide, Autoplay } from "swiper/react";
import "./slick1.css";
import commit from "../../../../assets/image/reyler.png";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./slick1.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import SwiperCore, { Autoplay } from 'swiper';

function Sliceslide1() {
  const dispatch = useDispatch();
  const { slider } = useSelector((state) => state.slider);
  const ref = useRef();
  useEffect(() => {
    ref.current.swiper.slideTo(slider);
  }, [slider]);
  return (
    <Swiper
      ref={ref}
      slidesPerView={1}
      spaceBetween={30}
      direction={"vertical"}
      loop={true}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1000,
      }}
      speed={3000}
      modules={[Pagination]}
      className='s1'
      navigation={false}
    >
      <SwiperSlide>
        <div className='slick1'>
          <p>
            <i className='fa-solid fa-fire-flame-curved'></i>Hot Deal In This
            Week
          </p>
          <p>
            Smart Digital <br /> Watch
          </p>
          <div className='slick1img'>
            <Link to='/shop'>
              <button>
                {" "}
                <i className='fa-solid fa-cart-shopping'></i>Shop Now
              </button>
            </Link>
            <img src={commit} alt='' />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slick1'>
          <p>
            <i className='fa-solid fa-fire-flame-curved'></i>Hot Deal In This
            Week
          </p>
          <p>
            Roco Wireless <br /> Headphones
          </p>
          <div className='slick1img'>
            <Link to='/shop'>
              <button>
                {" "}
                <i className='fa-solid fa-cart-shopping'></i>Shop Now
              </button>
            </Link>
            <img src={commit} alt='' />
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className='slick1'>
          <p>
            <i className='fa-solid fa-fire-flame-curved'></i>Hot Deal In This
            Week
          </p>
          <p>
            Roco Wireless <br /> Headphones
          </p>
          <div className='slick1img'>
            <Link to='/shop'>
              <button>
                {" "}
                <i className='fa-solid fa-cart-shopping'></i>Shop Now
              </button>
            </Link>
            <img src={commit} alt='' />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slick1'>
          <p>
            <i className='fa-solid fa-fire-flame-curved'></i>Hot Deal In This
            Week
          </p>
          <p>
            Roco Wireless <br /> Headphones
          </p>
          <div className='slick1img'>
            <Link to='/shop'>
              <button>
                {" "}
                <i className='fa-solid fa-cart-shopping'></i>Shop Now
              </button>
            </Link>
            <img src={commit} alt='' />
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
}

export default Sliceslide1;
