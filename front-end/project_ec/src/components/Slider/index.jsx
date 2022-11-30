import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "../../App.css";
import { Box } from "@mui/material";

const Sliders = () => {
  return (
    <Box sx={{}}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://pe-soapros-demos.s3.amazonaws.com/petshop/slider1.jpg"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pe-soapros-demos.s3.amazonaws.com/petshop/slider2.jpg"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pe-soapros-demos.s3.amazonaws.com/petshop/slider3.jpg"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pe-soapros-demos.s3.amazonaws.com/petshop/slider4.jpg"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pe-soapros-demos.s3.amazonaws.com/petshop/slider5.jpg"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://pe-soapros-demos.s3.amazonaws.com/petshop/slider6.jpg"
            width="100%"
            height="100%"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Sliders;
