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
      title3: "2022",
      description:
        "Il Laboratorio di Falegnameria BRUNI è disegnato sulle esigenze di architetti ed interior designers per realizzare i progetti sartoriali di oggi e guardare alla contemporaneità del domani.",
      image: "/assets/coverimage8.jpg",
    },
    {
      title: "Arteba",
      title1: "Alfabeto del Benessere",
      description:
        "Un nuovo alfabeto progettuale nel mondo dell’arredobagno per una lettura contemporanea di come viviamo e pensiamo lo spazio dedicato a noi stessi.",
      image: "/assets/coverimage7.jpg",
    },
    
     {
      title: "Mabele",
      title1: "Sarti del Metallo",
      
      description:
        "Precursori nella lavorazione del metallo secondo i canoni del design contemporaneo, Mabele by Mabo1970 realizza opere d’architettura in tutto il mondo partendo da Torino, la patria del metallo.",
      image: "/assets/cover_card_mabele.jpg",
    },
    
     {
      title: "Mood",
      title1: "The Design Magazine",
      description:
        "La prima rivista digitale mensile in lingua iraniana dedicata al mondo del design e dell’interior design. Un punto di riferimento per rimanere aggiornati sull’evoluzione della contemporaneità in tutto il mondo.",
      image: "/assets/cover_card_mood.jpg",
    },
 
    {
      title: "Innovative Surface",
      title1: "Cemento Contemporaneo",
      title2: "Catalogo IS",
      description:
        "Elegante, materico, resistente e senza fughe, la finitura cementizia IS veste gli spazi creando la giusta cornice di ogni progetto.",
      image: "/assets/cover_innovative.jpg",
    },
    {
      title: "Gentilin",
      title1: "Design Takeaway",
       title3: "2018",
      description:
        "Design e grande distribuzione si incontrano in una collezione di prodotti che mixano irriverenza, rigore formale e tecniche produttive. Uno sviluppo di progetto organico che ha riguardato tutta la filiera dalla produzione alla commercializzazione. Gentilin è il nuovo brand creato dalla I.M.T. , storica industria vicentina di produzione di arredi in metallo polifunzionali.",
      image: "/assets/cover_gentilin_new.jpg",
    },
    {
      title: "G.M.P.",
      title1: "Architectural Firm",
      title3: "2016",
      description:
        "La direzione artistica dello studio Gian Mario Prandina ha coinvolto diversi professionisti per creare una immagine distintiva dove eleganza progettuale e competenza tecnica convivono in armonia per garantire al cliente una certezza di risultato, estetico e tecnico.",
      image: "/assets/prandina_card_new.jpg",
    },
    {
      title: "Plebani",
      title1: "Made in Kitchen",
      title3: "2017",
      description:
        "La collezione di cucine ABACO è stata studiata per adattarsi ad ogni esigenza di spazio garantendo configurazioni infinite e materiali contemporanei per soddisfare le necessità di stile richieste da architetti e professionisti dell’interior design.",
      image: "/assets/plebani_card_cover.jpg",
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
            right: 25,
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
            <h3 className="card-category-int mt-3">{modelData[modelNum].title}</h3>
            <h5 className="card-title-int">{modelData[modelNum].title1}</h5>
            <h6 className="card-anno-int">{modelData[modelNum].title3}</h6>
            <p style={{ fontSize: "20px" }} className="card-boby-int">
              {modelData[modelNum].description}
            </p>
          </div>

{modelData[modelNum].title === "Bruni" && (
              <div className="slider-catalogo">
              {/* <CustomInnovativeSlider/> */}
              <img src="/assets/1_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/2_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/3_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/4_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/5_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/6_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/7_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/8_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/9_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/10_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/11_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/12_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/13_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/14_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/15_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/16_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/17_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/18_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/19_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/20_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/21_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/22_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/23_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/24_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/25_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/26_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/27_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/28_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/29_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/30_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/31_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/32_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
                 <img src="/assets/33_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/34_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/35_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/36_BRUNI_FALEGNAMERIA_WOOD_DESIGN_ART DIRECTION_GRAPHIC_ARCHITECTS_INTERIOR DESIGN_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />            </div>
          )}   
          
          
          
          { modelData[modelNum].title === "Arteba" && (
              <div className="slider-catalogo">
              {/* <CustomInnovativeSlider/> */}
              <h4 className="mt-4 mb-5 font-fam"><u>NEW LOGO</u></h4>
              <img src="/assets/149.1_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/150_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/151_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello151.jpg" id="picdesignercard" className="mb-3" />
              <h4 className="mt-5 mb-2 font-fam"><u>COLLEZIONI</u></h4>
              <h4 className="mt-4 mb-3 font-fam">COLLEZIONE RUSTECH</h4>
              <img src="/assets/1_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/2_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/3_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
            
                
              <h4 className="mt-4 mb-3 font-fam">COLLEZIONE LINEA</h4>
               
              <img src="/assets/4_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/5_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/6_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              
              <h4 className="mt-4 mb-3 font-fam">COLLEZIONE EPOQUE</h4>

              <img src="/assets/7_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/8_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/9_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              
              <h4 className="mt-4 mb-3 font-fam">COLLEZIONE NEWSMART</h4>
                
              <img src="/assets/10_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/11_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              
              <h4 className="mt-4 mb-3 font-fam">COLLEZIONE SUPERNATURAL</h4>

                
              <img src="/assets/12_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/13_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/14_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              
              <h4 className="mt-5 mb-3 font-fam"><u>ALFABETO ARTEBA</u></h4>
              <img src="/assets/16_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/17_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
                <img src="/assets/18.1_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/19_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/20_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/21_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              
              <h4 className="mt-5 mb-2 font-fam"><u>CATALOGHI</u></h4>
              <h4 className="mt-4 font-fam">CATALOGO STILI</h4>
              <h6 className="mb-3 font-fam">2021</h6>

              <img src="/assets/22_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/23.2_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/24_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/25_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/26_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/27_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/28_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/29_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/30_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/31_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/32_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/33_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/34_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
                <img src="/assets/35_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/36_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/37_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/38_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/39_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/40_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/41_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/42_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/44_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/45_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/46_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/47_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/48_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/49_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/50_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/51_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              
             
              <h4 className="mt-4 font-fam">CATALOGO COLLEZIONI</h4>
              <h6 className="mt-2 mb-3 font-fam">2019</h6>
                
              <img src="/assets/52_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/53_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/54_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/55_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/56_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/57_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/58_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/59_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/60_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/61_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/62_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/63_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/64_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/65_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/66_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/67_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              
                
                <h4 className="mt-4 font-fam">CATALOGO COLLEZIONI</h4>
              <h6 className="mt-2 mb-3 font-fam">2016</h6>
                
                <img src="/assets/68_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
                <img src="/assets/69_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/70_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/71_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/72_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/73_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/74_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/75_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/76_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/77_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
                 <img src="/assets/78_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/79_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/80_arteba_arredobagno_design_catalogo_prodotto_art direction_enrico deganello.jpg" id="picdesignercard" className="mb-3" />
       </div>
             
          )}
          
          
          
          
          




          {modelData[modelNum].title === "Innovative Surface" && (
            <div className="font-fam">
              <h4 className="font-fam">CATALOGO IS</h4>
              <h6 className="font-fam">2020</h6>
              {/* <CustomInnovativeSlider/> */}
              <img src="/assets/innovative_1.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_02.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_03.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_04.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_05.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_06.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_07.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_08.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_09.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_10.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_11.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_12.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_13.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_14.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_15.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_16.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_17.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_18.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_19.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_20.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_21.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_22.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_23.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_24.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_25.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_26.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_27.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_28.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_29.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_30.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_31.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_32.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/inn_33.jpg" id="picdesignercard" className="mb-3" />
               <h4 className="mt-5 mb-3 font-fam">POSTCARDS ADV IS</h4>
               <img src="/assets/inn_34.jpg" id="picdesignercard" className="mb-3" />
               <h4 className="mt-5 mb-3 font-fam">LOGO IS</h4>
             
              
               <img src="/assets/inn_39.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_40.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_41.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_42.jpg" id="picdesignercard" className="mb-3" />
               <h4 className="mt-5 font-fam">SHADE</h4>
               <h6 className="font-fam">Table / wood / concrete finishing</h6>
               <img src="/assets/inn_43.jpg" id="picdesignercard" className="mb-3"/>
               <img src="/assets/inn_44.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_45.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_46.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_47.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_48.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_49.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_50.jpg" id="picdesignercard" className="mb-3" />
                 <h4 className="mt-5 font-fam">CATALOGO INNOVATIVE</h4>
               <h6 className="font-fam">2016</h6>
                <img src="/assets/inn_51.jpg" id="picdesignercard" className="mb-3"/>
               <img src="/assets/inn_52.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_53.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_54.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_55.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_56.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_57.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_58.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_59.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_60.jpg" id="picdesignercard" className="mb-3" />
               <h4 className="mt-5 mb-3 font-fam">ADV INNOVATIVE</h4>
               <img src="/assets/inn_61.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_62.jpg" id="picdesignercard" className="mb-3" />
               <h4 className="mt-5 mb-3 font-fam">WEB INNOVATIVE</h4>
               <img src="/assets/inn_63.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_64.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_65.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_66.jpg" id="picdesignercard" className="mb-3" />
               <img src="/assets/inn_67.jpg" id="picdesignercard" className="mb-5" />
            </div>

          )}
          
          {modelData[modelNum].title === "Gentilin" && (
            <div className="slider-catalogo">
              {/* <CustomInnovativeSlider/> */}
              <img src="/assets/gentilin_1.jpg" id="picdesignercard" className="mb-3" />
          <img src="/assets/gentilin_2.jpg" id="picdesignercard" className="mb-3" />
             <img src="/assets/gentilin_3.jpg" id="picdesignercard" className="mb-3" />
          <img src="/assets/gentilin_4.jpg" id="picdesignercard" className="mb-5" />
            </div>

          )}
          
          
          {modelData[modelNum].title === "Plebani" && (
            <div className="slider-catalogo">
              {/* <CustomInnovativeSlider/> */}
              <img src="/assets/plebani 1_enrico_deganello_art director.jpg" id="picdesignercard" className="mb-3" />
          <img src="/assets/plebani 2_enrico_deganello_art director.jpg" id="picdesignercard" className="mb-3" />
             <img src="/assets/plebani 3_enrico_deganello_art director.jpg" id="picdesignercard" className="mb-3" />
          <img src="/assets/plebani 4_enrico_deganello_art_director_kitchen_design.jpg" id="picdesignercard" className="mb-3" />
             <img src="/assets/plebani 5_enrico_deganello_art director.jpg" id="picdesignercard" className="mb-3" />
          <img src="/assets/plebani 6_enrico_deganello_art director.jpg" id="picdesignercard" className="mb-3" />
             <img src="/assets/plebani 7_enrico_deganello_art director.jpg" id="picdesignercard" className="mb-3" />
          <img src="/assets/plebani 8_enrico_deganello_art director.jpg" id="picdesignercard" className="mb-3" />
             <img src="/assets/plebani 9_enrico_deganello_art director.jpg" id="picdesignercard" className="mb-3" />
          <img src="/assets/plebani 10_enrico_deganello_art director.jpg" id="picdesignercard" className="mb-5" />
            </div>

          )}
          
              {modelData[modelNum].title === "G.M.P." && (
              <div className="slider-catalogo">
              {/* <CustomInnovativeSlider/> */}
              <img src="/assets/prandina_1.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/prandina_2.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/prandina_3.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/prandina_4.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/prandina_5.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/prandina_6.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/prandina_7.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/prandina_8.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/prandina_9.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/prandina_10.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/prandina_11.jpg" id="picdesignercard" className="mb-5" />
            </div>
          )}
          {modelData[modelNum].title === "Mood" && (
              <div className="slider-catalogo">
              {/* <CustomInnovativeSlider/> */}
              <img src="/assets/1_ENRICO_DEGANELLO_MOOD_DESIGN_MAGAZIEN_ART_DIRECTION.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/2_ENRICO_DEGANELLO_MOOD_DESIGN_MAGAZIEN_ART_DIRECTION.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/3_ENRICO_DEGANELLO_MOOD_DESIGN_MAGAZIEN_ART_DIRECTION.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/4_ENRICO_DEGANELLO_MOOD_DESIGN_MAGAZIEN_ART_DIRECTION.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/5_ENRICO_DEGANELLO_MOOD_DESIGN_MAGAZIEN_ART_DIRECTION.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/6_ENRICO_DEGANELLO_MOOD_DESIGN_MAGAZIEN_ART_DIRECTION.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/7_ENRICO_DEGANELLO_MOOD_DESIGN_MAGAZIEN_ART_DIRECTION.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/8_ENRICO_DEGANELLO_MOOD_DESIGN_MAGAZIEN_ART_DIRECTION.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/9_ENRICO_DEGANELLO_MOOD_DESIGN_MAGAZIEN_ART_DIRECTION15.jpg" id="picdesignercard" className="mb-3" />
            </div>
          )}   
          
          {modelData[modelNum].title === "Mabele" && (
              <div className="slider-catalogo">
              {/* <CustomInnovativeSlider/> */}

              <h4 className="mt-5 mb-2 font-fam"><u>COLLEZIONI</u></h4>
              <h4 className="mt-4 mb-3 font-fam">CATALOGO ARCHITETTURE</h4>
                        <h6 className="font-fam">2020</h6>

              <img src="/assets/mabele/1_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/2_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/3_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/4_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/5_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/6_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/7_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/8_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" /> 
              <img src="/assets/mabele/9_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/10_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/11_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/12_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/13_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/14_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <h4 className="mt-5 font-fam">CATALOGO FINITURE</h4>
              <h6 className="font-fam">2018</h6>
              <img src="/assets/mabele/15_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/15.1_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/15.2_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/15.3_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/15.4_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/15.5_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/15.6_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/15.7_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              
                <h4 className="mt-5 font-fam">CATALOGO ARCHITETTURE</h4>
              <h6 className="font-fam">2016</h6>
              <img src="/assets/mabele/16_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" /> 
              <img src="/assets/mabele/16.1_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" /> 

                <img src="/assets/mabele/17_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/18_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/19_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/19.1_CATALOGO_GRAF9ICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/20_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/21_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/22_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/22.1_CATALOGO_GRAFICA_MABELE_ENRIC9O_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/23_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/24_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" /> 
              <img src="/assets/mabele/25_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/26_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/27_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/28_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/29_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/30_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/31_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/31_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              
              
                <img src="/assets/mabele/32_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <h4 className="mt-5 font-fam">CATALOGO FINITURE</h4>
              <h6 className="font-fam">2016</h6>
                  <img src="/assets/mabele/33_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/34_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/35_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/36_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/37_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/38_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/39_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" /> 
              
                              <h4 className="mt-5 font-fam">CATALOGO ARCHITETTURE</h4>
              <h6 className="font-fam">2014</h6>
                  
                  <img src="/assets/mabele/41_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/42_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/43_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/44_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/45_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/46_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/47_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" /> 
              <img src="/assets/mabele/48_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/49_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/50_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/51_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/52_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/53_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/54_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/55_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" /> 
              <img src="/assets/mabele/56_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              
                <h4 className="mt-5 mb-2 font-fam"><u>DESIGN</u></h4>
              <h4 className="mt-4 mb-3 font-fam">Kanone/Bit</h4>
              <h6 className="font-fam">Tv table/Cofee table/metal</h6>

                <img src="/assets/mabele/57_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/58_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/59_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              
                <h4 className="mt-4 mb-3 font-fam">Borromini</h4>
              <h6 className="font-fam">Flooring/metal</h6>
                <img src="/assets/mabele/60_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/61_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/62_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <h4 className="mt-4 mb-3 font-fam">Dots</h4>
              <h6 className="font-fam">Flooring/metal</h6>
                
                <img src="/assets/mabele/63_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/64_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/65_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              
                <h4 className="mt-4 mb-3 font-fam">Memphis</h4>
              <h6 className="font-fam">Flooring/metal</h6>
                <img src="/assets/mabele/66_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/67_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/68_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <h4 className="mt-4 mb-3 font-fam">500</h4>
              <h6 className="font-fam">Table/metal </h6>
                
                <img src="/assets/mabele/69_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/70_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              
                <h4 className="mt-4 mb-3 font-fam">Kolata</h4>
              <h6 className="font-fam">Bookshelf/metal</h6>
                <img src="/assets/mabele/71_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" /> 
              <img src="/assets/mabele/72_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/73_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <h4 className="mt-4 mb-3 font-fam">Roma</h4>
              <h6 className="font-fam">Table/metal/glass</h6>
                <img src="/assets/mabele/74_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
                              <h4 className="mt-5 mb-2 font-fam"><u>FINITURE ESCLUSIVE</u></h4>

                  <img src="/assets/mabele/75_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/76_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/77_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/78_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/79_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/80_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/81_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
                              <h4 className="mt-5 mb-2 font-fam"><u>NEWSLETTER</u></h4>

                <img src="/assets/mabele/82_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/83_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/84_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/85_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />
              <img src="/assets/mabele/86_CATALOGO_GRAFICA_MABELE_ENRICO_DEGANELLO_ARCHITECTURE_METAL_DIREZIONE ARTISTICA.jpg" id="picdesignercard" className="mb-3" />

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
                <div class="card-category mt-4">{data.title}</div>
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
