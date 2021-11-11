import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const Url = "http://localhost:6001/plants";

function PlantPage({ plantsData }) {
  //STATE
  //setup state to hold our values
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function handleNewPlant(newPlant) {
    //update our plant list w new plant form submit info
    // add to our array, use spread operator of our array "plants"
    const newPlantArray = [...plants, newPlant];
    setPlants(newPlantArray);
  }

  const handleSearch = (event) => {
    const searchInput = event.target.value;
    setSearchQuery(searchInput);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  //FETCH
  //useEffect is an event listener for updating state, kinda
  useEffect(() => {
    fetch(Url)
      .then((r) => r.json())
      .then((plantsData) => {
        setPlants(plantsData);
      });
  }, []);

  return (
    <main>
      <NewPlantForm handleNewPlant={handleNewPlant} />
      <Search handleSearch={handleSearch} />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
