import React, { useState } from 'react';
/**
 * Hog component displays information about a specific hog.
 * When clicked, it toggles additional details about the hog.
 * Optionally, a "Hide Hog" button is displayed if `onHide` prop is passed.
 * 
 * @param {string} name - The name of the hog.
 * @param {string} image - The URL of the hog's image.
 * @param {string} specialty - The hog's specialty.
 * @param {number} weight - The hog's weight.
 * @param {boolean} greased - Whether the hog is greased or not.
 * @param {string} highest - The highest medal the hog has received (default: 'No Medal').
 * @param {function} onHide - A function to hide the hog card (optional).
 */
const Hog = ({
  name,
  image,
  specialty,
  weight,
  greased,
  highest = 'No Medal', 
  onHide
}) => {
  
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails((prevState) => !prevState);
  const handleHideClick = (e) => {
    e.stopPropagation(); 
    if (onHide) {
      onHide(); 
    }
  };

  return (
    <div
      className="ui card column" 
      onClick={toggleDetails} 
      style={{ cursor: 'pointer' }}
    >
      <div className="image hog-img-container">
        <img
          className="hog-img"
          src={image}
          alt={name}
        />
      </div>
      <div className="content details-container">
        <div className="header">
          <h3>{name}</h3>
        </div>
        {showDetails && (
          <div className="description">
            <p><strong>Specialty:</strong> {specialty}</p>
            <p><strong>Weight:</strong> {weight}</p>
            <p><strong>Greased:</strong> {greased ? "Yes" : "No"}</p>
            <p><strong>Highest Medal:</strong> {highest}</p>
          </div>
        )}
      </div>
      {onHide && (
        <div className="extra content" onClick={handleHideClick}>
          <button
            className="ui button"
          >
            Hide Hog
          </button>
        </div>
      )}
    </div>
  );
};

export default Hog;
