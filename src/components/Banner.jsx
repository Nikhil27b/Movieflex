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
            <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/e5c86223-a489-4381-88f8-1d8f4aa5dba3.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="" />
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