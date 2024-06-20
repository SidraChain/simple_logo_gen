import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@mdi/react';

const CustomDropdown = ({ icons, onChange, iconSize, iconColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(icons[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef(null);

  const filteredIcons = icons.filter(icon => 
    icon.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button className="p-2 bg-gray-700 rounded-md w-full text-white flex justify-between items-center"
              onClick={() => setIsOpen(!isOpen)}>
        {selectedIcon.library === 'FontAwesome' ? (
          <FontAwesomeIcon icon={selectedIcon.icon} size={iconSize} />
        ) : (
          <Icon path={selectedIcon.icon} size={iconSize} />
        )}
        <span className="ml-2">{selectedIcon.name}</span>
      </button>
      {isOpen && (
        <div className="absolute bg-white text-black w-full rounded-md shadow-lg z-10">
          <input
            type="text"
            placeholder="Type to filter"
            className="p-2 w-full"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="grid grid-cols-4 gap-2 p-2 overflow-y-auto max-h-60">
            {filteredIcons.map((icon, index) => {
              return (
              <button key={index} className="flex flex-col items-center p-2 hover:bg-gray-200"
                      onClick={() => {
                        setSelectedIcon(icon);
                        onChange(icon);
                        setIsOpen(false);
                      }}>
                {icon.library === 'FontAwesome' ? (
                  <FontAwesomeIcon icon={icon.icon} size="2x" />
                ) : (
                  <Icon path={icon.icon} size="2x" />
                )}
              </button>
            )})}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
