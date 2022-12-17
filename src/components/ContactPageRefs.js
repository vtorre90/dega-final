import React from "react";
import Breadcrumblack from "./Breadcrumblack";

const ContactPageRefs = () => {
  return (
    <div className="contactReferences text-black" id="refs">
    <img
        src={process.env.PUBLIC_URL + "/imgnera2.png"}
        id="picdesigner"
        className="mb-3 lavandino"
      />
      <div className="text-black">
              <h4>Referenze</h4>
        <p className="pt-2">
          "La collaborazione con Enrico Deganello ci ha permesso di evolvere
          come azienda mostrandoci al pubblico come desideravamo e trovando il
          nostro target di riferimento"
        </p>
        <p className="pt-1 pb-5" style={{ fontWeight: "600" }}>Angelo Bruni / Titolare Bruni</p>
        
        <p>
          "Collaborando con Enrico ho avuto modo di confrontarmi con una persona molto analitica e concreta. Ai miei 1.000 quesiti, mai una risposta di circostanza, ma sempre discussioni argomentate e soprattutto trasversale, mai banale. Questo modo di confrontarsi ha permesso all’azienda di scavare in profondità nelle dinamiche aziendali facendoci trovare soluzioni che hanno poi avuto un riscontro molto positivo nel mercato. Tra le varie caratteristiche, la capacità di analizzare e sintetizzare i fatti per poi trasformarli in soluzioni aziendali è certamente la qualità che più si è dimostrata più proficua"
        </p>
        <p className="pt-1 pb-2" style={{ fontWeight: "600" }}>Andrea Perin / Titolare Arteba</p>
        <p>
          "Lo studio Deganello ha contribuito a dare una organizzazione stilistica e commerciale alla mia azienda gestendo lo sviluppo del materiale grafico in funzione del target di riferimento. Il risultato è stato un aumento di valore della nostra produzione, un messaggio commerciale efficace, un catalogo al top nel suo settore ed una vision a lungo termine. Confrontarsi con una persona di esperienza come Enrico è sempre un piacere poichè sa trasformare domande aziendali in azioni concrete."
        </p>
        <p className="pt-1 pb-5" style={{ fontWeight: "600" }}>Roberta Bonomi / Innovative Surface</p>

<p>
          "Sicuro nell’obiettivo, flessibile nel processo. Direi che questa è la miglior definizione di uno studio unico nel suo genere come quello che Enrico Deganello ha creato. Ho avuto la fortuna di collaborare con Enrico per molti anni e con aziende diverse toccando con mano I risultati ottenuti. Lo studio sa unire e coordinare in modo perfettamente organico ricercatezza stilistica, sviluppo prodotto e azioni commerciali. Risultato garantito."
        </p>
        <p className="pt-1 pb-5" style={{ fontWeight: "600" }}>Giovanni Defendi / Consulente Materiali per Studi di Architettura</p>
      </div>
    </div>
  );
};

export default ContactPageRefs;
