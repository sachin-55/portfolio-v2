import React from 'react';

type Props = {
  currentColor: string;
  onColorSelect: Function;
};

const ColorPicker = ({ currentColor, onColorSelect }: Props) => {
  const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
  ];

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-option ${currentColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
        ></div>
      ))}
    </div>
  );
};
export default ColorPicker;
