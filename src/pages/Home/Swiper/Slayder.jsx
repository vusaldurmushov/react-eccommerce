import React, { useState, useEffect, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./SlayderStyle.css";
import { Pagination } from "swiper";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Slayder() {
  const [img, setImage] = useState([]);

  const { category } = useSelector((state) => state.category);

  console.log(category);

  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        speed={1000}
        modules={[Pagination]}
        className='my'
      >
        {category.map((index, key) => (
          <SwiperSlide key={key}>
            <NavLink to={`/catalog/${index.title}`}>
              <img src={index.img} />
              <p>{index.title}</p>
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default memo(Slayder);
