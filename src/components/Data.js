import React from "react";
// import { Link, RichText, Date } from 'prismic-reactjs';

export default function Data() {
  // const current = new Date().toUTCString().slice(0, 16);
  const event = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const date = event.toLocaleDateString("it-IT", options).replace(/,/g, " ");

  return (
    <div className="date-main">
      <span>{date[0].toUpperCase() + date.slice(1)}</span>
    </div>
  );
}
