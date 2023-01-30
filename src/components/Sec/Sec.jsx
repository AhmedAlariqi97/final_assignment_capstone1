import React from "react";
import Chef from "../../assets/restaurantchefB.jpg";

const Sec = () => {
  return (
    <section className="hero  mb-12">
      <div className="continer flex">
        <div className="w-1/2 text-black p-12 px-40 ">
          <div className="mb-10">
            <h1 className="text-5xl text-left">Little Lemon</h1>
            <h3 className="text-left">Chicago</h3>
          </div>
          <div className=" pb-5">
            <p className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-slate-500 py-3">
            <a href="#">Reserve a Table</a>
          </div>
        </div>
        <div className="w-1/2 p-12">
          <img className="w-1/2" src={Chef} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Sec;
