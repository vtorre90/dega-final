import React from "react";

const ContactReferencesCont = () => {
  return (
    <div className="text-black">
      <img
        src={process.env.PUBLIC_URL + "/lavandino.png"}
        id="picdesigner"
        className="mb-3 lavandino"
      />
      <h4>Attività</h4>
      <p className="pt-2 contactPage__activites">
        corporate identity
        <br />
        catalogues
        <br />
        concept and product development
        <br />
        design consultant
        <br />
        exhibition
     
        
      </p>
    </div>
  );
};

export default ContactReferencesCont;
