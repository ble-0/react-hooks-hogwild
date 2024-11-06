import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import NewHogForm from "./HogForm";

function App() {
  // State hooks
  const [hogList, setHogList] = useState(hogs); 
  const [showForm, setShowForm] = useState(false); 

  // Add new hog to the list
  const addNewHog = (newHog) => {
    setHogList((prev) => [...prev, newHog]);
    setShowForm(false); 
  };

  return (
    <div className="App ui container">
      <Nav />
      
      <button
        className="ui button primary"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Hide Form" : "Add New Hog"}
      </button>

      {showForm && <NewHogForm onAddHog={addNewHog} />}
      <HogList hogs={hogList} />
    </div>
  );
}

export default App;


