import React from "react";

function Contentcont() {
  return (
    <div className="text-black">
      <img
        src={process.env.PUBLIC_URL + "/picdesigner.png"}
        id="picdesigner"
        className="mb-3"
      />
      <h4>Enrico Deganello / Sahar Alizadeh Fard</h4>
      <p className="pt-3">
        Lo studio è condotto da Enrico DeganelloDuis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Id velit ut tortor
        pretium viverra suspendisse potenti nullam. Tortor aliquam nulla
        facilisi cras fermentum odio eu feugiat pretium. In ornare quam viverra
        orci sagittis. Odio tempor orci dapibus ultrices in iaculis nunc. In
        vitae turpis massa sed elementum tempus egestas sed. Tortor at auctor
        urna nunc id.
      </p>
    </div>
  );
}

export default Contentcont;
