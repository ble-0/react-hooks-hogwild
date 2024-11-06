import React from 'react';
import PropTypes from 'prop-types'; 
/**
 * FilterControls is a component that allows the user to filter and sort hogs.
 * It includes a dropdown for sorting and a checkbox to filter for greased pigs only.
 *
 * @param {boolean} isGreased - The current state of the "Greased Pigs Only" checkbox.
 * @param {function} setIsGreased - Function to update the isGreased state.
 * @param {string} sortBy - The current sort criterion (either 'name' or 'weight').
 * @param {function} setSortBy - Function to update the sortBy state.
 */
const FilterControls = ({ isGreased, setIsGreased, sortBy, setSortBy }) => {
  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="fields">
          <div className="field">
            <label>Sort by</label>
            <select
              className="ui dropdown"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="weight">Weight</option>
            </select>
          </div>
          <div className="field">
            <div className="ui checkbox">
              <input
                type="checkbox"
                checked={isGreased}
                onChange={(e) => setIsGreased(e.target.checked)}
              />
              <label>Greased Pigs Only?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// PropTypes validation for ensuring correct data types
FilterControls.propTypes = {
  isGreased: PropTypes.bool.isRequired,
  setIsGreased: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};

export default FilterControls;
