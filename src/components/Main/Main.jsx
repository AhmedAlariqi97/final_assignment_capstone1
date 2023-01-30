import React from "react";
import BookingTable from "../BookingTable/BookingTable";
import Hero from "../Hero/Hero";
import Sec from "../Sec/Sec";
import Specials from "../Specials/Specials";
import Testimonials from "../Testimonials/Testimonials";

const Main = () => {
  return (
    <div>
      <Hero />
      <Specials />
      <Testimonials />
      <Sec />
      <BookingTable/>
    </div>
  );
};

export default Main;
