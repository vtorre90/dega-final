import Carousel from "react-elastic-carousel";
import React from "react";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const carouselData = [
  {
    image:
      "/assets/innovative/innovative_surface_concrete_1_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_2_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_3_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_4_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_5_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_6_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_7_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_8_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_9_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_10_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_11_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_12_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_13_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_14_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_15_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_16_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_17_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_18_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_19_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_20_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_21_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_22_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_23_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_24_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_25_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_26_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_27_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_28_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_29_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_30_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_31_enrico_deganello_art_director_catalogo.jpg",
  },
  {
    image:
      "/assets/innovative/innovative_surface_concrete_32_enrico_deganello_art_director_catalogo.jpg",
  },
];

const CustomInnovativeSlider = () => {
  return (
    <>
      <div className="innovativeSlider">
        <Carousel breakpoints={breakPoints} pagination={false}>
          {carouselData.map((data, index) => (
            <Item key={index}>
              <div
                style={{
                  // backgroundImage: `url(${data.image})`,
                  width: "100%",
                  height: "100%",
                  borderRadius: "27px",
                  cursor: "pointer",
                  background: "#F8F8FA",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* <h1>hello world</h1> */}
                <img
                  src={data.image}
                  style={{
                    width: "100%",
                    // height: "100%",
                  }}
                  alt=""
                />
              </div>
            </Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default CustomInnovativeSlider;
