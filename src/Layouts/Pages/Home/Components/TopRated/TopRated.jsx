import useTopRated from "../../../../../Hooks/useTopRated";
import Title from "../../../../../ReUsable/Title";
import CardTop from "./CardTop";
import { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./toprated.css";

const TopRated = () => {
  const [topRated, loading, refetch] = useTopRated();

  if (loading) {
    return (
      <p>
        <span className="loading loading-bars w-full"></span>
      </p>
    );
  }
  console.log("Top", topRated);
  return (
    <div>
      <Title title={"Top Rated Movies"}></Title>
      <div className="hidden md:flex">
        <Swiper
          className="top-Swiper"
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          virtual
        >
          {topRated?.results.map((item, index) => (
            <SwiperSlide key={item.id} virtualIndex={index}>
              <CardTop item={item} index={index + 1}></CardTop>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" flex md:hidden">
      <Swiper
          className="top-Swiper"
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          virtual
        >
          {topRated?.results.map((item, index) => (
            <SwiperSlide key={item.id} virtualIndex={index}>
              <CardTop item={item} index={index + 1}></CardTop>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
