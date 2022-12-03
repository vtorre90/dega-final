import React from "react";
import Breadcrumblack from "./Breadcrumblack";

const ContactPageRefs = () => {
  return (
    <div className="contactReferences text-black" id="refs">
    <img
        src={process.env.PUBLIC_URL + "/imgnera.jpg"}
        className="mb-3"
      />
      <div className="text-black">
        <p className="pt-2" style={{ fontWeight: "600" }}>
          "La collaborazione con Enrico Deganello ci ha permesso di evolvere
          come azienda mostrandoci al pubblico come desideravamo e trovando il
          nostro target di riferimento"
        </p>
        <p>Palo Bosca / Mabo 1970</p>
        <p className="pt-2" style={{ fontWeight: "600" }}>
          "Vestibulum lorem sed risus ultricies tristique. A arcu cursus vitae
          congue mauris rhoncus aenean vel elit. Enim nunc faucibus a
          pellentesque sit amet porttitor eget. Dui nunc mattis enim ut tellus.
          In pellentesque massa placerat duis. Id velit ut tortor pretium
          viverra suspendisse."
        </p>
        <p>Angelo Bruni / Bruni Lab</p>
        <p className="pt-2" style={{ fontWeight: "600" }}>
          "Volutpat maecenas volutpat blandit aliquam etiam erat. Malesuada nunc
          vel risus commodo viverra. Sagittis eu volutpat odio facilisis.
          Vestibulum lectus mauris ultrices eros in cursus turpis. At lectus
          urna duis convallis convallis tellus id interdum."
        </p>
        <p>Andrea Perin / Arteba</p>
        <p className="pt-2" style={{ fontWeight: "600" }}>
          "Amet facilisis magna etiam tempor orci eu lobortis. Adipiscing vitae
          proin sagittis nisl rhoncus mattis rhoncus. Massa enim nec dui nunc
          mattis enim ut. Cras ornare arcu dui vivamus arcu felis bibendum."
        </p>
        <p>Roberta Bonomi / Innovative Surface</p>
      </div>
    </div>
  );
};

export default ContactPageRefs;
