import React, { useState } from 'react';

interface SearchableFontDropdownProps {
  fonts: string[];
  fontFamily: string;
  setFontFamily: (font: string) => void;
}

const SearchableFontDropdown: React.FC<SearchableFontDropdownProps> = ({ fonts, fontFamily, setFontFamily }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFonts = searchTerm ? fonts.filter((font: string) => font.toLowerCase().includes(searchTerm.toLowerCase())) : fonts;

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    setSearchTerm(''); // Clear search term when toggling dropdown
  };

  const handleSelectFont = (font: string) => {
    setFontFamily(font);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <label className="block mb-2">Font</label>
      <div className="relative">
        <div
          className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer"
          style={{ fontFamily: fontFamily }}
          onClick={handleToggleDropdown}
        >
          {fontFamily || 'Select a font'}
        </div>
        {isOpen && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-auto shadow-md">
            <div
              className="px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectFont('')}
            >
              Select a font
            </div>
            {filteredFonts.map((font: string) => (
              <div
                key={font}
                className="px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                style={{ fontFamily: font }}
                onClick={() => handleSelectFont(font)}
              >
                {font}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchableFontDropdown;
