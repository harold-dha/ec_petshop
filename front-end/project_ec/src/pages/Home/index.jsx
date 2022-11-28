import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import "./index.css";
// import { Box, Divider, Paper, Typography } from "@mui/material";
// import { GridProducts, GridActions } from "../../components";

import { get } from "../../services";

function Home() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(0);

  function addRefresh() {
    setRefresh(refresh + 1);
  }
  async function getProducts() {
    const response = await get("products");
    if (response.ok) {
      setProducts(response.data);
    }
  }

  useEffect(() => {
    getProducts();
  }, [refresh]);

  return (
    // <>
    //   <Paper sx={{ padding: 3 }}>
    //     <Typography variant="h4" textAlign="center">
    //       Marketplace App
    //     </Typography>
    //   </Paper>
    //   <GridActions sx={{ margin: 3 }} user={user} addRefresh={addRefresh} />
    //   <Divider sx={{ margin: 3 }} />

    //   <GridProducts list={products} />
    // </>
    <>
      {/* <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <h1>CompuPlaza</h1>
            <p>
              Encontraras los mejores precios y tambien hay rebajas para que
              puedas aprovechar!
            </p>
            <NavLink>
              <Button>Ir ahora</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
              <img src="images/hero.jpg" className="img-style" />
            </figure>
          </div>
        </div>
      </div> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
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
    </>
  );
}
const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;
export default Home;
