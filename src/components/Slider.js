import React, { useState } from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
// import Card from "./Card"
// import dataSlider from './dataSlider';
// import Dots from "./Dots";

// ** import mui for model
import { IconButton } from "@mui/material";
import { Modal } from "@mui/material";

// ** import icons
import { X } from "react-feather";
import CustomInnovativeSlider from "./CustomInnovativeSlider";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function Slider() {
  // ** state for model
  const [modal, setModal] = useState(false);
  const [modelNum, setModelNum] = useState(0);

  const modelData = [
    {
      title: "Bruni",
      title1: "Laboratorio di Falegnameria",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/assets/coverimage8.jpg",
    },
    {
      title: "Arteba",
      title1: "Alfabeto del Benessere",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/assets/coverimage7.jpg",
    },
    {
      title: "Mabo 1970",
      title1: "Back to Nature",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/assets/coverimage6.jpg",
    },
    {
      title: "Mabo 1970",
      title1: "Sarti del Metallo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/assets/coverimage5.jpg",
    },
    {
      title: "Innovative Surface",
      title1: "Cemento Contemporaneo",
      title2: "Catalogo IS",
      title3: "2020",
      description:
        "Elegante, materico, resistente e senza fughe, la finitura cementizia IS veste gli spazi creando la giusta cornice di ogni progetto.",
      image: "/assets/coverimage4.jpg",
    },
    {
      title: "Gentilin",
      title1: "Design Takeaway",
      description:
        "Design e grande distribuzione si incontrano in una collezione di prodotti che mixano irriverenza, rigore formale e tecniche produttive.",
      image: "/assets/coverimage3.jpg",
    },
    {
      title: "G.M.P.",
      title1: "Architectural Firm",
      description:
        "Un nuovo alfabeto progettuale nel mondo dell'arredobagno per una lettura contemporanea di come viviamo e pensiamo lo spazio dedicato a noi stessi.",
      image: "/assets/coverimage2.jpg",
    },
    {
      title: "Plebani",
      title1: "Made in Kitchen",
      description:
        "Procursori della lavorazione del metallo secondi i canoni del design contemporaneo. Mabol1970 realizza opere d'architettura in tutto il mondo.",
      image: "/assets/coverimage1.jpg",
    },
  ];

  const CustomModel = () => (
    <Modal open={modal}>
      <div className="model-container">
        {/* close icon button */}
        <IconButton
          onClick={() => setModal(!modal)}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: "9999",
            color: "#000",
            background: "#f0f0f0",
            padding: "0.5rem",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
          className="model-close"
        >
          <X size={24} />
        </IconButton>

        {/* image */}
        <div className="model-body">
          <img
            src={modelData[modelNum].image}
            alt="img"
            className="model-img"
          />
          <div>
            <h3>{modelData[modelNum].title}</h3>
            <h5>{modelData[modelNum].title1}</h5>
            <p style={{ fontSize: "20px" }}>
              {modelData[modelNum].description}
            </p>
          </div>
          {modelData[modelNum].title === "Innovative Surface" && (
            <div className="slider-catalogo">
              <h3>Catalogo IS</h3>
              <h5>2020</h5>
              <CustomInnovativeSlider />
            <img
        src={process.env.PUBLIC_URL + "/picdesigner.jpg"}
        id="picdesigner"
        className="mb-3"
      />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );

  return (
    <>
      {CustomModel()}
      <div className="slider">
        <Carousel breakpoints={breakPoints}>
          {modelData.map((data, index) => (
            <Item key={index}>
              <div
                style={{
                  backgroundImage: `url(${data.image})`,
                  width: "100%",
                  height: "100%",
                  borderRadius: "27px",
                  cursor: "pointer",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => {
                  setModelNum(index);
                  setModal(!modal);
                }}
              >
                <div class="card-category mt-5">{data.title}</div>
                <div class="card-title mt-2">{data.title1}</div>
                {/* <div class="card-body ps-5 pe-5 pt-3">{data.description}</div> */}
              </div>
            </Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}
