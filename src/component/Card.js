import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card">
      <h3>{meal.strMeal}</h3>
      <h5>Origin : {meal.strArea}</h5>

      <div>
        <img src={meal.strMealThumb} alt="" />
      </div>

      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
