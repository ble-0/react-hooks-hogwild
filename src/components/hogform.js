import React, { useState } from 'react';

/**
 * NewHogForm allows the user to input data for a new hog, including name, specialty,
 * weight, greased status, highest medal achieved, and image URL. On form submission,
 * it passes the new hog data to the parent component via `onAddHog`.
 * 
 * @param {function} onAddHog 
 */
const NewHogForm = ({ onAddHog }) => {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    weight: '',
    greased: false,
    'highest medal achieved': '',
    image: ''
  });
  const [error, setError] = useState('');
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };
  const validateWeight = (weight) => {
    if (!weight || isNaN(weight) || parseFloat(weight) <= 0) {
      return 'Weight must be a positive number greater than zero.';
    }
    return '';
  };
  const validateImage = (image) => {
    const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9-]+(\/[a-z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/i;
    if (!urlPattern.test(image)) {
      return 'Please enter a valid image URL.';
    }
    return '';
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    const weightError = validateWeight(formData.weight);
    const imageError = validateImage(formData.image);

    if (weightError || imageError) {
      setError(weightError || imageError);
      return;
    }
onAddHog(formData);
    setFormData({
      name: '',
      specialty: '',
      weight: '',
      greased: false,
      'highest medal achieved': '',
      image: ''
    });
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label>Specialty</label>
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          required
        />
      </div>

      <div className="field">
        <label>Weight</label>
        <input
          type="number"
          step="0.1"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
        {error && error.includes('Weight') && <span className="error">{error}</span>}
      </div>

      <div className="field">
        <label>Highest Medal Achieved</label>
        <select
          name="highest medal achieved"
          value={formData['highest medal achieved']}
          onChange={handleChange}
          required
        >
          <option value="">Select a medal</option>
          <option value="bronze">Bronze</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="platinum">Platinum</option>
          <option value="diamond">Diamond</option>
        </select>
      </div>

      <div className="field">
        <label>Image URL</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        {error && error.includes('image') && <span className="error">{error}</span>}
      </div>

      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="greased"
            checked={formData.greased}
            onChange={handleChange}
          />
          <label>Greased</label>
        </div>
      </div>

      <button className="ui button primary" type="submit">
        Add Hog
      </button>
    </form>
  );
};

export default NewHogForm;
