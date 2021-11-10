import React from "react";
import PlantCard from "./PlantCard";

function PlantList(plantsData) {
  const plantArray = plantsData.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
      />
    );
  });
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantArray}
    </ul>
  );
}

export default PlantList;
