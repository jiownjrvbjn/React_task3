import React, { useState } from 'react';
import './App.css';

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      <button className="pick-button" onClick={toggleColorList}>
        Pick a color
      </button>
      {isOpen && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-item"
              style={{ background: color }}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>
      )}
      {selectedColor && (
        <div className="selected-color">
          <p>You've picked:</p>
          <div className="color-box" style={{ background: selectedColor }} />
        </div>
      )}
    </div>
  );
};

function App() {
  const colorOptions = ['red', 'blue', 'green', 'yellow'];

  return (
    <div className="App">
      <ColorPicker colors={colorOptions} />
    </div>
  );
}

export default App;

