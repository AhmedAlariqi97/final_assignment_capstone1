import React from "react";
import CardImage from "../../assets/greeksalad.jpg";

const Card = () => {
  return (
    <div className="w-1/4 bg-slate-100 rounded-sm">
      <div className="mb-3">
        <img className="w-fit" src={CardImage} alt="" />
      </div>
      <div className="px-5">
        <div className="flex justify-between mb-3">
          <h2>GreekSald</h2>
          <h3>$12.99</h3>
        </div>
        <div className="mb-3">
          <p className="text-start">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.{" "}
          </p>
        </div>
        <div className="flex justify-start gap-4 mb-3">
          <h2>Order a delivery</h2>
          <h3>D</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
