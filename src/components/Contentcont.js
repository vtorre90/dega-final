import React from "react";

function Contentcont() {
  return (
    <div className="text-black">
      <img
        src={process.env.PUBLIC_URL + "/picdesigner.jpg"}
        id="picdesigner"
        className="mb-3"
      />
      <h4 style={{ fontWeight: "600" }}>
        Enrico Deganello / Sahar Alizadeh Fard
      </h4>
      <p className="pt-2 contactCont__content">
        Lo studio si occupa di direzione artistica, direzione creativa e
        consulenza strategica nell'ambito dell'interior design. L'attività
        consiste nel condurre e coordinare progetti organici finalizzati alla
        definizione di una identità aziendale esclusiva. Le aree di intervento
        sono varie e complementari e prevedono, in funzione degli obiettivi
        stabiliti, il contributo di collaboratori e professionisti specifici per
        ciascun settore.
      </p>
    </div>
  );
}

export default Contentcont;
