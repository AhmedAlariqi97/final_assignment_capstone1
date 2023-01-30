import React from "react";
import Card from "../Card/Card";

const Specials = () => {
  return (
    <section className="mb-12">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl text-left">Specials</h1>
          <div className="bg-slate-500 py-3 w-44">
            <a href="#">Reserve a Table</a>
          </div>
        </div>
        <div className="flex justify-around">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Specials;
