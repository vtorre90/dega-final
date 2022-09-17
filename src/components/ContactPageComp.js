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
    <div className="contact-page-comp" id="contacts">
      <div className="contact-text line-height-lg">
        Tutte le linee
        <br /> iniziano da un
        <br /> punto
      </div>
      <div className="dots-main">
        <img className="dots" src="assets/instagram_trasparent.png" alt="" />
        <img className="dots" src="assets/phone-call-icon.png" alt="" />
        <img className="dots" src="assets/mail.png" alt="" />
      </div>
      <div className="d-flex flex-column contact-text mt-5 line-height-lg">
        <span className="subtitle">Sede operativa</span>
        <span>Enrico Deganello Studio</span>
        <span>Via Saccarelli 14</span>
        <span>10144, Torino, Italia</span>
      </div>
      <div className="d-flex flex-column contact-text line-height-lg">
        <span className="subtitle">Sede legale</span>
        <span>Enrico Deganello</span>
        <span>Via Tiziano Vecellio 73</span>
        <span>35100, Padova, Italia</span>
        <span>0000000000</span>
      </div>
      <div
        className="main-bread pb-5"
        style={{ cursor: "pointer" }}
        onClick={handelSmoothScroll}
      >
        <div className="dot-black"></div>
        <div className="text-dot">Back to Top</div>
      </div>
    </div>
  );
}

export default ContactPageComp;
