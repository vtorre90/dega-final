import React from "react";
// import Header from "./Header";
import Content from "./Content";
// import Slider from './Slider';
// import Footer from './Footer';
import Breadcrumblack from "./Breadcrumblack";
import ContactReferencesCont from "./ContactReferencesCont";

function ContactReferences() {
  return (
    <div className="contactReferences text-black" id="activities">
      <ContactReferencesCont />
      <Breadcrumblack text="References" className="text-black" link="refs" />
    </div>
  );
}

export default ContactReferences;
