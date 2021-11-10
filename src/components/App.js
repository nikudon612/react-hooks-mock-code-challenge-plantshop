import { React, useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

//API URL
const apiUrl = "http://localhost:6001/plants";

function App() {
  //STATE

  const [plants, setPlants] = useState([]);

  //FETCH
  useEffect(() => {
    fetch(apiUrl)
      .then((r) => r.json())
      .then((data) => {
        setPlants(data);
        console.log(data);
      });
  }, []);


  return (
    <div className="app">
      <Header />
      <PlantPage plantsData={plants} />
    </div>
  );
}

export default App;
