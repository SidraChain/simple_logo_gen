import React, { useState } from 'react';

interface AccentSettingsProps {
  text: string;
  onTextChange: (newText: string) => void;
  fontSize: number;
  onFontSizeChange: (newSize: number) => void;
  letterSpacing: number;
  onLetterSpacingChange: (newSpacing: number) => void;
  isBold: boolean;
  onBoldToggle: () => void;
  fontFamily: string;
  setFontFamily: (font: string) => void;
  color: string;
  setColor: (color: string) => void;
}

const AccentSettings: React.FC<AccentSettingsProps> = ({
  text,
  onTextChange,
  fontSize,
  onFontSizeChange,
  letterSpacing,
  onLetterSpacingChange,
  isBold,
  onBoldToggle,
  fontFamily,
  setFontFamily,
  color,
  setColor
}) => {
  const fonts = [
    "Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman",
    "Georgia", "Garamond", "Courier New", "Brush Script MT", "Lobster", "Pacifico"
    // Add more fonts as necessary
  ];

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <div className="mb-4">
        <label className="block mb-2">Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Font</label>
        <select
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
          className="form-select block w-full mt-1 text-gray-700 bg-white"
          style={{ fontFamily }}
        >
          {fonts.map(font => (
            <option key={font} value={font} style={{ fontFamily: font }}>
              {font}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Size</label>
        <input
          type="range"
          min="10"
          max="100"
          value={fontSize}
          onChange={(e) => onFontSizeChange(parseInt(e.target.value))}
          className="form-range"
        />
        <span className="ml-2">{fontSize}px</span>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Letter Spacing</label>
        <input
          type="range"
          min="0"
          max="20"
          value={letterSpacing}
          onChange={(e) => onLetterSpacingChange(parseInt(e.target.value))}
          className="form-range"
        />
        <span className="ml-2">{letterSpacing}px</span>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Bold</label>
        <button
          onClick={onBoldToggle}
          className={`px-4 py-2 rounded ${isBold ? 'bg-blue-600' : 'bg-gray-500'}`}
        >
          {isBold ? 'Bold' : 'Normal'}
        </button>
      </div>
    </div>
  );
};

export default AccentSettings;
