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

  return (
    <div className="relative">
      <label className="block mb-2">Font</label>
      <input
        type="text"
        value={searchTerm}
        style={{ fontFamily: fontFamily }}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Search font"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-auto">
          {filteredFonts.map((font: string) => (
            <div
              key={font}
              className="px-3 py-2  text-gray-700 hover:bg-gray-100 cursor-pointer dropdown-item"
              style={{ fontFamily: font }}
              onClick={() => {
                setFontFamily(font);
                setSearchTerm(font);
                setIsOpen(false);
              }}
            >
              {font}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchableFontDropdown;
