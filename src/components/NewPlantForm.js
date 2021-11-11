import React from "react";
const Url = "http://localhost:6001/plants";

function NewPlantForm({ handleNewPlant }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.children.name.value;
    const image = event.target.children.image.value;
    const price = event.target.children.price.value;

    const newPlant = { image: image, name: name, price: price };
    console.log("///////SENDING NEW PLANT DATA/////////");

    /**
     * console log the results of data before connecting to handle function
     * to make sure we are submitting correct information to correct key / values
     */

    fetch(Url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((data) => handleNewPlant(data));
  };

  // function to change plants state in plantpage^^
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
