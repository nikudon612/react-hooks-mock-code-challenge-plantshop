import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  //need to map plants to pull out every object and it's information
  //take all the plants and turn them into plant cards
  const plantCards = plants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        //destructered PLANT to make it easier to pull out values later
        plant={plant}
      />
    );
  });
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantCards}
    </ul>
  );
}

export default PlantList;
