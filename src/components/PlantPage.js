import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plantsData }) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantsData={plantsData} />
    </main>
  );
}

export default PlantPage;
