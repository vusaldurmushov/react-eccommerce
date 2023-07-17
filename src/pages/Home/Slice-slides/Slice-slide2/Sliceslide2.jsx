import img1 from "../../../../assets/image/slickeImg1.png";
import img2 from "../../../../assets/image/slickeImg2.png";
import { useSelector, useDispatch } from "react-redux";
import React, { memo } from "react";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./slice2.css";
import { changeSlider } from "../../../../redux/slider/slider";

function Sliceslide2() {
  const dispatch = useDispatch();
  const { slider } = useSelector((state) => state.slider);
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
 
        autoplay={{
          delay: 3000,
        }}
        speed={3000}
        modules={[Pagination]}
        className='s'
        onSlideChange={() => dispatch(changeSlider())}
      >
        <SwiperSlide>
          <div className='sliceimg1'>
            <img src={img1} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='sliceimg2'>
            <img src={img2} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='sliceimg1'>
            <img src={img1} alt='' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='sliceimg2'>
            <img src={img2} alt='' />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Sliceslide2;
