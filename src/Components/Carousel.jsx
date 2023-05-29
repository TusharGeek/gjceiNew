import { Box, Paper } from "@mantine/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper";

const Carousel = ({ images = [] }) => {
  return (
    <Box
      sx={{
        "& .swiper-slide": {
          height: "auto !important",
        },
        "& .swiper": {
          paddingBottom: 50,
        },
      }}
    >
      <Swiper
        spaceBetween={15}
        slidesPerView={1}
        effect={"creative"}
        pagination={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Autoplay, EffectCreative, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Paper shadow="md" sx={{ blockSize: "100%" }}>
              <Box
                component="img"
                sx={(theme) => ({
                  display: "block",
                  maxInlineSize: "100%",
                  inlineSize: "100%",
                  objectFit: "cover",
                  blockSize: 300,
                  [theme.fn.largerThan("md")]: {
                    blockSize: 600,
                  },
                })}
                alt=""
                src={image}
              />
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
