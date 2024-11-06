import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data"; 
import HogList from "./HogList";
import NewHogForm from "./HogForm";

function App() {
  const [hogsData, setHogsData] = useState(hogs);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const addHog = (newHog) => {
    setHogsData((prevHogs) => [...prevHogs, newHog]);
    setIsFormVisible(false); 
  };

  return (
    <div className="App ui container">
      <Nav />
      <button
        className="ui button primary"
        onClick={() => setIsFormVisible((prev) => !prev)}
      >
        {isFormVisible ? "Hide Form" : "Add New Hog"}
      </button>
      {isFormVisible && <NewHogForm onAddHog={addHog} />}
      <HogList hogs={hogsData} />
    </div>
  );
}

export default App;
