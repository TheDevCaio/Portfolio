import React from "react";
import "../styles/mContacts.css";

const MyContacts = () => {
    return (
      <>
      <section><head><title>Contacts</title></head></section>
      <body> <main>
       <section><head><title>Contacts</title></head></section>
       <section><div className = "Box">
        <section><h1 className = "h1">Contacts</h1></section>
        <section><p className = "p">WhatsApp:</p></section>
        <section><button className = "WhatsApp"></button></section>
        <section><p className = "p">Instagram:</p></section>
        <section><button className = "Instagram"></button></section>
        <section><p className = "p">Email:</p></section>
        <section><button className="Email"></button></section>
       </div></section></main>

       <section><footer></footer></section>
       </body>
      </>
    );
  };
  
  export default MyContacts;