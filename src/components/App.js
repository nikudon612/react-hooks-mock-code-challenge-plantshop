import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
//API URL

//1. when the app starts, i can see all the plants
// DONE

//2. Add new plant when submitting the form
//DONE

//3. Mark Plant as soldout
//DONE

//4. I can search for plants by their name and see a filtered list of plants.
//DONE

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
