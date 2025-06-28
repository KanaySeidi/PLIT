import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const NewsPhoto = ({
  galleryImages,
  setGallerySwiperInstance,
  galleryPaginationRef,
  galleryPrevRef,
  galleryNextRef,
  setActiveImage,
}) => {
  useEffect(() => {
    if (
      galleryPrevRef.current &&
      galleryNextRef.current &&
      setGallerySwiperInstance
    ) {
      setGallerySwiperInstance((swiper) => {
        if (swiper?.params?.navigation) {
          swiper.params.navigation.prevEl = galleryPrevRef.current;
          swiper.params.navigation.nextEl = galleryNextRef.current;
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }
        return swiper;
      });
    }
  }, [galleryPrevRef, galleryNextRef, setGallerySwiperInstance]);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10">
      <Swiper
        onSwiper={setGallerySwiperInstance}
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true, el: galleryPaginationRef.current }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: galleryPrevRef.current,
          nextEl: galleryNextRef.current,
        }}
      >
        {galleryImages.map((img, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveImage(img)}
              className="overflow-hidden rounded shadow cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={galleryPaginationRef}
        className="swiper-pagination mt-6 flex justify-center"
      />
    </div>
  );
};
