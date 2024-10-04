// AboutUs.js

import React from "react";
import profilepic from "/img/UrbanPizza.jpg";
import aboutUsImage from "/img/about.png";
import "./AboutUs.css";

const AboutUs = () => {
  const OfferDetail = () => {
    const whatsappNumber = "+917015823645";
    const message = `Hello! I'm interested in your "Buy 1 Get 1 Free Pizza" offer. Could you please provide me with more details? Thank you! `;
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=" +
      whatsappNumber +
      "&text=" +
      encodeURIComponent(message);

    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <div className="about-us-container">
        {/* <img src={profilepic} alt="About Us" className="offer-image" onClick={() => OfferDetail()}/> */}
        <h2 className="about-heading">Why Urban Pizzeria?</h2>
        <img src={profilepic} alt="About Us" className="about-us-image" />
        <div className="about-us-content">
          <p>
            Welcome to Urban Pizzeria, where passion meets pizza! Nestled in the
            heart of the city, we blend the classic flavors of traditional
            Italian cuisine with a modern twist, making every bite an
            experience. Our chefs are dedicated artisans, hand-crafting every
            pizza with the finest ingredients, from fresh basil to
            locally-sourced cheeses and dough made daily in-house.
          </p>
          <p>
            At Urban Pizzeria, we believe pizza is more than just food—it’s a
            way to bring people together. Whether you're here for a cozy dinner,
            a quick lunch break, or celebrating a special occasion, our vibrant
            atmosphere and friendly team are here to make every moment
            unforgettable. Join us, and savor the taste of authenticity,
            creativity, and community all in one slice.
          </p>
          <p>
            Urban Pizzeria—where city vibes and classic flavors come together!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
