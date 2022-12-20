import React from "react";
import Covertemplate from "./Covertemplate";
import Covertemplateslider from "./Covertemplateslider";
import Convertemplatecontact from "./Covertemplatecontact";
import Contactpagecomp from "./Contactpagecomp";
import Header from "./Header";

function Homepage() {
  return (
    <div className="home-page">
      <Header className="bg-main text-white" />
      <Covertemplate />
      <Covertemplateslider />
      <Convertemplatecontact />
          <Contactpagecomp />

    </div>
  );
}
export default Homepage;
