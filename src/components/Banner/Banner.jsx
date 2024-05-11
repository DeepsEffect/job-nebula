// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero from "../Hero/Hero";

export default function Banner() {
  const slidesData = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discover New Opportunities",
      description:
        "Explore a wide range of job listings from various industries and find the perfect opportunity for you.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Apply with Ease",
      description:
        "Apply to your dream jobs with just a few clicks. Create your profile and start applying today.",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Track Your Applications",
      description:
        "Keep track of all your job applications in one place. Stay organized and never miss an opportunity.",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper lg:mt-10 min-h-[700px]"
      >
        {slidesData.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Hero
              title={slide.title}
              description={slide.description}
              imageUrl={slide.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
