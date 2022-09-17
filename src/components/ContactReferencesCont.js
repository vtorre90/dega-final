import React from "react";

const ContactReferencesCont = () => {
  return (
    <div className="text-black">
      <img
        src={process.env.PUBLIC_URL + "/picdesigner.png"}
        id="picdesigner"
        className="mb-3"
      />
      <h4>Attivita</h4>
      <p className="pt-2 contactPage__activites">
        corporate identity
        <br />
        catalogues
        <br />
        concept and product development
        <br />
        design conusult
        <br />
        graphic and web design
        <br />
        exhibition
        <br />
        design scouting
        <br />
        events concept
      </p>
    </div>
  );
};

export default ContactReferencesCont;