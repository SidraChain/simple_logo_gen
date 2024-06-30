import React from 'react';
import SearchableFontDropdown from './SearchableFontDropdown';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      "Roboto", "Montserrat", "Open Sans", "Playfair Display", "Merriweather", "Roboto Slab",
      "Lobster", "Pacifico", "Arial", "Verdana", "Tahoma", "Courier New"
    ]
  }
});

const fonts = [
  "Roboto", "Montserrat", "Open Sans", "Playfair Display", "Merriweather", "Roboto Slab",
  "Lobster", "Pacifico", "Arial", "Verdana", "Tahoma", "Courier New"
];


interface MainSettingsProps {
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

const MainSettings: React.FC<MainSettingsProps> = ({
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
  return (
    <div className="flex-1 p-6 bg-white text-gray-900 rounded-xl">
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
          className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${fontFamily}`}
          style={{ fontSize: `${fontSize}px`, letterSpacing: `${letterSpacing}px` }}
        />
      </div>
      <div className="mb-6">
        <SearchableFontDropdown fonts={[
          'arial', 'verdana', 'helvetica', 'tahoma', 'trebuchet-ms', 'times-new-roman',
          'georgia', 'garamond', 'courier-new', 'brush-script-mt', 'lobster', 'Pacifico',
          'roboto', 'roboto-bold', 'montserrat', 'open-sans', 'playfair-display', 'merriweather', 'roboto-slab'
        ]} fontFamily={fontFamily} setFontFamily={setFontFamily} />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Size</label>
        <input
          type="range"
          min="10"
          max="100"
          value={fontSize}
          onChange={(e) => onFontSizeChange(parseInt(e.target.value))}
          className="form-range"
        />
        <span className="ml-4 text-gray-800">{fontSize}px</span>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Letter Spacing</label>
        <input
          type="range"
          min="0"
          max="20"
          value={letterSpacing}
          onChange={(e) => onLetterSpacingChange(parseInt(e.target.value))}
          className="form-range"
        />
        <span className="ml-4 text-gray-800">{letterSpacing}px</span>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-12 p-0 border-none rounded-lg cursor-pointer shadow-sm transition ease-in-out m-0 focus:ring focus:ring-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Text Weight</label>
        <button
          onClick={onBoldToggle}
          className={`px-4 py-2 rounded text-white ${isBold ? 'bg-blue-600' : 'bg-gray-500'}`}
        >
          {isBold ? 'Bold' : 'Normal'}
        </button>
      </div>
    </div>
  );
};

export default MainSettings;
