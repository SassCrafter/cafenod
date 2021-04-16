import React from "react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import classes from "./HeroSlider.module.scss";
import HeroSlide from "./HeroSlide/HeroSlide";

SwiperCore.use([Navigation, Pagination, EffectFade]);

function HeroSlider() {
  const slides = [
    {
      id: 0,
      bg: "/images/hero/slider/slide-1.png",
      title: "Time to discover coffee house",
      lead:
        "The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.",
    },
    {
      id: 1,
      bg: "/images/hero/slider/slide-2.jpg",
      title: "Time to discover coffee house",
      lead:
        "The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.",
    },
    {
      id: 2,
      bg: "/images/hero/slider/slide-1.png",
      title: "Time to discover coffee house",
      lead:
        "The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.",
    },
    {
      id: 3,
      bg: "/images/hero/slider/slide-2.jpg",
      title: "Time to discover coffee house",
      lead:
        "The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. given an opportunity to sample.",
    },
  ];
  return (
    <Swiper
      className={classes.Slider}
      spaceBetween={50}
      slidesPerView={1}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      navigation={{
        nextEl: `.${classes.NextBtn}`,
        prevEl: `.${classes.PrevBtn}`,
      }}
      pagination={{
        clickable: true,
        el: `.${classes.Pagination}`,
        bulletClass: `${classes.Bullet}`,
        bulletActiveClass: `${classes.ActiveBullet}`,
        // clickableClass
      }}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((item) => (
        <SwiperSlide
          key={item.id}
          className={classes.Slide}
          style={{ backgroundImage: `url(${item.bg})` }}
        >
          <HeroSlide item={item} />
        </SwiperSlide>
      ))}

      <div className={classes.Navigation}>
        <button
          className={[classes.NavigationButton, classes.PrevBtn].join(" ")}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
        <button
          className={[classes.NavigationButton, classes.NextBtn].join(" ")}
        >
          <i className="fas fa-arrow-down"></i>
        </button>
      </div>
      <div className={classes.Pagination}>
        <span className={classes.Bullet}></span>
      </div>
    </Swiper>
  );
}

export default HeroSlider;
