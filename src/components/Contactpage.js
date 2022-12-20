import React from "react";
import Headercontact from "./Headercontact";
import Covertemplatecont from "./Covertemplatecont";
import ContactReferences from "./ContactReferences";
import ContactPageComp from "./ContactPageComp";
import ContactPageRefs from "./ContactPageRefs";

function Contactpage() {
  return (
    <div className="contact-page-main">
      <Headercontact className="bg-main text-black" />
      <Covertemplatecont />
      <ContactReferences />
      <ContactPageRefs />
      <ContactPageComp />
    </div>
  );
}

export default Contactpage;
