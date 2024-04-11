import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';


const BannerSlider = ()=>{
    return (
        <Swiper
          spaceBetween={50}
          loop={true}
          className="swiperMty"
          freemode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}

          slidesPerView={1}
        >
          <SwiperSlide>
            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/1/i/2/small-spos9017-poster-cars-car-mater-lightning-mcqueen-sally-original-imaghs6gtjchewpg.jpeg?q=90&crop=false" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdna.artstation.com/p/assets/images/images/017/022/542/large/amirhosein-naseri-desktop-screenshot-2019-04-03-18-17-47-11.jpg?1554338571" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ytimg.com/vi/bINc3TvmtKw/maxresdefault.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      );
}

export default BannerSlider;