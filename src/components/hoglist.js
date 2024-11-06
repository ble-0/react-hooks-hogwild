import React, { useState } from 'react';
import Hog from './Hog';
import FilterControls from './Filter';

const HogList = ({ hogs }) => {
  const [isGreased, setIsGreased] = useState(false);
  const [sortBy, setSortBy] = useState('name');
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const toggleHideHog = (hogName) => {
    setHiddenHogs((prev) =>
      prev.includes(hogName) ? prev.filter((name) => name !== hogName) : [...prev, hogName]
    );
  };
  const filteredHogs = hogs
    .filter((hog) => !hiddenHogs.includes(hog.name)) 
    .filter((hog) => (isGreased ? hog.greased : true)); 

  const sortedHogs = filteredHogs.sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return a.weight - b.weight;
  });

  return (
    <div className="hog-list">
      <FilterControls
        isGreased={isGreased}
        setIsGreased={setIsGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="ui three stackable cards">
        {sortedHogs.map((hog) => (
          <Hog
            key={hog.name}
            {...hog}
            onHide={() => toggleHideHog(hog.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default HogList;
