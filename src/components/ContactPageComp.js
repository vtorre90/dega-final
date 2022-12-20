import React from "react";

function ContactPageComp() {
  const handelSmoothScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="contact-page-comp -mt-5" id="contacts">
     
      <div className="dots-main">
        <a href="https://www.instagram.com/enricodeganellostudio/" target="_blank">
          <img className="dots" src="assets/instagram_trasparent.png" alt="" />
        </a>
        <a href="tel:00393470123634" target="_blank">
          <img className="dots" src="assets/phone-call-icon.png" alt="" />
        </a>
        <a href="mailto:dega@hotmail.it" target="_blank">
          {" "}
          <img className="dots" src="assets/mail.png" alt="" />
        </a>
      </div>
      <div className="d-flex flex-column contact-text mt-5 line-height-lg">
        <span className="subtitle">Sede operativa</span>
        <span>Enrico Deganello Studio</span>
        <span>Via Saccarelli 14</span>
        <span>10144, Torino, Italia</span>
        <span>+39 347 012 3634</span>
      </div>
      <div className="d-flex flex-column contact-text line-height-lg">
        <span className="subtitle">Sede legale</span>
        <span>Enrico Deganello</span>
        <span>Via Tiziano Vecellio 73</span>
        <span>35132, Padova, Italia</span>
        <span>04867810287</span>
      </div>
     
    </div>
  );
}

export default ContactPageComp;
