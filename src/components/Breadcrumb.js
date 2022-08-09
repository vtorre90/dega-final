import React from "react";

function Breadcrumb(props){
    return(
        <div className="main-bread">
            <div className="dot">
            </div>
            <div className=" text-main text-dot">
                {props.text}
            </div>
        </div>
    );
}
export default Breadcrumb;